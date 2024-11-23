import CommonDividers from "../../CommonNavigationComponents/CommonDividers";
import HorizontalCard from "./HorizontalCard";
import { Container, Col, Row, Card, Image } from "react-bootstrap";

export default function HorizontalCardSection() {
    return (
        <>
            <Container >
                <CommonDividers />
                <Col>
                    {[true, false].map(() => (
                        <Row style={{ margin: '50px 0' }}>
                            <HorizontalCard />
                        </Row>
                    ))}
                </Col>
            </Container>
        </>
    )
}