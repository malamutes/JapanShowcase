import { Col, Container, Row } from "react-bootstrap";
import EightSpotsCard from "./EightSpotsCard";
import { PlaceData } from "../Data/EightSpotData";
import '../CommonStyles/CommonStyles.css'
import CommonHeader from "../CommonStyles/CommonHeader";

export default function EightSpotsSpace() {
    const PD = PlaceData;

    return (
        <>
            <Container className="CommonContainer" id="Hubs">
                <CommonHeader header="Cultural Hubs of Japan" colour="red" />
                <Container >
                    <Row >
                        <Col md={6}>
                            {Object.keys(PD).slice(0, 4).map((element, index) => (
                                <EightSpotsCard key={index} title={PD[element].title}
                                    desc={PD[element].description}
                                    img={PD[element].img}
                                    colour={PD[element].color} />
                            ))}
                        </Col>

                        <Col md={6}>
                            {Object.keys(PD).slice(4, 8).map((element, index) => (
                                <EightSpotsCard key={index} title={PD[element].title}
                                    desc={PD[element].description}
                                    img={PD[element].img}
                                    colour={PD[element].color}
                                />
                            ))}
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}