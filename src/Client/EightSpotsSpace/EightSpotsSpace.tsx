import { Col, Container, Row } from "react-bootstrap";
import EightSpotsCard from "./EightSpotsCard";
import { PlaceData } from "../Data/EightSpotData";
import '../CommonStyles/CommonStyles.css'
import CommonHeader from "../CommonStyles/CommonHeader";
import { useRef } from "react";
import checkScrollPosition from "../CommonStyles/ScrollPast";

export default function EightSpotsSpace() {
    const PD = PlaceData;

    const EightPlaceRef = useRef<HTMLDivElement>(null);
    const scrollPast = checkScrollPosition((8.5 / 10), EightPlaceRef)

    return (
        <>
            <Container className="CommonContainer" id="Hubs" ref={EightPlaceRef}>
                <CommonHeader header="Cultural Hubs of Japan" colour="red" scrollPast={scrollPast} />
                <Container >
                    <Row >
                        <Col md={6}>
                            {Object.keys(PD).slice(0, 4).map((element, index) => (
                                <EightSpotsCard key={index} title={PD[element].title}
                                    desc={PD[element].description}
                                    img={PD[element].img}
                                    colour={PD[element].color}
                                    scrollPast={scrollPast} />
                            ))}
                        </Col>

                        <Col md={6}>
                            {Object.keys(PD).slice(4, 8).map((element, index) => (
                                <EightSpotsCard key={index} title={PD[element].title}
                                    desc={PD[element].description}
                                    img={PD[element].img}
                                    colour={PD[element].color}
                                    scrollPast={scrollPast} />
                            ))}
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}