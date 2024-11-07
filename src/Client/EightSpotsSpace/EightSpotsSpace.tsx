import { Col, Container, Row } from "react-bootstrap";
import EightSpotsCard from "./EightSpotsCard";
import { PlaceData } from "../Data/EightSpotData";
import '../CommonStyles/CommonStyles.css'

export default function EightSpotsSpace() {
    const PD = PlaceData;

    return (
        <>
            <Container style={{
                maxWidth: '100vw', backgroundColor: "rgba(50, 50, 50, 0.25)"
            }}>
                <h1 className="CommonHeader" >Cultural Hubs of Japan</h1>
                <Row style={{ marginTop: '-2.5cqw' }}>
                    <Col style={{ marginRight: '-20cqw' }}>
                        {Object.keys(PD).slice(0, 4).map((element, index) => (
                            <EightSpotsCard key={index} title={PD[element].title}
                                desc={PD[element].description}
                                img={PD[element].img}
                                colour={PD[element].color} />
                        ))}
                    </Col>

                    <Col>
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
        </>
    )
}