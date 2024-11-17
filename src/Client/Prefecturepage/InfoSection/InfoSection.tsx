import InfoCard from "./InfoCard"
import { Container, Row, Col } from "react-bootstrap"
import { InfoCardProps } from "./InfoCard"

export default function InfoSection() {

    const infoCardProps: InfoCardProps = {
        title: "Card Title",
        subtitle: "Card Subtitle",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.`,
        margin: '30px 30px',
        image: "holder.js/150x150?text=InfoIcon"
    }


    return (
        <>
            <Container style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 1)", marginTop: '100px', padding: '0' }}>
                <Row >
                    {[1, 2, 3, 4].map((element, index) => (
                        <Col key={index} >
                            <InfoCard title={infoCardProps.title} subtitle={infoCardProps.subtitle} text={infoCardProps.text}
                                margin={infoCardProps.margin} image={infoCardProps.image}
                                style={{ clipPath: "circle(40%)" }} />
                        </Col>
                    ))}
                </Row>
            </Container>

        </>
    )
}