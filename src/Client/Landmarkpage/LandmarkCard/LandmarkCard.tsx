import CommonDividersV3 from "../../CommonNavigationComponents/CommonDividersV3"
import { Container, Row, Col, Card } from "react-bootstrap"
import ObserverIntersectionUseEffect from "../../CommonLogic(NON-UI)/ObserverUseEffect";
import { useRef, useState, useContext, useEffect } from "react";
import { LandmarkContext } from "../LandmarkAppContext";
import { LightThemeContext } from "../../../ThemeContext";

export default function LandmarkCard() {

    const { light } = useContext(LightThemeContext);

    const ComponentRef = useRef<HTMLDivElement>(null);

    const [scrollPast, setScrollPast] = useState(false);
    const LC = useContext(LandmarkContext);
    useEffect(() => {
        setScrollPast(false);
    }, [LC]);


    const checkScrollPast = ObserverIntersectionUseEffect({
        scrollPast: scrollPast, setScrollPast: setScrollPast,
        compRef: ComponentRef, threshold: 0.25
    })

    return (
        <>
            <Container style={{ marginTop: '100px' }} ref={ComponentRef}>
                <CommonDividersV3 onScroll={checkScrollPast} />
                <Row>
                    {['red', 'orange', 'blue'].map((item) => (
                        <Col lg={4} key={item} >
                            <Card style={{
                                border: 'none', margin: 'auto', textAlign: 'center',
                                backgroundColor: "transparent", color: `${light ? "black" : "whitesmoke"}`
                            }}>
                                <Card.Body style={{
                                    transition: 'box-shadow 1s ease, transform 1s ease',
                                    boxShadow: `${checkScrollPast
                                        ? `5px 5px 10px rgba(${light ? "0, 0, 0" : "200,200,200"}, 0.5)`
                                        : "0px 0px 10px rgba(0, 0, 0, 0)"}`,
                                    transform: `translateY(${checkScrollPast ? -2.5 : 0}%)`,
                                    backgroundColor: `${light ? "" : "grey"}`
                                }}>
                                    <Card.Img variant="top" src="https://placehold.co/300x300"
                                        style={{ borderRadius: '50%', maxWidth: '300px', margin: '25px 0' }} />
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Subtitle className={`mb-2 ${light ? "text-muted" : ""}`}
                                        style={{ fontStyle: 'italic' }}>Card Subtitle</Card.Subtitle>
                                    <Card.Text style={{ padding: '0 25px 0 25px' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Fusce vehicula nunc ut urna eleifend, nec laoreet neque bibendum. I
                                        nteger fringilla eros id urna pretium, non iaculis dui fermentum. Aenean ultricies,
                                        felis in hendrerit vulputate, lorem justo interdum leo, nec feugiat eros mi vitae erat.
                                        Integer ut orci et enim sollicitudin sollicitudin non in ante.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    ))}
                </Row>

            </Container >

        </>
    )
}