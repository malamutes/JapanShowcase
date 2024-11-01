import { Container, Row, Col } from "react-bootstrap";

export default function EightSpotsCard() {
    return (
        <>
            <Container >
                <Row style={{ aspectRatio: '4', borderRadius: '15px', overflow: 'hidden' }}>
                    <Col xs={8} style={{ backgroundColor: 'red', }}>
                        <Row style={{ marginLeft: '15%', marginTop: '5%' }}>
                            <div style={{
                                backgroundColor: 'yellow', aspectRatio: 1,
                                width: '1.75%', borderRadius: '50%',
                                position: 'absolute'
                            }}>
                            </div>
                            <span style={{ marginLeft: '75px' }}>asdsa</span>
                        </Row>

                        <Row style={{ marginLeft: '7.5%', marginTop: '5%' }}>
                            <span>HELLO</span>
                        </Row>

                    </Col>

                    <Col xs={4} style={{ backgroundColor: 'green' }}>

                    </Col>

                </Row>
            </Container>
        </>
    )
}