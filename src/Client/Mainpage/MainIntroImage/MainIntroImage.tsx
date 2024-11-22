import { Container, Row, Col, Image, Button } from "react-bootstrap";
import '../CommonStyles/CommonStyles.css'
import { useState, useEffect, useContext } from "react";
import { screenWidthBreakpointsContext } from "../../../main";

export default function MainIntroImage() {
    const screenWidthBreakpoints = useContext(screenWidthBreakpointsContext);

    return (
        <>
            <Container style={{ overflow: 'hidden', maxWidth: '1920px', width: '100%' }} className="CommonContainer" id="Home">
                <Row>
                    <Col xs={10} >
                        <Image fluid alt="Japan-Night-Image" src="/Images/CanvaJapanNight.webp"
                            style={{ transform: 'scale(1.2)', minWidth: '400px' }} />
                    </Col>

                    <Col xs={2} style={{
                        display: 'grid',
                        alignContent: 'center',
                        zIndex: '2'
                    }}>
                        <span> JAPAN IS SO COOL WTF</span>
                    </Col>
                    {screenWidthBreakpoints['more1920px'] ? (<Button style={{
                        position: 'absolute', right: '100px',
                        top: '800px', width: '5cqw', maxWidth: '100px', zIndex: '2'
                    }}
                        href="#Hubs">
                        DOWN
                    </Button>) : (
                        null
                    )}

                </Row>

            </Container >
        </>
    )
}

