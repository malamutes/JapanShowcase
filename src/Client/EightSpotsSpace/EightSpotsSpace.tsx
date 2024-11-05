import { Col, Container, Row } from "react-bootstrap";
import EightSpotsCard from "./EightSpotsCard";
import { PlaceData } from "../Data/EightSpotData";

export default function EightSpotsSpace() {
    const PD = PlaceData;
    const cardStyle: React.CSSProperties = {

    }

    return (
        <>
            <h1 style={{
                textAlign: 'center', marginTop: '100px',
                marginBottom: '50px', fontWeight: '700',
            }}>SPECIAL PLACES</h1>
            <Container style={{
                maxWidth: '1600px', width: '100%',
            }}>
                <Row >
                    <Col>
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