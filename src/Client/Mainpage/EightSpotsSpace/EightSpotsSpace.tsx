import { Col, Container, Row } from "react-bootstrap";
import EightSpotsCard from "./EightSpotsCard";
import { PlaceData } from "../Data/EightSpotData";
import '../CommonStyles/CommonStyles.css'
import CommonHeader from "../CommonStyles/CommonHeader";
import { useRef, useState, useEffect } from "react";
import checkScrollPosition from "../CommonStyles/ScrollPast";
import { useNavigate } from "react-router-dom";

export default function EightSpotsSpace() {
    const PD = PlaceData;

    const EightPlaceRef = useRef<HTMLDivElement>(null);
    const scrollPast = checkScrollPosition((8.5 / 10), EightPlaceRef)

    const [less1920px, setLess1920px] = useState(false);

    const navigate = useNavigate();

    const handleClick = (path: string) => {
        navigate(`Prefecture/${path}`)
    }

    useEffect(() => {
        const handleSmallScreen = () => {
            if (window.innerWidth < 1920) {
                setLess1920px(true);
            }
            else if (window.innerWidth >= 1920) {
                setLess1920px(false)
            }

        }

        handleSmallScreen();
        window.addEventListener('resize', handleSmallScreen);

        return () => {
            window.removeEventListener('resize', handleSmallScreen);
        }
    }, [])

    return (
        <>
            <Container className="CommonContainer" id="Hubs" ref={EightPlaceRef}>
                <CommonHeader header="Cultural Hubs of Japan" colour="red" scrollPast={scrollPast}
                    smallScreen={less1920px} />
                <Container >
                    <Row >
                        <Col md={6}>
                            {Object.keys(PD).slice(0, 4).map((element, index) => (
                                <EightSpotsCard key={index} title={PD[element].title}
                                    desc={PD[element].description}
                                    img={PD[element].img}
                                    colour={PD[element].color}
                                    scrollPast={scrollPast}
                                    smallScreen={less1920px}
                                    onclick={() => handleClick(element)} />
                            ))}
                        </Col>

                        <Col md={6}>
                            {Object.keys(PD).slice(4, 8).map((element, index) => (
                                <EightSpotsCard key={index} title={PD[element].title}
                                    desc={PD[element].description}
                                    img={PD[element].img}
                                    colour={PD[element].color}
                                    scrollPast={scrollPast}
                                    smallScreen={less1920px}
                                    onclick={() => handleClick(element)} />
                            ))}
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}