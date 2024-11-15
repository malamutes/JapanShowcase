import React, { useEffect, useState, useRef } from "react"
import { Col, Container, Row, Card, ProgressBar } from "react-bootstrap";
import { Image } from "react-bootstrap";
import './Landmarks.css'
import { LandMarksData } from "../Data/LandmarksData";
import '../CommonStyles/CommonStyles.css'
import CommonHeader from "../CommonStyles/CommonHeader";
import checkScrollPosition from "../CommonStyles/ScrollPast";
import CommonNavButton from "../CommonStyles/CommonNavButton";


export default function Landmarks() {
    const [distance, setDistance] = useState(0);
    const [scroll, canScroll] = useState(true);
    const [currentScreenWidth, setCurrentScreenWidth] = useState(true);

    const LD = LandMarksData;

    const LandmarkRef = useRef<HTMLDivElement>(null);
    const scrollPast = checkScrollPosition((8.5 / 10), LandmarkRef)

    function clamp(value: number, min: number, max: number) {
        return Math.max(min, Math.min(value, max));
    }


    const handleWheel = (event: React.WheelEvent) => {
        //20 determines rate of scroll, higher number is slower scroll, small is faster
        setDistance(clamp(distance + event.deltaY / 20, 0, 100 * (Object.keys(LD).length - 1)));

        console.log(distance);

    };

    useEffect(() => {
        function stopScroll(event: WheelEvent) {
            if (scroll === false) {
                event.preventDefault()
            }
        };

        window.addEventListener("wheel", stopScroll, { passive: false });

        return () => {
            window.removeEventListener("wheel", stopScroll);
        };


    }, [scroll])

    useEffect(() => {
        function widthLess992() {
            if (window.innerWidth <= 992) {
                setCurrentScreenWidth(false);
            }
            else if (window.innerWidth > 992) {
                setCurrentScreenWidth(true);
            }
        };

        widthLess992();

        window.addEventListener('resize', widthLess992);

        return () => {
            window.removeEventListener('resize', widthLess992);
        };

    }, []);


    //need to set height of my elements so its more dyanmic

    return (
        <>
            <Container className="CommonContainer" id="Landmarks" ref={LandmarkRef}>
                <CommonHeader header="Treasured Sites of Japan" colour=" #FFD700" scrollPast={scrollPast} />
                {currentScreenWidth ? (<Row className="LandmarkRowContainer">
                    <Col lg={4} className="TextContainer">
                        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', overflow: 'hidden' }}>
                            {Object.keys(LD).map((landmark, index) => (
                                <div key={index} style={{
                                    transform: `translateY(${-(Math.floor((distance + 50) / 100) * 100)}%)`,
                                }} className="TextCardContainer">
                                    <Card className="CardContainer" >
                                        <Card.Body style={{ textAlign: 'center' }}>
                                            <Card.Title className="TitleText">{LD[landmark].titleEnglish}</Card.Title>
                                            <Card.Subtitle style={{ lineHeight: '2' }} className="mb-2 text-muted SubTitleText">
                                                {LD[landmark].titleJapanese}</Card.Subtitle>
                                            <Card.Text className="DescText" style={{ lineHeight: '2.5' }}>
                                                {LD[landmark].description}
                                            </Card.Text>
                                            <CommonNavButton text="TAKE ME THERE!" color='gray' styleButton={{ margin: 'auto' }} />
                                        </Card.Body>

                                    </Card>

                                </div>
                            ))}
                        </div >
                    </Col>

                    <Col lg={8} className="ImageContainer">
                        <div style={{ display: 'flex', width: '100%' }}
                            onMouseEnter={() => canScroll(false)} onMouseLeave={() => canScroll(true)} onWheel={(event) => handleWheel(event)}>
                            {Object.keys(LD).map((landmark, index) => (
                                <div key={index} style={{
                                    minWidth: '100%', height: '800px',
                                    transition: 'transform 0.3 ease',
                                    transform: `translateX(${-distance}%)`
                                }}>
                                    <Image fluid src={LD[landmark].img} style={{ minHeight: '100%', width: '100%' }} alt={`${LD[landmark].titleEnglish}`} />
                                </div>
                            ))}
                        </div >
                    </Col>

                    <ProgressBar variant="secondary" now={distance} min={0} max={100 * (Object.keys(LD).length - 1)} style={{ maxHeight: '4px', padding: '0' }} />
                </Row >) : (
                    <Col className="LandmarkColContainer">
                        {Object.keys(LD).map((landmark, index) => (
                            <Row key={index} style={{ justifyContent: 'center', marginBottom: '5cqw' }}>
                                <Image fluid src={LD[landmark].img} alt={`${LD[landmark].titleEnglish}`} />
                                <Card className="CardContainer ">
                                    <Card.Body style={{ textAlign: 'center' }}>
                                        <Card.Title className="TitleText">{LD[landmark].titleEnglish}</Card.Title>
                                        <Card.Subtitle style={{ lineHeight: '2' }} className="mb-2 SubTitleText">
                                            {LD[landmark].titleJapanese}</Card.Subtitle>
                                        <Card.Text className="DescTextSmall" style={{ lineHeight: '2' }}>
                                            {LD[landmark].description}
                                        </Card.Text>
                                        <CommonNavButton text="TAKE ME THERE!" color='gray'
                                            styleButton={{ minWidth: '25cqw', margin: 'auto' }}
                                            styleText={{ fontSize: '10px' }} />
                                    </Card.Body>
                                </Card>
                            </Row>
                        ))}
                    </Col>
                )}


            </Container >

        </>

    )
}