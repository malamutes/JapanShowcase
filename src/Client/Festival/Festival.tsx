import { Container, Row, Carousel, Image, Card, Col, CarouselItem } from "react-bootstrap";
import './Festival.css'
import { FestivalData } from "../Data/Festival";
import { useState } from "react";

export default function Festival() {
    const FD = FestivalData;
    const [currFestival, setCurrFestival] = useState("GionMatsuri");

    return (
        <>
            <Container className="CommonContainer">
                <h1 className="CommonHeader">Festivals & Traditions</h1>
                <Container >
                    <Row >
                        <Col >
                            <hr style={{
                                opacity: '1',
                                border: `1px solid ${FD[currFestival].color}`
                            }} />
                            <Row>
                                <Carousel controls={false} className="custom-carousel" interval={3000}>
                                    {FD[currFestival].images.map((image, index) => (
                                        <CarouselItem key={index}>
                                            <Image src={image} alt={image} style={{ minWidth: '100%' }} />
                                        </CarouselItem>
                                    ))}
                                </Carousel>
                            </Row>

                            <hr style={{
                                opacity: '1',
                                height: '0.1cqw', border: `1px solid ${FD[currFestival].color}`,
                            }} />
                        </Col>

                        <Col style={{ border: `5px double ${FD[currFestival].color}`, backgroundColor: 'rgb(15, 15, 15)' }}>
                            <Row style={{ backgroundColor: 'rgb(30,30,30)', border: `2.5px solid ${FD[currFestival].textColor}`, }}>
                                {Object.keys(FD).map((festival) => (
                                    <Col key={festival}>
                                        <Image fluid src={FD[festival].icons} alt={`${festival} Icon`}
                                            style={{ cursor: 'pointer', minWidth: '35px' }} className={`FestivalIcon ${currFestival === festival ? "FestivalIconClicked" : ""}`}
                                            onClick={() => { setCurrFestival(festival) }}
                                        />

                                    </Col>
                                ))}
                            </Row>

                            <Row>
                                <Card style={{ color: `${FD[currFestival].textColor}`, backgroundColor: 'transparent' }}>
                                    <Card.Body style={{ textAlign: 'center' }}>
                                        <Card.Title as={"h1"} className="TitleStyle" >{FD[currFestival].titleEng}</Card.Title>
                                        <hr style={{ border: `1px solid ${FD[currFestival].color}`, opacity: '1' }} />
                                        <Card.Subtitle as={"h4"} className="mb-2 SubTitleStyle" >{FD[currFestival].titleJap}</Card.Subtitle>
                                        <Card.Text className="DescStyle">
                                            {`${FD[currFestival].date}, ${FD[currFestival].location}`} <br />
                                            {FD[currFestival].description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Row>

                        </Col>
                    </Row>

                </Container >
            </Container >

        </>
    )
};