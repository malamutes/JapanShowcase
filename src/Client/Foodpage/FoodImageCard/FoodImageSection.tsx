import FoodImageCard from "./FoodImageCard"
import { Container, Col, Row } from "react-bootstrap"

export default function FoodImageSection() {
    return (
        <>
            <Container>
                <Col>
                    {[1, 2, 3, 4, 5].map((element, index) => (
                        <Row key={index} style={{ margin: '25px 0' }}>
                            <FoodImageCard />
                        </Row>

                    ))}

                </Col>
            </Container>

        </>
    )
}