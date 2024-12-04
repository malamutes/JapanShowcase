import { Container, Row, Col, Image } from "react-bootstrap";
import './TwoTextSection.css'
import CommonDividers from "../../CommonNavigationComponents/CommonDividers";
import ObserverIntersectionUseEffect from "../../CommonLogic(NON-UI)/ObserverUseEffect";
import { useState, useRef, useContext, useEffect } from "react";
import './TwoTextSection.css'
import { PrefectureContext } from "../PrefectureAppContext";

export default function TwoTextSection() {
    const CP = useContext(PrefectureContext)
    const [scrollPast, setScrollPast] = useState(false);

    useEffect(() => {
        setScrollPast(false);
    }, [CP])

    const ComponentRef = useRef<HTMLDivElement>(null);

    const checkHasScrollPast = ObserverIntersectionUseEffect({
        scrollPast: scrollPast, setScrollPast: setScrollPast,
        compRef: ComponentRef, threshold: 0.3
    });


    return (
        <>
            <Container ref={ComponentRef}>
                <CommonDividers onScroll={checkHasScrollPast} />
                <Col >
                    <Row >
                        <Col lg={6}
                            className="UpperCardCol">
                            <Image
                                fluid src={`https://placehold.co/600x600`} className="TwoTextImageStyle" />
                        </Col>

                        <Col lg={6}
                            className="UpperCard">
                            <div className="DescStyle">
                                <p className={`TwoTextDesc ${checkHasScrollPast ? "TwoTextDescShow" : ""} `}
                                    style={{ '--translation-prop': '225%' } as React.CSSProperties}>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Sed euismod velit ac neque tincidunt, et ultricies lorem aliquet.
                                    Donec scelerisque, ipsum eget vehicula auctor, libero eros ultricies felis,
                                    vel auctor sapien felis non neque. Aliquam erat volutpat.
                                </p>

                                <p className={`TwoTextDesc ${checkHasScrollPast ? "TwoTextDescShow" : ""} `}
                                    style={{ '--translation-prop': '225%' } as React.CSSProperties}>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Sed euismod velit ac neque tincidunt, et ultricies lorem aliquet.
                                    Donec scelerisque, ipsum eget vehicula auctor, libero eros ultricies felis,
                                    vel auctor sapien felis non neque. Aliquam erat volutpat.
                                </p>
                                <hr className={`HRTwoText ${checkHasScrollPast ? "HRTwoTextShow" : ""}`} style={{ transformOrigin: 'center left' }} />
                            </div>

                        </Col>


                    </Row>

                    <Row>
                        <Col lg={6}
                            className="LowerCard"  >
                            <div className="DescStyle">
                                <hr className={`HRTwoText ${checkHasScrollPast ? "HRTwoTextShow" : ""}`} style={{ transformOrigin: 'center right' }} />
                                <p className={`TwoTextDesc ${checkHasScrollPast ? "TwoTextDescShow" : ""} `}
                                    style={{ '--translation-prop': '-225%' } as React.CSSProperties}>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Sed euismod velit ac neque tincidunt, et ultricies lorem aliquet.
                                    Donec scelerisque, ipsum eget vehicula auctor, libero eros ultricies felis,
                                    vel auctor sapien felis non neque. Aliquam erat volutpat.
                                </p>

                                <p className={`TwoTextDesc ${checkHasScrollPast ? "TwoTextDescShow" : ""} `}
                                    style={{ '--translation-prop': '-225%' } as React.CSSProperties}>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Sed euismod velit ac neque tincidunt, et ultricies lorem aliquet.
                                    Donec scelerisque, ipsum eget vehicula auctor, libero eros ultricies felis,
                                    vel auctor sapien felis non neque. Aliquam erat volutpat.
                                </p>
                            </div>

                        </Col>

                        <Col lg={6}
                            className="LowerCardCol">
                            <Image fluid src={`https://placehold.co/600x600`} className="TwoTextImageStyle" />
                        </Col>

                    </Row>
                </Col>
            </Container>
        </>
    )
}