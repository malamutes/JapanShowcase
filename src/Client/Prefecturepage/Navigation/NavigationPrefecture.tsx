import { Container, Row, Col } from "react-bootstrap";
import InfoCard from "../InfoSection/InfoCard";
import CommonDividers from "../../CommonNavigationComponents/CommonDividers";
import ObserverIntersectionUseEffect from "../../CommonLogic(NON-UI)/ObserverUseEffect";
import { useState, useRef } from "react";

export default function NavigationPrefecture() {

    const [scrollPast, setScrollPast] = useState(false);
    const ComponentRef = useRef<HTMLDivElement>(null);

    const checkHasScrollPast = ObserverIntersectionUseEffect({ scrollPast: scrollPast, setScrollPast: setScrollPast, compRef: ComponentRef });

    return (
        <>
            <Container ref={ComponentRef}>
                <Col style={{ maxWidth: '1200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Row>
                        <CommonDividers onScroll={checkHasScrollPast} />
                    </Row>

                    <Row style={{ maxWidth: '90%' }}>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((element, index) => (
                            <Col key={index} xs={6} sm={4} md={3}>
                                <InfoCard title={element.toString()} subtitle="" text="" margin="25px 25px" image={`https://placehold.co/150x150`}
                                    style={{ clipPath: "circle(40%)", maxWidth: '150px' }} />
                            </Col>
                        ))}
                    </Row>
                </Col>

            </Container>

        </>
    )
}
