import { useContext } from "react";
import { Image, Container, Row, Col, Card } from "react-bootstrap";
import { FoodContext } from "../FoodAppContext";
import './MainImageFood.css'

export default function MainImage() {
    const CF = useContext(FoodContext);

    return (
        <>
            <Container style={{
                margin: '0 auto', padding: '0', maxWidth: '1500px', overflowX: 'hidden',
                height: `50vw`, minHeight: '700px', maxHeight: '950px', display: 'grid', placeItems: 'center',
                backgroundImage: `url("https://placehold.co/1500x950")`,
                backgroundPosition: 'center', backgroundRepeat: 'no-repeat', color: 'black'
            }} id="Home">

                <Row>
                    <Col style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center',
                        justifyContent: 'center', height: '100%'
                    }} >
                        <Row style={{ width: '90%', }}>

                            <Col lg={5} className="TextCol">
                                <div style={{
                                    padding: '25px',
                                    background: 'rgba(255, 255, 255, 0.2)',
                                    borderRadius: '16px',
                                    boxShadow: '0 0px 30px rgba(0, 0, 0, 0.25)',
                                    backdropFilter: 'blur(5px)',
                                    WebkitBackdropFilter: 'blur(5px)',
                                    border: '1px solid rgba(255, 255, 255, 0.5)',
                                }}>
                                    <Card.Title className="card-title">
                                        Exploratio nova, occasio infinita
                                    </Card.Title>

                                    <Card.Text className="card-text">
                                        <span className="card-text-strong">
                                            Innovatio et creatio, viam ad futurum, {CF}
                                        </span>
                                    </Card.Text>

                                    <Card.Text className="card-description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Card.Text>
                                </div>

                            </Col>

                            <Col lg={7} style={{
                                textAlign: 'end', display: 'flex', justifyContent: 'center',
                            }}>
                                <Image
                                    fluid
                                    src="https://placehold.co/700x700/grey/white"
                                    className="image-rounded-circle"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </>
    );
}