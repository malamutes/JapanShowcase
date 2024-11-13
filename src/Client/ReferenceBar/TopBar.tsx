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

    const hubs = document.getElementById("Hubs");
    const food = document.getElementById("Food");
    const landmarks = document.getElementById("Landmarks");
    const entertainment = document.getElementById("Entertainment");
    const games = document.getElementById("Cult Favourites");
    const festival = document.getElementById("Festival");
    const reference = document.getElementById("ReferenceBar");

    const boundingBoxes = {
        hubs: hubs?.getBoundingClientRect(),
        food: food?.getBoundingClientRect(),
        landmarks: landmarks?.getBoundingClientRect(),
        entertainment: entertainment?.getBoundingClientRect(),
        games: games?.getBoundingClientRect(),
        festival: festival?.getBoundingClientRect(),
        reference: reference?.getBoundingClientRect()
    };

    //getting bottom of bounding boxes
    const hubsBottom = boundingBoxes['hubs'] ? boundingBoxes['hubs'].bottom + window.scrollY : null;
    const foodBottom = boundingBoxes['food'] ? boundingBoxes['food'].bottom + window.scrollY : null;
    const landmarksBottom = boundingBoxes['landmarks'] ? boundingBoxes['landmarks'].bottom + window.scrollY : null;
    const entertainmentBottom = boundingBoxes['entertainment'] ? boundingBoxes['entertainment'].bottom + window.scrollY : null;
    const gamesBottom = boundingBoxes['games'] ? boundingBoxes['games'].bottom + window.scrollY : null;
    const festivalBottom = boundingBoxes['festival'] ? boundingBoxes['festival'].bottom + window.scrollY : null;

    const hubsTop = boundingBoxes['hubs'] ? boundingBoxes['hubs'].top + window.scrollY : null;


    const progressHubs = (((hubsBottom ?? 0) - (hubsTop ?? 0)) / ((festivalBottom ?? 1) - (hubsTop ?? 0))) * 100;
    const progressFood = (((foodBottom ?? 0) - (hubsBottom ?? 0)) / ((festivalBottom ?? 1) - (hubsTop ?? 0))) * 100;
    const progressLandmarks = (((landmarksBottom ?? 0) - (foodBottom ?? 0)) / ((festivalBottom ?? 1) - (hubsTop ?? 0))) * 100;
    const progressEntertainment = (((entertainmentBottom ?? 0) - (landmarksBottom ?? 0)) / ((festivalBottom ?? 1) - (hubsTop ?? 0))) * 100;
    const progressGames = (((gamesBottom ?? 0) - (entertainmentBottom ?? 0)) / ((festivalBottom ?? 1) - (hubsTop ?? 0))) * 100;
    const progressFestival = (((festivalBottom ?? 0) - (gamesBottom ?? 0)) / ((festivalBottom ?? 1) - (hubsTop ?? 0))) * 100;

    // ?? is null coalescing where 0 / 1 is fallback value if previous operand is null or undefined

    function clamp(value: number, min: number, max: number) {
        return Math.max(min, Math.min(value, max));
    }

    console.log(hubsTop);
    console.log(festivalBottom);
    //we will hardcode festival bottom value and subtracting from top value for now until i can fix the first render not running issue
    useEffect(() => {
        const handleScroll = () => {
            setScrollAmount((window.scrollY / (5803.921875 - 853)) * 100);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <>
            <Container style={{
                position: 'fixed', zIndex: '10',
                backgroundColor: 'rgb(25, 25, 25)', height: '7.5%', maxHeight: '150px'
            }} fluid>
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

