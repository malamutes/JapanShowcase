import { useState } from "react";
import { Image, Container, Row, Col, Card } from "react-bootstrap";

import MatchmediaQuery from "../../CommonLogic(NON-UI)/MatchmediaQuery";

export default function MainImage() {

    const [more992px, setMore992px] = useState(false);
    const checkMore992px = MatchmediaQuery({ size: 992, more: more992px, setMore: setMore992px });

    return (
        <>
            <Container style={{
                margin: '0 auto', padding: '0', maxWidth: '1500px', overflowX: 'hidden',
                height: `50vw`, minHeight: '700px', maxHeight: '950px', display: 'grid', placeItems: 'center',
                backgroundImage: `url("https://placehold.co/1500x950")`,
                backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
            }}>

                <Row>
                    <Col style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center',
                        justifyContent: 'center', height: '100%'
                    }} >
                        <Row style={{ width: '90%', }}>

                            <Col lg={5} style={{
                                display: 'flex',
                                flexDirection: 'column', justifyContent: 'center',
                                alignItems: `${checkMore992px ? "start" : "center    "}`,
                                textAlign: `${checkMore992px ? "start" : "center"}`,
                                marginBottom: `${checkMore992px ? "0px" : "25px"}`
                            }}>
                                <div style={{
                                    padding: '25px',
                                    background: 'rgba(255, 255, 255, 0.2)',
                                    borderRadius: '16px',
                                    boxShadow: '0 0px 30px rgba(0, 0, 0, 0.25)',
                                    backdropFilter: 'blur(5px)',
                                    WebkitBackdropFilter: 'blur(5px)',
                                    border: '1px solid rgba(255, 255, 255, 0.5)',
                                }}>
                                    <Card.Title style={{
                                        fontSize: `${checkMore992px ? 25 : 17.5}px`, fontWeight: '500',

                                    }}>
                                        Exploratio nova, occasio infinita</Card.Title>
                                    <Card.Text style={{ maxWidth: '70%' }}>
                                        <span style={{
                                            fontSize: `${checkMore992px ? 35 : 20}px`, fontWeight: '700',
                                        }}>
                                            Innovatio et creatio, viam ad futurum</span>
                                    </Card.Text>
                                    <Card.Text style={{
                                        maxWidth: `${checkMore992px ? 80 : 100}%`,
                                    }}>
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit.
                                        Sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua.</Card.Text>
                                </div>

                            </Col>

                            <Col lg={7} style={{
                                textAlign: 'end', display: 'flex', justifyContent: 'center',
                            }}>

                                <Image fluid src="https://placehold.co/700x700/grey/white" roundedCircle
                                    style={{
                                        maxWidth: `${checkMore992px ? 100 : 55}%`,
                                        opacity: 0.75,
                                    }}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </>
    );
}