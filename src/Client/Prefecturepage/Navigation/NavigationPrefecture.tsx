import { Container, Row, Col } from "react-bootstrap";
import InfoCard from "../InfoSection/InfoCard";
import CommonDividers from "../../CommonNavigationComponents/CommonDividers";
import ObserverIntersectionUseEffect from "../../CommonLogic(NON-UI)/ObserverUseEffect";
import { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PrefectureContext } from "../PrefectureAppContext";
import { PlaceData } from "../../Mainpage/Data/EightSpotData";

export default function NavigationPrefecture() {
    const CP = useContext(PrefectureContext)
    const [scrollPast, setScrollPast] = useState(false);

    useEffect(() => {
        setScrollPast(false);
    }, [CP])

    const ComponentRef = useRef<HTMLDivElement>(null);

    const navigate = useNavigate();

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
                        {Object.keys(PlaceData).map((prefecture, index) => (
                            <Col key={prefecture} xs={6} sm={4} md={3}>
                                <InfoCard title={prefecture} subtitle="" text="" margin="25px 25px" image={`https://placehold.co/150x150`}
                                    style={{ clipPath: "circle(40%)", maxWidth: '150px' }} onScroll={checkHasScrollPast}
                                    timing={`${0.75 + index * 0.15}s`} transitionTimingFunc="cubic-bezier(0.25, 2, 0.5, 1)"
                                    onClick={() => { navigate(`/Prefecture/${prefecture}`) }} />
                            </Col>
                        ))}
                    </Row>
                </Col>

            </Container>

        </>
    )
}
