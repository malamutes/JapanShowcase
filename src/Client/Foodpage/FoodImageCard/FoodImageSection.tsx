import FoodImageCard from "./FoodImageCard"
import { Container, Col, Row } from "react-bootstrap"
import CommonDividersV2 from "../../CommonNavigationComponents/CommonNavDividersV2"
import { useEffect, useRef, useState } from "react";
import ObserverIntersectionUseEffect from "../../CommonLogic(NON-UI)/ObserverUseEffect";

export default function FoodImageSection() {
    const ComponentRef = useRef<HTMLDivElement>(null);

    const [scrollPast, setScrollPast] = useState(false);

    const checkScrollPast = ObserverIntersectionUseEffect({
        scrollPast: scrollPast, setScrollPast: setScrollPast,
        compRef: ComponentRef, threshold: 0.1
    })

    return (
        <>
            <Container style={{ padding: '0', overflow: 'hidden' }} ref={ComponentRef}>
                <CommonDividersV2 onScroll={checkScrollPast} />
                <Row style={{ margin: '0' }} >
                    {[1, 2, 3, 4, 5, 6].map((element, index) => (
                        <Col key={index} style={{ margin: '25px 0px', }} md={6} lg={12}>
                            <FoodImageCard />
                        </Col>
                    ))}
                </Row>
            </Container>

        </>
    )
}