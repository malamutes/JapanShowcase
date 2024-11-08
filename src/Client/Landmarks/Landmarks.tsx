import React, { useEffect, useState } from "react"
import { Col, Container, Row, Card, ProgressBar } from "react-bootstrap";
import { Image } from "react-bootstrap";
import './Landmarks.css'
import { LandMarksData } from "../Data/LandmarksData";
import '../CommonStyles/CommonStyles.css'


export default function Landmarks() {
    const [distance, setDistance] = useState(0);
    const [scroll, canScroll] = useState(true);

    const LD = LandMarksData;

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


    //need to set height of my elements so its more dyanmic

    return (
        <>
            <Container className="CommonContainer" style={{ background: 'rgba(255, 255, 255, 0.75)' }}>
                <h1 className="CommonHeader">Treasured Sites of Japan</h1>
                <Row >
                    <Col xs={4} style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)', height: '800px', padding: '0' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', overflow: 'hidden' }}>
                            {Object.keys(LD).map((landmark, index) => (
                                <div key={index} style={{
                                    minWidth: '100%', minHeight: '800px', transition: 'transform 1s ease',
                                    transform: `translateY(${-(Math.floor((distance + 50) / 100) * 100)}%)`,
                                    display: 'grid', placeItems: 'center'
                                }}>
                                    <Card style={{ backgroundColor: 'transparent', maxWidth: '75%' }} >
                                        <Card.Body style={{ textAlign: 'center' }}>
                                            <Card.Title as={"h1"}>{LD[landmark].titleEnglish}</Card.Title>
                                            <Card.Subtitle style={{ lineHeight: '2' }} as={"h3"} className="mb-2 text-muted">{LD[landmark].titleJapanese}</Card.Subtitle>
                                            <Card.Text as={"h6"} style={{ lineHeight: '2.5' }}>
                                                {LD[landmark].description}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))}
                        </div >
                    </Col>

                    <Col xs={8} style={{ padding: '0', height: '800px', overflow: 'hidden' }}>
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

                    <ProgressBar variant="secondary" now={distance} min={0} max={100 * (Object.keys(LD).length - 1)} style={{ maxHeight: '2.5px', padding: '0' }} />
                </Row>

            </Container >

        </>

    )
}