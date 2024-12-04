import { Col, Container, Row } from "react-bootstrap";
import EightSpotsCard from "./EightSpotsCard";
import { PlaceData } from "../Data/EightSpotData";
import '../CommonStyles/CommonStyles.css'
import CommonHeader from "../CommonStyles/CommonHeader";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ObserverIntersectionUseEffect from "../../CommonLogic(NON-UI)/ObserverUseEffect";

export default function EightSpotsSpace() {
    const PD = PlaceData;
    const [scrollPast, setScrollPast] = useState(false);

    const ComponentRef = useRef<HTMLDivElement>(null);

    const checkHasScrollPast = ObserverIntersectionUseEffect({
        scrollPast: scrollPast, setScrollPast: setScrollPast,
        compRef: ComponentRef, threshold: 0.2
    });

    const navigate = useNavigate();

    const handleClick = (path: string) => {
        navigate(`Prefecture/${path}`);
    }

    return (
        <>
            <Container className="CommonContainer" id="Hubs" ref={ComponentRef}>
                <CommonHeader header="Cultural Hubs of Japan" colour="red" scrollPast={checkHasScrollPast} />
                <Container >
                    <Row >
                        <Col md={6}>
                            {Object.keys(PD).slice(0, 4).map((element, index) => (
                                <EightSpotsCard key={index} title={PD[element].title}
                                    desc={PD[element].description}
                                    img={PD[element].img}
                                    colour={PD[element].color}
                                    scrollPast={checkHasScrollPast}
                                    onclick={() => handleClick(element)} />
                            ))}
                        </Col>

                        <Col md={6}>
                            {Object.keys(PD).slice(4, 8).map((element, index) => (
                                <EightSpotsCard key={index} title={PD[element].title}
                                    desc={PD[element].description}
                                    img={PD[element].img}
                                    colour={PD[element].color}
                                    scrollPast={checkHasScrollPast}
                                    onclick={() => handleClick(element)} />
                            ))}
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}