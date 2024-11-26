import { Container, Row, Col } from "react-bootstrap";
import TripleImageCard from "./ImageCard";
import CommonDividers from "../../CommonNavigationComponents/CommonDividers";
import ObserverIntersectionUseEffect from "../../CommonLogic(NON-UI)/ObserverUseEffect";
import { useState, useRef } from "react";

export default function TripleImageSection() {

    const [scrollPast, setScrollPast] = useState(false);
    const ComponentRef = useRef<HTMLDivElement>(null);

    const checkHasScrollPast = ObserverIntersectionUseEffect({ scrollPast: scrollPast, setScrollPast: setScrollPast, compRef: ComponentRef, threshold: 0.1 });

    return (
        <>
            <Container style={{ maxWidth: '1600px', display: 'flex', justifyContent: 'center' }} ref={ComponentRef}>
                <Col>
                    <Row>
                        <CommonDividers onScroll={checkHasScrollPast} />
                    </Row>
                    <Row style={{ width: '100%' }}>
                        {[1, 2, 3].map((index) => (
                            <Col key={index} xl={4} style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
                                <TripleImageCard />
                            </Col>
                        ))}
                    </Row>
                </Col>


            </Container>
        </>
    )
}