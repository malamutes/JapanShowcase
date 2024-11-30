import { useState, useRef } from "react";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import CommonDividersV3 from "../../CommonNavigationComponents/CommonDividersV3";
import MatchmediaQuery from "../../CommonLogic(NON-UI)/MatchmediaQuery";
import ObserverIntersectionUseEffect from "../../CommonLogic(NON-UI)/ObserverUseEffect";

interface LandmarkCircleCarouselProps {
    imageArray: string[], //need to use square images of course
    width: string,
}

function LandmarkCircleCarousel(props: LandmarkCircleCarouselProps) {
    return (
        <>
            <Carousel style={{
                maxWidth: `${props.width}px`, padding: '0', borderRadius: '50%',
                width: 'fit-content', overflow: 'hidden'
            }}>
                {props.imageArray.map((image, index) => (
                    <Carousel.Item key={index} style={{ aspectRatio: '1' }}>
                        <Image src={image} roundedCircle fluid style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        <Carousel.Caption>
                            <h3 style={{ color: 'black' }}>{index} slide label</h3>
                            <p style={{ color: 'black' }}>{image}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}

export default function LandmarkCircleCarouselSection() {
    //will need to consider container's maxwidth with respect to images width

    const [more992px, setMore992px] = useState(false);
    const checkMore992px = MatchmediaQuery({ size: 992, more: more992px, setMore: setMore992px });

    const ComponentRef = useRef<HTMLDivElement>(null);

    const [scrollPast, setScrollPast] = useState(false);

    const checkScrollPast = ObserverIntersectionUseEffect({
        scrollPast: scrollPast, setScrollPast: setScrollPast,
        compRef: ComponentRef, threshold: 0.1
    })

    return (
        <>
            <Container ref={ComponentRef}>
                <CommonDividersV3 onScroll={checkScrollPast} />
                {checkMore992px ? (
                    <Container style={{ position: 'relative', paddingBottom: '100px', marginTop: '100px', }}>
                        <Container style={{ maxWidth: '900px', padding: '0', }}>
                            <div style={{
                                maxWidth: '30%', position: 'absolute', zIndex: '1'
                                , marginTop: '25px',
                            }}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                                    Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                                    Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
                                    Vestibulum lacinia arcu eget.
                                </p>

                                <p style={{ maxWidth: '75%' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                                    Sed nisi.  Fusce nec tellus sed augue semper porta. Mauris massa.
                                    Vestibulum lacinia arcu eget nulla.
                                </p>


                            </div>

                            <div style={{ display: 'flex' }}>

                                <div style={{
                                    maxWidth: '300px', width: 'fit-content', display: 'flex',
                                    aspectRatio: '1', alignItems: 'end', transform: 'translateX(60%) translateY(10%)',
                                    zIndex: '1'
                                }}>
                                    <LandmarkCircleCarousel width="300"
                                        imageArray={["https://placehold.co/300x300",
                                            "https://placehold.co/300x300",
                                            "https://placehold.co/300x300"]} />

                                </div>

                                <div style={{
                                    maxWidth: '600px', width: 'fit-content',
                                    aspectRatio: '1', marginLeft: '15px'
                                }}>
                                    <LandmarkCircleCarousel width="600"
                                        imageArray={["https://placehold.co/600x600",
                                            "https://placehold.co/600x600",
                                            "https://placehold.co/600x600"]} />
                                </div>
                            </div>
                        </Container>
                    </Container>
                )
                    :
                    (
                        <Container>
                            <Col>
                                <Row >
                                    <LandmarkCircleCarousel width="600"
                                        imageArray={["https://placehold.co/600x600",
                                            "https://placehold.co/600x600",
                                            "https://placehold.co/600x600"]} />

                                </Row>

                                <Row style={{ marginTop: '25px' }}>
                                    <Col sm={5} style={{
                                        padding: '0', display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <LandmarkCircleCarousel width="300"
                                            imageArray={["https://placehold.co/300x300",
                                                "https://placehold.co/300x300",
                                                "https://placehold.co/300x300"]} />
                                    </Col>

                                    <Col sm={7} style={{
                                        display: 'flex', alignItems: 'center',
                                    }} >
                                        <span style={{ margin: 'auto', maxWidth: '90%' }}>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                                                Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                                                Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
                                                Vestibulum lacinia arcu eget nulla.

                                            </p>

                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                                                Sed nisi.  Fusce nec tellus sed augue semper porta. Mauris massa.
                                                Vestibulum lacinia arcu eget nulla.
                                            </p>
                                        </span>
                                    </Col>

                                </Row>
                            </Col>
                        </Container>

                    )}


            </Container>

        </>
    )
}
