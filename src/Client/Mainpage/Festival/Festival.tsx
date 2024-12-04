import { Container, Row, Carousel, Image, Card, Col, CarouselItem } from "react-bootstrap";
import './Festival.css'
import { FestivalData } from "../Data/Festival";
import { useState, useRef } from "react";
import CommonHeader from "../CommonStyles/CommonHeader";
import ObserverIntersectionUseEffect from "../../CommonLogic(NON-UI)/ObserverUseEffect";
import CommonNavButton from "../CommonStyles/CommonNavButton";

export default function Festival() {
    const FD = FestivalData;
    const [currFestival, setCurrFestival] = useState("SapporoSnowFestival");

    const [scrollPast, setScrollPast] = useState(false);

    const ComponentRef = useRef<HTMLDivElement>(null);

    const checkHasScrollPast = ObserverIntersectionUseEffect({
        scrollPast: scrollPast, setScrollPast: setScrollPast,
        compRef: ComponentRef, threshold: 0.1
    });


    //ive just abused !important for commonnavbutton for now
    //will come back to fix it later but not a priority atm
    return (
        <>
            <Container className="CommonContainer" id="Festival" ref={ComponentRef}>
                <CommonHeader header="Festivals & Traditions" colour=" #1E90FF" scrollPast={checkHasScrollPast} />
                <Container >
                    <Row >
                        <Col md={6}>
                            <hr style={{
                                border: `1px solid ${FD[currFestival].color}`
                            }} className={`HRLine ${checkHasScrollPast ? "HRLineShow" : ""}`} />
                            <Row>
                                <Carousel controls={false} className="custom-carousel" interval={3000}>
                                    {FD[currFestival].images.map((image, index) => (
                                        <CarouselItem key={index}>
                                            <Image src={image} alt={image}
                                                className={`ImageCarousel ImageCarouselHide 
                                                ${checkHasScrollPast ? "ImageCarouselShow" : "ImageCarouselHide"}`} />
                                        </CarouselItem>
                                    ))}
                                </Carousel>
                            </Row>

                            <hr style={{
                                height: '0.1cqw', border: `1px solid ${FD[currFestival].color}`,
                            }} className={`HRLine ${checkHasScrollPast ? "HRLineShow" : ""}`} />
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
                                            styleText={{ fontSize: '2cqw' }} onclick={() => console.log("dummy")} />
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