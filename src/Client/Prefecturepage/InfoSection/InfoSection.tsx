import InfoCard from "./InfoCard"
import { Container, Row, Col } from "react-bootstrap"
import { LightThemeContext } from "../../../ThemeContext";
import { useContext } from "react";
import './InfoCard.css'


interface InfoSectionProps {
    onScroll: boolean;
}

export default function InfoSection(props: InfoSectionProps) {
    const { light } = useContext(LightThemeContext);
    return (
        <>
            <Container style={{ marginBottom: '100px' }}>
                <Container>
                    <Container className={`InfoSectionContainer ${light ? "InfoSectionContainerLight" : "InfoSectionContainerDark"}`}>
                        <Row >
                            {['0.75s', '1s', '1.25s', '1.5s'].map((timing, index) => (
                                <Col key={index} sm={6} xl={3}>
                                    <InfoCard title="Card Title"
                                        subtitle="Card Subtitle"
                                        text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.`}
                                        margin="30px 30px"
                                        image="https://placehold.co/150x150"
                                        style={{ clipPath: "circle(40%)", maxWidth: '150px' }}
                                        onScroll={props.onScroll}
                                        timing={timing}
                                        transitionTimingFunc="cubic-bezier(0.42, 0, 0.58, 1)" />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Container>
            </Container>

        </>
    )
}