import { Container, Row, Col } from "react-bootstrap";
import TripleImageCard from "./ImageCard";

export default function TripleImageSection() {
    return (
        <>
            <Container style={{ maxWidth: '1500px', marginTop: '100px' }}>
                <Row>
                    {[1, 2, 3].map((element, index) => (
                        <Col key={index}>
                            <TripleImageCard />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}