import './ReferenceBar.css'
import { Container, Row, Col, Offcanvas, Accordion, Image, ProgressBar } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { TopBarData } from '../Data/ReferenceLinks';
import MatchmediaQuery from '../../CommonLogic(NON-UI)/MatchmediaQuery';
import { useNavigate } from 'react-router-dom';

const navMenuData: { [key: string]: string } = {
    "Prefecture": "red",
    "Food": "green",
    "Landmark": "rgb(255, 215, 0)",
    "Entertainment": "rgb(255, 20, 147)",
    "Game": "purple",
    "Festival": "blue",
    "Site map": 'cyan'
}

export default function TopBar() {
    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [more992, setMore992] = useState((window.innerWidth >= 992));
    const more992px = MatchmediaQuery({ size: 992, more: more992, setMore: setMore992 });

    const [more768, setMore768] = useState((window.innerWidth >= 768));
    const more768px = MatchmediaQuery({ size: 768, more: more768, setMore: setMore768 });

    const [showBottom, setShowBottom] = useState(false);

    const [currentHover, setCurrentHover] = useState("");

    const [showNavMenu, setShowNavMenu] = useState(false);
    const handleCloseNavOffCanvas = () => setShowNavMenu(false);

    const [anchorLinkHover, setAnchorLinkHover] = useState("");

    const TBD = TopBarData;

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
        setHubs(document.getElementById("Prefecture") as HTMLDivElement | null);
        setFood(document.getElementById("Food") as HTMLDivElement | null);
        setLandmarks(document.getElementById("Landmark") as HTMLDivElement | null);
        setEntertainment(document.getElementById("Entertainment") as HTMLDivElement | null);
        setGames(document.getElementById("Game") as HTMLDivElement | null);
        setFestival(document.getElementById("Festival") as HTMLDivElement | null);
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

    return (
        <>
            <Container style={{
                position: 'fixed', zIndex: '10',
                height: '7.5%', minHeight: '60px', maxHeight: '150px', top: '0',
                transition: 'backgroundColor 1s ease, opacity 1s ease',
                opacity: `${window.scrollY === 0 ? "0.1" : "1"}`,
                backgroundColor: `${window.scrollY === 0 ? "" : "rgb(25,25,25)"}`
            }} fluid className="TopBarContainer">
                <Row style={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Col lg={1} xs={3} style={{
                        display: 'flex', justifyContent: 'center',
                    }}>
                        <Image fluid src="/Images/CherryBlossom.png" alt='CherryBlossomLogo'
                            className='SagaFlag'
                            onClick={handleShow}
                        />
                        {more992px ? (<Offcanvas placement="top" show={show}
                            style={{ maxHeight: '52.5vh', height: '52.5cqh', backgroundColor: 'rgb(200, 200, 200)' }}
                            onHide={handleClose} scroll={true}>
                            <Offcanvas.Header closeButton style={{ padding: '15px 5px 0px 25px' }}>
                                <Offcanvas.Title >JAPAN</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Container style={{ maxWidth: '1824px' }}>
                                    <Row >
                                        <Col xs={7} style={{
                                            maxHeight: '40vh', overflowY: 'hidden',
                                        }}>
                                            <Row style={{
                                                minHeight: '100%',
                                                transition: 'transform 1s ease',
                                                transform: `translateY(${showBottom ? -100 : 0}%)`
                                            }}>
                                                {Object.keys(TBD).slice(0, 3).map((TBDOuterItem, index) => (
                                                    <Col key={index}>
                                                        <h6 style={{
                                                            marginBottom: '1cqw', marginLeft: '-0.25cqw',
                                                            fontSize: '20px'
                                                        }}>{TBDOuterItem}</h6>
                                                        {Object.keys(TBD[TBDOuterItem]).map((TBDInnerItem, InnerIndex) => (
                                                            <Row key={InnerIndex} style={{ margin: '0', maxWidth: 'fit-content' }}>
                                                                <span className='TopBarText'
                                                                    onMouseEnter={() => setCurrentHover(TBD[TBDOuterItem][TBDInnerItem].image)}
                                                                    onMouseLeave={() => setCurrentHover("")}
                                                                    onClick={() => navigate(`/${TBDOuterItem}/${TBDInnerItem}`)}
                                                                >{TBD[TBDOuterItem][TBDInnerItem].title}</span>
                                                            </Row>
                                                        ))}
                                                    </Col>
                                                ))}
                                            </Row>

                                            <Row style={{
                                                minHeight: '100%',
                                                transition: 'transform 1s ease',
                                                transform: `translateY(${showBottom ? -100 : 0}%)`
                                            }}>
                                                {Object.keys(TBD).slice(3, Object.keys(TBD).length).map((TBDOuterItem, index) => (
                                                    <Col key={index}>
                                                        <h6 style={{
                                                            marginBottom: '1cqw', marginLeft: '-0.25cqw',
                                                            fontSize: '20px'
                                                        }}>{TBDOuterItem}</h6>
                                                        {Object.keys(TBD[TBDOuterItem]).map((TBDInnerItem, InnerIndex) => (
                                                            <Row key={InnerIndex} style={{ margin: '0', maxWidth: 'fit-content' }}><span className='TopBarText'
                                                                onMouseEnter={() => setCurrentHover(TBD[TBDOuterItem][TBDInnerItem].image)}
                                                                onMouseLeave={() => setCurrentHover("")}
                                                                onClick={() => navigate(`/${TBDOuterItem}/${TBDInnerItem}`)}
                                                            >{TBD[TBDOuterItem][TBDInnerItem].title}</span>

                                                            </Row>
                                                        ))}
                                                    </Col>
                                                ))}

                                            </Row>

                                        </Col>

                                        <Col xs={5} style={{ maxHeight: '40vh' }}>
                                            <Image src={currentHover} style={{ maxWidth: '100%', maxHeight: '100%' }} fluid />
                                        </Col>

                                    </Row>
                                </Container>
                                <Image style={{
                                    position: 'absolute', top: '90%', left: '2%', cursor: 'pointer',
                                    maxWidth: '35px', transition: 'transform 0.5s ease',
                                    transform: `rotate(${showBottom ? 180 : 0}deg)`
                                }}
                                    src='/Images/DownArrow.png'
                                    onClick={() => setShowBottom(showBottom => !showBottom)} />
                            </Offcanvas.Body>
                        </Offcanvas>)
                            :
                            (
                                <Offcanvas placement="start" show={show}
                                    onHide={handleClose} scroll={true} style={{ backgroundColor: 'rgb(200,200,200)' }}>
                                    <Offcanvas.Header closeButton >
                                        <Offcanvas.Title >JAPAN</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body >
                                        <Container style={{ maxWidth: '1824px' }} >
                                            <Accordion >
                                                {Object.keys(TBD).map((topBarDataItem, accordionIndex) => (
                                                    <Accordion.Item eventKey={`${accordionIndex}`} key={accordionIndex} >
                                                        <Accordion.Header >{topBarDataItem}</Accordion.Header>
                                                        <Accordion.Body style={{ backgroundColor: 'rgb(200,200,200)' }}>
                                                            <Col>
                                                                {Object.keys(TBD[topBarDataItem]).map((topBarDataInnerItem, accordionInnerIndex) => (
                                                                    <Row key={accordionInnerIndex}>
                                                                        <Image style={{ cursor: 'pointer', marginBottom: '2.5cqw' }} src={TBD[topBarDataItem][topBarDataInnerItem].image}
                                                                            onClick={() => navigate(`/${topBarDataItem}/${topBarDataInnerItem}`)} />
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

                    <Col lg={10} xs={6} >
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

                    <Col lg={1} xs={3} style={{
                        display: 'flex', justifyContent: 'end',
                    }}>
                        <Image src='/Images/MenuIcon.png' alt="MenuIconHamburger" style={{
                            maxWidth: '32px', maxHeight: '32px',
                            marginRight: '15px', filter: 'invert(1)', cursor: 'pointer',
                            zIndex: '100'
                        }} onClick={() => setShowNavMenu(showNavMenu => !showNavMenu)} />
                    </Col>

                    {more768px ? (<div style={{
                        width: '100vw', height: '7.5vh', position: 'absolute',
                        top: '0', transition: 'transform 0.5s ease', backgroundColor: 'rgb(25,25,25)',
                        transform: `translateY(${showNavMenu ? 0 : -100}%)`,
                        display: 'flex', justifyContent: 'center',
                    }}>
                        <Row className='NavMenuRowContainer'>
                            {Object.keys(navMenuData).map((anchor) => (
                                <Col key={anchor} style={{
                                    display: 'flex', alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <a onMouseEnter={() => setAnchorLinkHover(anchor)}
                                        onMouseLeave={() => setAnchorLinkHover("")}
                                        href={`#${anchor}`}
                                        style={{ textDecoration: 'none', color: 'white' }}
                                    ><span style={{
                                        color: `${anchorLinkHover === anchor ? navMenuData[anchor] : ""}`
                                    }} className='NavMenuNavText'>{anchor}</span></a>
                                </Col>
                            ))}
                        </Row>

                    </div>
                    ) : (
                        <Offcanvas show={showNavMenu} onHide={handleCloseNavOffCanvas} placement='end'
                            scroll={true}>
                            <Offcanvas.Header closeButton>
                            </Offcanvas.Header>
                            <Offcanvas.Body style={{ display: 'flex', alignItems: 'center' }}>
                                <Col style={{
                                    height: '50%',
                                    display: 'grid', placeItems: 'center'
                                }}>
                                    {Object.keys(navMenuData).map((anchor) => (
                                        <Row key={anchor} >
                                            <a onMouseEnter={() => setAnchorLinkHover(anchor)}
                                                onMouseLeave={() => setAnchorLinkHover("")}
                                                href={`#${anchor}`}
                                                style={{
                                                    textDecoration: 'none', color: 'black',
                                                }}
                                            ><span style={{
                                                color: `${anchorLinkHover === anchor ? navMenuData[anchor] : ""}`,
                                            }} className='NavMenuNavText'>{anchor}</span></a>
                                        </Row>
                                    ))}
                                </Col>
                            </Offcanvas.Body>
                        </Offcanvas>)}
                </Row >
            </Container >
            {/*   {window.scrollY === 0 ?
                (<Button style={{ position: 'fixed', right: '5%', top: '850px', zIndex: '1000' }} href='#Hubs'>DOWN</Button>)
                : (null)}*/}

        </>
    )
}

