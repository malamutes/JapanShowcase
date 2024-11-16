import { Container, Row, Col } from "react-bootstrap";
import InfoCard from "../InfoSection/InfoCard";
import { InfoCardProps } from "../InfoSection/InfoCard";

export default function NavigationPrefecture() {
    return (
        <>
            <Container style={{ marginTop: '100px', maxWidth: '1200px' }}>
                <Row>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((element, index) => (
                        <Col key={index} xs={3}>
                            <InfoCard title={element.toString()} subtitle="" text="" margin="25px 25px" />
                        </Col>
                    ))}
                </Row>
            </Container>

        </>
    )
}
