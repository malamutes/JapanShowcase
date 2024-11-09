import { Col, Container, Row } from "react-bootstrap";
import EightSpotsCard from "./EightSpotsCard";
import { PlaceData } from "../Data/EightSpotData";
import '../CommonStyles/CommonStyles.css'

export default function EightSpotsSpace() {
    const PD = PlaceData;

    return (
        <>
            <Container className="CommonContainer">
                <h1 className="CommonHeader" >Cultural Hubs of Japan</h1>
                <Container>

                    <Row>
                        <Col >
                            {Object.keys(PD).slice(0, 4).map((element, index) => (
                                <EightSpotsCard key={index} title={PD[element].title}
                                    desc={PD[element].description}
                                    img={PD[element].img}
                                    colour={PD[element].color} />
                            ))}
                        </Col>

                        <Col >
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