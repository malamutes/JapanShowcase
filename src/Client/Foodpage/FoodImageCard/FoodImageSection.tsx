import FoodImageCard from "./FoodImageCard"
import { Container, Col, Row } from "react-bootstrap"

export default function FoodImageSection() {
    return (
        <>
            <Container style={{ padding: '0' }}>
                <Row style={{ margin: '0' }} >
                    {[1, 2, 3, 4, 5, 6].map((element, index) => (
                        <Col key={index} style={{ margin: '25px 0px', }} md={6} lg={12}>
                            <FoodImageCard />
                        </Col>

                    ))}

                </Row>
            </Container>

        </>
    )
}