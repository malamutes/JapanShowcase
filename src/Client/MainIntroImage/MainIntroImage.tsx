import { Container, Row, Col } from "react-bootstrap";

export default function MainIntroImage() {
    const backgroundColor = `rgb(24, 24, 24),`;
    const transparencyOverlay = `linear-gradient(to right,
                                rgba(24, 24, 24, 0) 0%,    
                                rgba(24, 24, 24, 1) 90%,  
                                rgba(24, 24, 24, 1) 100%)`;
    return (
        <>
            <Container style={{ overflow: 'hidden', maxWidth: '1920px', width: '100%' }} className="MainImgCon">
                <Row>
                    <Col xs={10} >
                        <img alt="Japan-Night-Image" src="/Images/CanvaJapanNight.webp"
                            style={{ transform: 'scale(1.2)' }} />
                    </Col>

                    <Col xs={2} style={{
                        display: 'grid',
                        alignContent: 'center',

                    }}>
                        <span> JAPAN IS SO COOL WTF</span>
                    </Col>

                </Row>
            </Container >
        </>
    )
}

