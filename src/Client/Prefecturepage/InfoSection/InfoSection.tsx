import InfoCard from "./InfoCard"
import { Container, Row, Col } from "react-bootstrap"
import { InfoCardProps } from "./InfoCard"
import CommonDividers from "../../CommonNavigationComponents/CommonDividers"

export default function InfoSection() {

    const infoCardProps: InfoCardProps = {
        title: "Card Title",
        subtitle: "Card Subtitle",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.`,
        margin: '30px 30px',
        image: "https://placehold.co/150x150",
        style: { clipPath: "circle(40%)", maxWidth: '150px' }
    }


    return (
        <>
            <Container >
                <CommonDividers />
                <Container style={{ boxShadow: "0 0 25px rgba(0, 0, 0, 0.1)", padding: '25px' }}>
                    <Row >
                        {[1, 2, 3, 4].map((element, index) => (
                            <Col key={index} sm={6} xl={3}>
                                <InfoCard title={infoCardProps.title} subtitle={infoCardProps.subtitle} text={infoCardProps.text}
                                    margin={infoCardProps.margin} image={infoCardProps.image}
                                    style={infoCardProps.style} />
                            </Col>
                        ))}
                    </Row>
                </Container>

            </Container>

        </>
    )
}