import CommonDividersV3 from "../../CommonNavigationComponents/CommonDividersV3"
import InfoCard from "../../Prefecturepage/InfoSection/InfoCard"
import { Container, Row, Col } from "react-bootstrap"

export default function LandmarkCard() {
    return (
        <>
            <Container style={{ marginTop: '100px' }}>
                <CommonDividersV3 />
                <Row>
                    {['red', 'orange', 'blue'].map((item, index) => (
                        <Col lg={4} key={item}
                            style={{
                                borderRight: 'solid transparent', borderImage:
                                    `${index < 2
                                        ? "radial-gradient(circle, purple 75%, transparent 90%) 1"
                                        : ""}`, paddingBottom: '50px'
                            }}>
                            <InfoCard title="adssad" subtitle="adssad" text="Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore e
                            t dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam
                            co laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum."
                                image="https://placehold.co/250x250" margin="0px 25px"
                                style={{ clipPath: "circle(40%)", maxWidth: '250px' }} />
                        </Col>

                    ))}
                </Row>

            </Container>

        </>
    )
}