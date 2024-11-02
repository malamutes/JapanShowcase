import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap";

import './Landmarks.css'

export default function Landmarks() {
    const [distance, setDistance] = useState(0);
    const [scroll, canScroll] = useState(true);

    function clamp(value: number, min: number, max: number) {
        return Math.max(min, Math.min(value, max));
    }


    const handleWheel = (event: React.WheelEvent) => {
        /*if (distance >= 0 && distance <= 400) {
            setDistance(distance => (distance + event.deltaY / 50));
        }
        else if (distance < 0) {
            setDistance(0);
        }
        else if (distance > 400) {
            setDistance(400);
        }*/

        setDistance(clamp(distance + event.deltaY / 20, 0, 400));

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
            <Container>
                <h1 style={{ margin: '50px', textAlign: 'center' }}>LANDMARKS</h1>
                <Row >
                    <Col xs={4} style={{ backgroundColor: 'orange', height: '703.5px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', overflow: 'hidden' }}>
                            {['red', 'blue', 'green', 'yellow', 'purple'].map((element, index) => (
                                <div key={index} style={{
                                    minWidth: '100%', aspectRatio: '0.59', backgroundColor: element,
                                    transition: 'transform 1s ease',
                                    transform: `translateY(${-(Math.floor((distance + 50) / 100) * 100)}%)`
                                }}></div>
                            ))}
                        </div >
                    </Col>

                    <Col xs={8} style={{ backgroundColor: 'grey', padding: '0', height: '703.5px', overflow: 'hidden' }}>
                        <div style={{ display: 'flex', width: '100%' }}
                            onMouseEnter={() => canScroll(false)} onMouseLeave={() => canScroll(true)} onWheel={(event) => handleWheel(event)}>
                            {['red', 'blue', 'green', 'yellow', 'purple'].map((element, index) => (
                                <div key={index} style={{
                                    minWidth: '100%', aspectRatio: '1.25', backgroundColor: element,
                                    transition: 'transform 0.3 ease',
                                    transform: `translateX(${-distance}%)`
                                }}></div>
                            ))}
                        </div >
                    </Col>
                </Row>
            </Container >

        </>

    )
}