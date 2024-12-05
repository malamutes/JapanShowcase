import { Container, Row, Col, Image, } from "react-bootstrap";
import '../CommonStyles/CommonStyles.css'
import './MainIntroImage.css'

//<a href="https://www.flaticon.com/free-icons/next" title="next icons">Next icons created by th studio - Flaticon</a>

export default function MainIntroImage() {
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
                    <div className="DownArrowMainImage">
                        <a href="#Prefecture">
                            <Image
                                style={{
                                    position: 'absolute',
                                    right: '100px',
                                    top: '800px',
                                    width: '50px',
                                    maxWidth: '100px',
                                    transform: 'rotate(90deg)',
                                    filter: 'invert(1)',
                                    zIndex: '2',
                                }}
                                src="/Images/right_arrow.png"
                                alt="Down Arrow"
                            />
                        </a>
                    </div>

                </Row>

            </Container >
        </>
    )
}

