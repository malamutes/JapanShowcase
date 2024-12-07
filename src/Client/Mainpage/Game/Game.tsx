import { Container, Row, Col, Image } from "react-bootstrap";
import './Game.css'
import { useState, useRef } from "react";
import CommonHeader from "../CommonStyles/CommonHeader";
import ObserverIntersectionUseEffect from "../../CommonLogic(NON-UI)/ObserverUseEffect";


export default function Games() {
    const [scrollPast, setScrollPast] = useState(false);

    const ComponentRef = useRef<HTMLDivElement>(null);

    const checkHasScrollPast = ObserverIntersectionUseEffect({
        scrollPast: scrollPast, setScrollPast: setScrollPast,
        compRef: ComponentRef, threshold: 0.1
    });


    return (
        <>
            <Container className="CommonContainer" id="Game" ref={ComponentRef}>
                <CommonHeader header="Cult Favourites" colour="#800080" scrollPast={checkHasScrollPast} />
                <Container >
                    <Row >
                        <Col style={{ padding: '0' }}>
                            <div className={`animated-border`} >
                                <div>
                                    <Image src="/Images/GameImages/Bloodborne.webp" alt="Bloodborne" fluid className="GameImageStyle" />
                                </div>

                            </div>

                        </Col>

                        <Col style={{ padding: '0' }}>
                            <Row style={{ margin: '0' }}>
                                <div className={`animated-border`} >
                                    <div >
                                        <Image src="/Images/GameImages/SMTThree.webp" alt="SMTThree" fluid className="GameImageStyleSMT"
                                            style={{ position: 'relative' }} />
                                    </div>

                                </div>
                            </Row>
                            <Row style={{ margin: '0' }}>
                                <Col style={{ paddingTop: '2%' }}>
                                    <Row >
                                        <div className={`animated-border`} >
                                            <div>
                                                <Image src="/Images/GameImages/YakuzaZero.webp" alt="YakuzaZero" fluid className="GameImageStyle" />
                                            </div>

                                        </div>
                                    </Row>

                                    <Row style={{ paddingTop: '4%' }}>
                                        <div className={`animated-border`} >
                                            <div >
                                                <Image src="/Images/GameImages/PersonaFive.webp" alt="PersonaFive" fluid className="GameImageStyle" />
                                            </div>

                                        </div>
                                    </Row>

                                </Col>

                                <Col style={{ paddingLeft: '0', paddingRight: '0', paddingTop: '2%' }}>
                                    <div className={`animated-border`} >
                                        <div >
                                            <Image src="/Images/GameImages/MGR.webp" alt="MGR" fluid className="GameImageStyle" />
                                        </div>
                                    </div>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </Container >
            </Container>

        </>
    )
}