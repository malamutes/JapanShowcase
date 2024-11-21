import InfoCard from "../../Prefecturepage/InfoSection/InfoCard"
import { Container, Row, Col } from "react-bootstrap"

export default function LandmarkCard() {
    return (
        <>
            <Container style={{ marginTop: '100px' }}>
                <Row>
                    {['red', 'orange', 'blue'].map((item, index) => (
                        <Col style={{
                            borderRight: 'solid transparent', borderImage:
                                `${index < 2
                                    ? "radial-gradient(circle, purple 75%, transparent 90%) 1"
                                    : ""}`,
                        }}>
                            <InfoCard title="adssad" subtitle="adssad" text="adssad"
                                image="https://placehold.co/250x250" margin="0px 25px"
                                style={{ clipPath: "circle(40%)" }} />
                        </Col>

                    ))}
                </Row>

            </Container>

        </>
    )
}