import './ReferenceBar.css'
import { Container, Row, Col, Offcanvas, Accordion, Image, Dropdown, ProgressBar, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { TopBarData } from '../Data/ReferenceLinks';

export default function TopBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [more1200px, setMore1200px] = useState(true);

    const [more992px, setMore992px] = useState(true);

    const [currentHover, setCurrentHover] = useState("");

    const TBD = TopBarData;

    useEffect(() => {
        function widthLess1200() {
            if (window.innerWidth <= 1200) {
                setMore1200px(false);
            }
            else if (window.innerWidth > 1200) {
                setMore1200px(true);
            }
        };

        widthLess1200();

        window.addEventListener('resize', widthLess1200);

        return () => {
            window.removeEventListener('resize', widthLess1200);
        };

    }, []);

    useEffect(() => {
        function widthLess992() {
            if (window.innerWidth <= 992) {
                setMore992px(false);
            }
            else if (window.innerWidth > 992) {
                setMore992px(true);
            }
        };

        widthLess992();

        window.addEventListener('resize', widthLess992);

        return () => {
            window.removeEventListener('resize', widthLess992);
        };

    }, []);


    const [scrollAmount, setScrollAmount] = useState(0);

    const [hubs, setHubs] = useState<HTMLDivElement | null>(null);
    const [food, setFood] = useState<HTMLDivElement | null>(null);
    const [landmarks, setLandmarks] = useState<HTMLDivElement | null>(null);
    const [entertainment, setEntertainment] = useState<HTMLDivElement | null>(null);
    const [games, setGames] = useState<HTMLDivElement | null>(null);
    const [festival, setFestival] = useState<HTMLDivElement | null>(null);

    const [hubsBottom, setHubsBottom] = useState<number | null>(0);
    const [foodBottom, setFoodBottom] = useState<number | null>(0);
    const [landmarksBottom, setLandmarksBottom] = useState<number | null>(0);
    const [entertainmentBottom, setEntertainmentBottom] = useState<number | null>(0);
    const [gamesBottom, setGamesBottom] = useState<number | null>(0);
    const [festivalBottom, setFestivalBottom] = useState<number | null>(0);

    const [hubsTop, setHubsTop] = useState<number | null>(0);

    const [progressHubs, setProgressHubs] = useState<number>(0);
    const [progressFood, setProgressFood] = useState<number>(0);
    const [progressLandmarks, setProgressLandmarks] = useState<number>(0);
    const [progressEntertainment, setProgressEntertainment] = useState<number>(0);
    const [progressGames, setProgressGames] = useState<number>(0);
    const [progressFestival, setProgressFestival] = useState<number>(0);

    const [initialScroll, setInitialScroll] = useState(true);


    useEffect(() => {
        const handleScroll = () => {
            if (initialScroll) {
                setInitialScroll(false); // Set to false after the first scroll
            }
        };

        if (initialScroll) {
            window.addEventListener('scroll', handleScroll);
        }


        // Cleanup the event listener on unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [initialScroll]); // Dependency on initialScroll to update on the first scroll

    useEffect(() => {
        setHubs(document.getElementById("Hubs") as HTMLDivElement | null);
        setFood(document.getElementById("Food") as HTMLDivElement | null);
        setLandmarks(document.getElementById("Landmarks") as HTMLDivElement | null);
        setEntertainment(document.getElementById("Entertainment") as HTMLDivElement | null);
        setGames(document.getElementById("Cult Favourites") as HTMLDivElement | null);
        setFestival(document.getElementById("Festival") as HTMLDivElement | null);
        console.log("adhuiashihd");
    }, [initialScroll]);

    useEffect(() => {
        const handleResizeBounds = () => {
            setHubsTop((hubs?.getBoundingClientRect().top ?? 0) + window.scrollY);
            setHubsBottom((hubs?.getBoundingClientRect().bottom ?? 0) + window.scrollY);
            setFoodBottom((food?.getBoundingClientRect().bottom ?? 0) + window.scrollY);
            setLandmarksBottom((landmarks?.getBoundingClientRect().bottom ?? 0) + window.scrollY);
            setEntertainmentBottom((entertainment?.getBoundingClientRect().bottom ?? 0) + window.scrollY);
            setGamesBottom((games?.getBoundingClientRect().bottom ?? 0) + window.scrollY);
            setFestivalBottom((festival?.getBoundingClientRect().bottom ?? 0) + window.scrollY);
            //console.log("andasdashd");
        }

        window.addEventListener('resize', handleResizeBounds);

        if (initialScroll) {
            window.addEventListener('scroll', handleResizeBounds);
            //console.log("HELLO");
        }
        else if (initialScroll === false) {
            // console.log("BYEBYE")
        }

        //load stuff below is to defer calcualtion on page refresh to prevent the values above being the same
        //still not sure familiar with it but apparently it has to do with the bounding boxes/ dom elements
        //not being fully rendered yet when i call it
        //need to prolly use f12 and check calls later on but its boring so defer for later
        const onLoad = () => {
            setTimeout(() => handleResizeBounds(), 0);
            console.log("scroll", scrollAmount);
        };

        window.addEventListener('load', onLoad);

        return () => {
            window.removeEventListener('resize', handleResizeBounds);
            window.removeEventListener('scroll', handleResizeBounds);
            window.removeEventListener('load', onLoad);
        }
    }, [hubs, initialScroll])

    /*
        useEffect(() => {
            console.log("HUB DIMS", hubsTop, hubsBottom, festivalBottom, foodBottom, landmarksBottom, entertainmentBottom, gamesBottom);
    
        }, [hubsTop]) */


    useEffect(() => {
        setProgressHubs((((hubsBottom ?? 0) - (hubsTop ?? 0)) / ((festivalBottom ?? 1) - (hubsTop ?? 0))) * 100);
        setProgressFood((((foodBottom ?? 0) - (hubsBottom ?? 0)) / ((festivalBottom ?? 1) - (hubsTop ?? 0))) * 100);
        setProgressLandmarks((((landmarksBottom ?? 0) - (foodBottom ?? 0)) / ((festivalBottom ?? 1) - (hubsTop ?? 0))) * 100);
        setProgressEntertainment((((entertainmentBottom ?? 0) - (landmarksBottom ?? 0)) / ((festivalBottom ?? 1) - (hubsTop ?? 0))) * 100);
        setProgressGames((((gamesBottom ?? 0) - (entertainmentBottom ?? 0)) / ((festivalBottom ?? 1) - (hubsTop ?? 0))) * 100);
        setProgressFestival((((festivalBottom ?? 0) - (gamesBottom ?? 0)) / ((festivalBottom ?? 1) - (hubsTop ?? 0))) * 100);
    }, [festivalBottom])

    /*
        useEffect(() => {
            console.log("PROGRESS BARS", progressEntertainment, progressFestival, progressFood, progressHubs, progressLandmarks, progressGames);
    
        }, [progressEntertainment, progressFestival, progressFood, progressHubs, progressLandmarks, progressGames])
    */

    function clamp(value: number, min: number, max: number) {
        return Math.max(min, Math.min(value, max));
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth >= 2000) {
                setScrollAmount((window.scrollY * 1.55 / ((festivalBottom ?? 1) - (hubsTop ?? 0))) * 100);
            }
            else if (window.innerWidth < 2000) {

                //console.log(festivalBottom, hubsTop, "asdhsauidhsaidh", window.scrollY);
                setScrollAmount((window.scrollY / ((festivalBottom ?? 1) - (hubsTop ?? 0))) * 100);
            }

        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);

        }
    }, [hubsTop, hubsBottom, festivalBottom, foodBottom, landmarksBottom, entertainmentBottom, gamesBottom])
    /*
        useEffect(() => {
            console.log(scrollAmount);
    
        }, [scrollAmount])
    
        useEffect(() => {
            console.log("Scroll Y:", window.scrollY);
            console.log("Festival Bottom:", festivalBottom);
            console.log("Hubs Top:", hubsTop);
        }, [festivalBottom, hubsTop]);
    
        useEffect(() => {
            console.log("Scroll Amount:", scrollAmount);
        }, [scrollAmount]);
    */
    return (
        <>
            <Container style={{
                position: 'fixed', zIndex: '10',
                height: '7.5%', maxHeight: '150px', top: '0',
                transition: 'backgroundColor 1s ease, opacity 1s ease',
                opacity: `${window.scrollY === 0 ? "0.1" : "1"}`,
                backgroundColor: `${window.scrollY === 0 ? "" : "rgb(25,25,25)"}`
            }} fluid className="TopBarContainer">
                <Row style={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Col xs={more992px ? 1 : 2} style={{
                        display: 'flex', justifyContent: 'center',
                    }}>
                        <Image fluid src="public\Images\CherryBlossom.png"
                            className='SagaFlag'
                            onClick={handleShow}
                        />

                        {more1200px ? (<Offcanvas placement="top" show={show}
                            style={{ maxHeight: '55vh', height: '40cqw' }}
                            onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>JAPAN</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Container style={{ maxWidth: '1824px' }}>
                                    <Row >
                                        <Col xs={8}>
                                            <Row>
                                                {Object.keys(TBD).map((topBarDataItem, index) => (
                                                    <Col key={index} style={{ padding: '0' }} xs={2}>
                                                        <h6 style={{ marginBottom: '1cqw', marginLeft: '-0.25cqw' }}>{topBarDataItem}</h6>
                                                        <Row >
                                                            {Object.keys(TBD[topBarDataItem]).map((topBarDataInnerItem, innerIndex) => (
                                                                <Col xs={12} style={{ marginBottom: '0.8cqw', marginLeft: '0cqw' }} key={innerIndex}>
                                                                    <span className='TopBarText' onMouseEnter={() => setCurrentHover(TBD[topBarDataItem][topBarDataInnerItem].image)}
                                                                        onMouseLeave={() => setCurrentHover("")}
                                                                    >{TBD[topBarDataItem][topBarDataInnerItem].title}</span>
                                                                </Col>
                                                            ))}
                                                        </Row>
                                                    </Col>

                                                ))}
                                            </Row>

                                        </Col>

                                        <Col xs={4}>
                                            <Image src={currentHover} style={{ maxWidth: '90%', aspectRatio: '1.5' }} />
                                        </Col>

                                    </Row>
                                </Container>
                            </Offcanvas.Body>
                        </Offcanvas>)

                            :

                            (
                                <Offcanvas placement="start" show={show}
                                    onHide={handleClose}>
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title>JAPAN</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body >
                                        <Container style={{ maxWidth: '1824px' }} >
                                            <Accordion >
                                                {Object.keys(TBD).map((topBarDataItem, accordionIndex) => (
                                                    <Accordion.Item eventKey={`${accordionIndex}`} key={accordionIndex} >
                                                        <Accordion.Header >{topBarDataItem}</Accordion.Header>
                                                        <Accordion.Body >
                                                            <Col>
                                                                {Object.keys(TBD[topBarDataItem]).map((topBarDataInnerItem, accordionInnerIndex) => (
                                                                    <Row key={accordionInnerIndex}>
                                                                        <Image style={{ cursor: 'pointer', marginBottom: '2.5cqw' }} src={TBD[topBarDataItem][topBarDataInnerItem].image} />
                                                                    </Row>
                                                                ))}
                                                            </Col>

                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                ))}

                                            </Accordion>
                                        </Container>
                                    </Offcanvas.Body>
                                </Offcanvas>
                            )}


                    </Col>

                    <Col xs={more992px ? 8 : 0} >
                        <ProgressBar style={{ height: '5px', overflow: 'visible' }} >
                            <ProgressBar now={clamp(scrollAmount, 0, progressHubs)} key={1} style={{
                                backgroundColor: "red",
                                boxShadow: `0px 0px 20px 2.5px rgba(255, 0, 0, ${scrollAmount >= progressHubs ? 0.7 : 0})`
                            }} />
                            <ProgressBar now={clamp(scrollAmount - progressHubs, 0, progressFood)} key={2} style={{
                                backgroundColor: 'green',
                                boxShadow: `0px 0px 20px 2.5px rgba(0, 255, 0, ${scrollAmount >= progressHubs + progressFood ? 0.7 : 0})`
                            }} />
                            <ProgressBar now={clamp(scrollAmount - progressHubs - progressFood, 0, progressLandmarks)} key={3} style={{
                                backgroundColor: "#FFD700",
                                boxShadow: `0px 0px 20px 2.5px rgba(255, 215, 0, ${scrollAmount >= progressHubs + progressFood + progressLandmarks ? 0.7 : 0})`
                            }} />
                            <ProgressBar now={clamp(scrollAmount - progressHubs - progressFood - progressLandmarks, 0, progressEntertainment)} key={4} style={{
                                backgroundColor: "#FF1493",
                                boxShadow: `0px 0px 20px 2.5px rgba(255, 20, 147, ${scrollAmount >= progressHubs + progressFood + progressLandmarks + progressEntertainment ? 0.7 : 0})`
                            }} />
                            <ProgressBar now={clamp(scrollAmount - progressHubs - progressFood - progressLandmarks - progressEntertainment, 0, progressGames)} key={5} style={{
                                backgroundColor: "#800080",
                                boxShadow: `0px 0px 20px 2.5px rgba(128, 0, 128, ${scrollAmount >= progressHubs + progressFood + progressLandmarks + progressEntertainment + progressGames ? 0.7 : 0})`
                            }} />
                            <ProgressBar now={clamp(scrollAmount - progressHubs - progressFood - progressLandmarks - progressEntertainment - progressGames, 0, progressFestival)} key={6} style={{
                                backgroundColor: "#1E90FF",
                                boxShadow: `0px 0px 20px 2.5px rgba(30, 144, 255, ${scrollAmount >= progressHubs + progressFood + progressLandmarks + progressEntertainment + progressGames + progressFestival ? 0.7 : 0})`
                            }} />
                        </ProgressBar>


                    </Col>

                    <Col xs={more992px ? 3 : 5} style={{
                        display: 'flex', justifyContent: `${more992px ? 'center' : 'center'}`,
                    }}>
                        <Row>
                            <Col style={{ marginRight: `${more992px ? "2.5cqw" : ""}` }}>
                                <Dropdown >
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        <span className="DropdownText">About Me</span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="">Background</Dropdown.Item>
                                        <Dropdown.Item href="">Interests</Dropdown.Item>
                                        <Dropdown.Item href="">Contact Me</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>

                            <Col >
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        <span className="DropdownText">Motivations</span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="">References</Dropdown.Item>
                                        <Dropdown.Item href="">Engaging UI</Dropdown.Item>
                                        <Dropdown.Item href="">Site speed</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>

                        </Row>

                    </Col>

                </Row >

            </Container >

        </>
    )
}

