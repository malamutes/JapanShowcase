import { Col, Container, Row } from "react-bootstrap";
import EightSpotsCard from "./EightSpotsCard";

export default function EightSpotsSpace() {

    return (
        <>
            <Container style={{ maxWidth: '1350px', aspectRatio: '1.5', backgroundColor: 'orange' }}>
                <Row >
                    <Col >
                        {['red', 'blue', 'green', 'yellow',].map((element, index) => (
                            <Row key={index} style={{ margin: '50px 15px' }}>
                                <EightSpotsCard />
                            </Row>
                        ))}
                    </Col>

                    <Col>
                        {['orange', 'purple', 'pink', 'cyan'].map((element, index) => (
                            <Row key={index} style={{ margin: '50px 15px' }}>
                                <EightSpotsCard />
                            </Row>
                        ))}

                    </Col>
                </Row>

            </Container>
        </>
    )
}