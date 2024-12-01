import { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import CommonDividersV3 from "../../CommonNavigationComponents/CommonDividersV3";
import ObserverIntersectionUseEffect from "../../CommonLogic(NON-UI)/ObserverUseEffect";
import './LandmarkHorizontalCard.css'


//<a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by th studio - Flaticon</a>

function LandmarkCardComponent() {
    const [open, setOpen] = useState(false);

    const ComponentRef = useRef<HTMLDivElement>(null);

    const [scrollPast, setScrollPast] = useState(false);

    const checkScrollPast = ObserverIntersectionUseEffect({
        scrollPast: scrollPast, setScrollPast: setScrollPast,
        compRef: ComponentRef, threshold: 0.25
    })

    //this delay is just so that transition delay is only for initial load and nothing else + 
    //is cleaned up and timer is synced with css style, useful way to do 
    //initial delay on index and then no more delay on own transitions, nice setup here

    return (
        <>
            <div ref={ComponentRef}>
                <Container className={`LandmarkCardComponentFlexWrapper 
                ${open ? "LandmarkCardComponentFlexWrapperShow" : ""}
                ${checkScrollPast ? "LandmarkCardComponentOnScroll" : ""}`}
                >
                    <Col >
                        <Row className="ComponentCardContainer">
                            <Col sm={2} className="CardContainer">
                                <Image src="https://placehold.co/125x125" roundedCircle fluid
                                    style={{
                                        margin: '15px',
                                    }} />
                            </Col>

                            <Col sm={9} style={{
                                display: 'flex', flexDirection: 'column', padding: '0',
                            }}>

                                <span className="LandmarkHorizCardComponentTitle">
                                    <p style={{ fontSize: '20px', fontWeight: '600' }}>
                                        Lorem Ipsum
                                    </p>

                                    <p style={{ fontSize: '17.5px', fontWeight: '400', fontStyle: 'italic' }}>
                                        Sit Amet Consectetur
                                    </p>

                                    <p style={{ fontSize: '15px', fontWeight: '400' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </span>

                            </Col>

                            <Col sm={1} className="ArrowImageContainer">
                                <div onClick={() => setOpen(open => !open)} >
                                    <Image src="/Images/DownArrow.png" fluid
                                        className={`${open ? "LandmarkCardComponentImageUp" :
                                            "LandmarkCardComponentImageDown"}`}
                                    />
                                </div>

                            </Col>
                        </Row>
                    </Col>

                    <div className="LandmarkHorizCardComponentDescWrapper">
                        <Row className={`LandmarkHorizCardComponentDesc ${open ?
                            "LandmarkHorizCardComponentDescShow" :
                            ""}`}>
                            <span style={{
                                padding: '25px 25px 15px 25px', maxHeight: '250px', overflow: 'auto'
                            }}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a sem nec ante tincidunt
                                    sodales non at libero. Nam vulputate orci sit amet ex ullamcorper, in tincidunt felis
                                    eleifend. Donec varius auctor nisl, a efficitur libero iaculis in. Proin non nisl et odio
                                    tincidunt tristique a nec ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et
                                    ultrices posuere cubilia curae; Sed vehicula magna ac augue lobortis fermentum.
                                </p>

                                <p>
                                    Curabitur vel sapien ut lorem tincidunt cursus. Nullam vehicula, nunc eu gravida suscipit,
                                    nulla justo aliquet leo, ac ultricies urna felis non odio. Donec volutpat sapien sed lacinia
                                    venenatis. Aliquam erat volutpat. Etiam efficitur massa id neque vehicula, et laoreet nulla
                                    suscipit. Fusce vehicula nisi eget ante lacinia, sed malesuada turpis malesuada. Integer
                                    fermentum, erat eget convallis tempor, mi ante pharetra lectus, sed mollis risus tortor a purus.
                                </p>

                            </span>
                        </Row>
                    </div>
                </Container >
            </div>
        </>
    )
}

export default function LandmarkCardSection() {
    //will need to consider container's maxwidth with respect to images widt

    const ComponentRef = useRef<HTMLDivElement>(null);

    const [scrollPast, setScrollPast] = useState(false);

    const checkScrollPast = ObserverIntersectionUseEffect({
        scrollPast: scrollPast, setScrollPast: setScrollPast,
        compRef: ComponentRef, threshold: 0.1
    })

    return (
        <>
            <Container ref={ComponentRef} style={{ overflow: 'hidden' }}>
                <CommonDividersV3 onScroll={checkScrollPast} />
                <Container style={{ position: 'relative', marginTop: '100px', }}>
                    {[1, 2, 3, 4, 5,].map((item) => (
                        <LandmarkCardComponent key={item} />
                    ))}

                </Container>
            </Container>

        </>
    )
}
