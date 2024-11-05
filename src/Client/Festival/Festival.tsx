import { Container, Row, Carousel, Image, Card, Col, CarouselItem } from "react-bootstrap";
import './Festival.css'
import { FestivalData } from "../Data/Festival";
import { useState } from "react";

export default function Festival() {
    const FD = FestivalData;
    const [currFestival, setCurrFestival] = useState("GionMatsuri");

    return (
        <>
            <Container>

                <h1 style={{ marginTop: '50px', textAlign: 'center' }}>FESTIVAL</h1>

                <Row style={{ width: '1500px', height: '750px', position: 'absolute' }}>

                    <Row style={{
                        backgroundColor: 'rgb(25, 25, 25)', width: '50%', height: '15%',
                        top: '10%', left: '40%', position: 'absolute', margin: '0', alignItems: 'start', borderRadius: '15px 15px 0% 0%',
                        border: '2.5px solid grey'
                    }}>
                        {Object.keys(FD).map((festival) => (
                            <Col key={festival}>
                                <Image fluid src={FD[festival].icons} alt={`${festival} Icon`}
                                    style={{ cursor: 'pointer' }} className={`FestivalIcon ${currFestival === festival ? "FestivalIconClicked" : ""}`}
                                    onClick={() => { setCurrFestival(festival) }}
                                />

                            </Col>
                        ))}
                    </Row>

                    <div style={{
                        width: '43.75%', height: '55%',
                        position: 'absolute', zIndex: '10', top: '55%',
                        transform: 'translateY(-50%)', left: '2.5%'
                    }}>

                        <hr style={{
                            height: '0.1cqw', border: `1px solid ${FD[currFestival].color}`,
                            marginTop: '1.25cqw', width: '80%', backgroundColor: 'red', opacity: '1'
                        }} />
                        <Carousel controls={false} className="custom-carousel" interval={3000}>
                            {FD[currFestival].images.map((image, index) => (
                                <CarouselItem key={index}>
                                    <Image src={image} alt={image} fluid />
                                </CarouselItem>
                            ))}
                        </Carousel>
                        <hr style={{
                            height: '0.1cqw', border: `1px solid ${FD[currFestival].color}`,
                            marginTop: '1.25cqw', width: '80%', backgroundColor: 'red', opacity: '1'
                        }} />
                    </div>

                    <div style={{
                        backgroundColor: 'rgb(25, 25, 25)', width: '50%', height: '70%',
                        position: 'absolute', left: '40%', top: '60%', transform: 'translateY(-50%)',
                        border: '2.5px solid white', display: 'grid', placeItems: 'center'
                    }}>
                        <Card style={{ width: '75%', backgroundColor: 'transparent', color: `${FD[currFestival].textColor}`, lineHeight: '2' }}>
                            <Card.Body style={{ textAlign: 'center' }}>
                                <Card.Title as={"h1"} style={{ marginBottom: '1.5cqw' }} >{FD[currFestival].titleEng}</Card.Title>
                                <hr style={{ height: '0.1cqw', border: `1px solid ${FD[currFestival].color}`, marginBottom: '1.25cqw', opacity: '1' }} />
                                <Card.Subtitle as={"h4"} className="mb-2" >{FD[currFestival].titleJap}</Card.Subtitle>
                                <Card.Text style={{ marginTop: '1cqw' }}>
                                    {`${FD[currFestival].date}, ${FD[currFestival].location}`} <br />
                                    {FD[currFestival].description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>

            </Container >
        </>
    )
};