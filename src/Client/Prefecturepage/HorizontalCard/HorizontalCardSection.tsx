import CommonDividers from "../../CommonNavigationComponents/CommonDividers";
import HorizontalCard from "./HorizontalCard";
import { Container, Col, Row } from "react-bootstrap";
import ObserverIntersectionUseEffect from "../../CommonLogic(NON-UI)/ObserverUseEffect";
import { useState, useRef, useEffect, useContext } from "react";
import { PrefectureContext } from "../PrefectureAppContext";


export default function HorizontalCardSection() {
    const CP = useContext(PrefectureContext)
    const [scrollPast, setScrollPast] = useState(false);

    useEffect(() => {
        setScrollPast(false);
    }, [CP])

    const ComponentRef = useRef<HTMLDivElement>(null);

    const checkHasScrollPast = ObserverIntersectionUseEffect({
        scrollPast: scrollPast, setScrollPast: setScrollPast, compRef: ComponentRef,
        threshold: 0.2
    });

    return (
        <>
            <Container ref={ComponentRef}>
                <CommonDividers onScroll={checkHasScrollPast} />
                <Col>
                    {["true", "false"].map((item) => (
                        <Row style={{ margin: '50px 0' }} key={item}>
                            <HorizontalCard />
                        </Row>
                    ))}
                </Col>
            </Container>
        </>
    )
}