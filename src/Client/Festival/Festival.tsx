import { Container, Row, Carousel, Image, Card, Col, CarouselItem } from "react-bootstrap";
import './Festival.css'
import { FestivalData } from "../Data/Festival";
import { useState, useRef } from "react";
import CommonHeader from "../CommonStyles/CommonHeader";
import checkScrollPosition from "../CommonStyles/ScrollPast";
import CommonNavButton from "../CommonStyles/CommonNavButton";

export default function Festival() {
    const FD = FestivalData;
    const [currFestival, setCurrFestival] = useState("SapporoSnowFestival");

    const FestivalRef = useRef<HTMLDivElement>(null);
    const scrollPast = checkScrollPosition((8.5 / 10), FestivalRef)


    //ive just abused !important for commonnavbutton for now
    //will come back to fix it later but not a priority atm
    return (
        <>
            <Container className="CommonContainer" id="Festival" ref={FestivalRef}>
                <CommonHeader header="Festivals & Traditions" colour=" #1E90FF" scrollPast={scrollPast} />
                <Container >
                    <Row >
                        <Col md={6}>
                            <hr style={{
                                border: `1px solid ${FD[currFestival].color}`
                            }} className={`HRLine ${scrollPast ? "HRLineShow" : ""}`} />
                            <Row>
                                <Carousel controls={false} className="custom-carousel" interval={3000}>
                                    {FD[currFestival].images.map((image, index) => (
                                        <CarouselItem key={index}>
                                            <Image src={image} alt={image}
                                                className={`ImageCarousel ImageCarouselHide 
                                                ${scrollPast ? "ImageCarouselShow" : "ImageCarouselHide"}`} />
                                        </CarouselItem>
                                    ))}
                                </Carousel>
                            </Row>

                            <hr style={{
                                height: '0.1cqw', border: `1px solid ${FD[currFestival].color}`,
                            }} className={`HRLine ${scrollPast ? "HRLineShow" : ""}`} />
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
                                    <Card.Body style={{
                                        textAlign: 'center',
                                    }}>
                                        <Card.Title as={"h1"} className="TitleStyle" >{FD[currFestival].titleEng}</Card.Title>
                                        <hr style={{ border: `1px solid ${FD[currFestival].color}` }} className={`HRLine ${scrollPast ? "HRLineShow" : ""}`} />
                                        <Card.Subtitle as={"h4"} className="mb-2 SubTitleStyle">{FD[currFestival].titleJap}</Card.Subtitle>
                                        <Card.Text className="DescStyle" >
                                            {`${FD[currFestival].date}, ${FD[currFestival].location}`} <br />
                                            {FD[currFestival].description}
                                        </Card.Text>
                                        <CommonNavButton customClassButton="FestivalNavButton"
                                            customClassText="FestivalNavButtonText"
                                            text="SOUNDS FESTIVE!" color={FD[currFestival].color}
                                            styleText={{ fontSize: '2cqw' }} />
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