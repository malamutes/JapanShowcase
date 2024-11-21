import { Container, Row, Col } from "react-bootstrap";
import TripleImageCard from "./ImageCard";

export default function TripleImageSection() {
    return (
        <>
            <Container style={{ maxWidth: '1600px', marginTop: '100px', display: 'flex', justifyContent: 'center' }}>
                <Row style={{ width: '100%' }}>
                    {[1, 2, 3].map((element, index) => (
                        <Col key={index} xl={4} style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
                            <TripleImageCard />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}