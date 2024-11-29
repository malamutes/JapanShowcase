import { Container, Row, Col } from "react-bootstrap";
import InfoCard from "../InfoSection/InfoCard";
import CommonDividers from "../../CommonNavigationComponents/CommonDividers";
import ObserverIntersectionUseEffect from "../../CommonLogic(NON-UI)/ObserverUseEffect";
import { useState, useRef } from "react";

export default function NavigationPrefecture() {

    const [scrollPast, setScrollPast] = useState(false);
    const ComponentRef = useRef<HTMLDivElement>(null);

    const checkHasScrollPast = ObserverIntersectionUseEffect({
        scrollPast: scrollPast, setScrollPast: setScrollPast,
        compRef: ComponentRef, threshold: 0.2
    });

    return (
        <>
            <Container ref={ComponentRef}>
                <Col style={{ maxWidth: '1200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Row>
                        <CommonDividers onScroll={checkHasScrollPast} />
                    </Row>

                    <Row style={{ maxWidth: '90%' }}>
                        {["0.75s", "0.9s", "1.05s", "1.2s", "1.35s", "1.5s", "1.65s", "1.8s"].map((timing, index) => (
                            <Col key={timing} xs={6} sm={4} md={3}>
                                <InfoCard title={timing} subtitle="" text="" margin="25px 25px" image={`https://placehold.co/150x150`}
                                    style={{ clipPath: "circle(40%)", maxWidth: '150px' }} onScroll={checkHasScrollPast}
                                    timing={timing} transitionTimingFunc="cubic-bezier(0.25, 2, 0.5, 1)" />
                            </Col>
                        ))}
                    </Row>
                </Col>

            </Container>

        </>
    )
}
