import { useContext, useEffect } from "react";
import { FoodContext } from "../PrefectureAppContext";
import { Image, Container, Row, Col, Card } from "react-bootstrap";



export default function MainImage() {
    const CP = useContext(FoodContext)

    useEffect(() => {
        // Trigger holder.js after component mount
        if (window.Holder) {
            window.Holder.run(); // Apply the placeholder transformation
        }
    }, []); // Empty dependency ensures it runs once after mount

    return (
        <>
            <Container style={{
                margin: '0 auto', padding: '0', maxWidth: '1500px', overflowX: 'hidden'
            }}>
                <Card >
                    <Card.Img src="holder.js/1500x950" alt="Card image" />

                    <Card.ImgOverlay>
                        <Col style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center',
                            justifyContent: 'center', height: '100%'
                        }}>
                            <Row style={{ width: '90%' }}>
                                <Col xs={1}>
                                </Col>
                                <Col xs={5} style={{
                                    display: 'flex',
                                    flexDirection: 'column', justifyContent: 'center'
                                }}>
                                    <Card.Title>Exploratio nova, occasio infinita</Card.Title>
                                    <Card.Text style={{ maxWidth: '70%' }}>
                                        <h1>  Innovatio et creatio, viam ad futurum</h1>
                                    </Card.Text>
                                    <Card.Text style={{ maxWidth: '80%' }}>Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit.
                                        Sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua.</Card.Text>
                                </Col>

                                <Col xs={5} style={{ textAlign: 'end' }}>
                                    <Image src="holder.js/700x700?bg=2a2025" roundedCircle />
                                </Col>
                                <Col xs={1}>
                                </Col>
                            </Row>
                        </Col>
                    </Card.ImgOverlay>
                </Card>
            </Container>

        </>
    );
}