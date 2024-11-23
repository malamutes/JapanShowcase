import { Container, Row, Col } from "react-bootstrap";
import TripleImageCard from "./ImageCard";
import CommonDividers from "../../CommonNavigationComponents/CommonDividers";

export default function TripleImageSection() {
    return (
        <>
            <Container style={{ maxWidth: '1600px', display: 'flex', justifyContent: 'center' }}>
                <Col>
                    <Row>
                        <CommonDividers />
                    </Row>
                    <Row style={{ width: '100%' }}>
                        {[1, 2, 3].map((element, index) => (
                            <Col key={index} xl={4} style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
                                <TripleImageCard />
                            </Col>
                        ))}
                    </Row>
                </Col>


            </Container>
        </>
    )
}