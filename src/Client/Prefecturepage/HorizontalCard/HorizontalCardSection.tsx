import HorizontalCard from "./HorizontalCard";
import { Container, Col, Row, Card, Image } from "react-bootstrap";

export default function HorizontalCardSection() {
    return (
        <>
            <Container style={{ marginTop: '100px' }}>
                <Col>
                    {[true, false].map((element, index) => (
                        <Row style={{ margin: '50px 0' }}>
                            <HorizontalCard switch={element} />
                        </Row>
                    ))}
                </Col>
            </Container>
        </>
    )
}