import { Container, Row, Col } from "react-bootstrap";
import InfoCard from "../InfoSection/InfoCard";
import { InfoCardProps } from "../InfoSection/InfoCard";

export default function NavigationPrefecture() {
    return (
        <>
            <Container style={{ marginTop: '100px', maxWidth: '1200px', display: 'flex', justifyContent: 'center' }}>
                <Row style={{ maxWidth: '90%' }}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((element, index) => (
                        <Col key={index} xs={6} sm={4} md={3}>
                            <InfoCard title={element.toString()} subtitle="" text="" margin="25px 25px" image={`https://placehold.co/150x150`}
                                style={{ clipPath: "circle(40%)", maxWidth: '150px' }} />
                        </Col>
                    ))}
                </Row>
            </Container>

        </>
    )
}
