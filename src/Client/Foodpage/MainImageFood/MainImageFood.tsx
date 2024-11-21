import { useContext, useEffect, useState } from "react";
import { FoodContext } from "../PrefectureAppContext";
import { Image, Container, Row, Col, Card } from "react-bootstrap";



export default function MainImage() {
    const CP = useContext(FoodContext)

    const [more992px, setMore992px] = useState(true);

    useEffect(() => {
        const swapScroller = () => {
            if (window.innerWidth > 992) {
                setMore992px(true);
            }
            else if (window.innerWidth <= 992) {
                setMore992px(false);
            }
        }

        swapScroller();

        window.addEventListener('resize', swapScroller);

        return () => {
            window.removeEventListener('resize', swapScroller);
        }
    }, [])

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
                    }}>
                        <Row style={{ width: '90%' }}>
                            <Col xs={0} lg={1}>
                            </Col>
                            <Col lg={5} style={{
                                display: 'flex',
                                flexDirection: 'column', justifyContent: 'center',
                                alignItems: `${more992px ? "start" : "center    "}`,
                                textAlign: `${more992px ? "start" : "center"}`
                            }}>
                                <Card.Title style={{
                                    fontSize: `${more992px ? 25 : 17.5}px`, fontWeight: '500',

                                }}>
                                    Exploratio nova, occasio infinita</Card.Title>
                                <Card.Text style={{ maxWidth: '70%' }}>
                                    <span style={{
                                        fontSize: `${more992px ? 35 : 20}px`, fontWeight: '700',
                                    }}>
                                        Innovatio et creatio, viam ad futurum</span>
                                </Card.Text>
                                <Card.Text style={{
                                    maxWidth: `${more992px ? 80 : 100}%`,
                                }}>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.</Card.Text>
                            </Col>

                            <Col lg={6} style={{
                                textAlign: 'end',
                                display: 'flex', justifyContent: 'center'
                            }}>
                                <Image fluid src="https://placehold.co/700x700/grey/white" roundedCircle
                                    style={{ maxWidth: `${more992px ? 100 : 55}%`, }}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </>
    );
}