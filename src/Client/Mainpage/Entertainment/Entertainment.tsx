import './Entertainment.css'
import { Container, Row, Col } from 'react-bootstrap'
import EntertainmentCard from './EntertainmentCard'
import { GeneralEntertainment } from '../Data/EntertainmentData'
import { useState, useRef } from 'react'
import CommonHeader from '../CommonStyles/CommonHeader'
import ObserverIntersectionUseEffect from '../../CommonLogic(NON-UI)/ObserverUseEffect'
import MatchmediaQuery from '../../CommonLogic(NON-UI)/MatchmediaQuery'

export default function Entertainment() {
    const GE = GeneralEntertainment;
    const [currentHover, setCurrentHover] = useState(-1);


    const [scrollPast, setScrollPast] = useState(false);

    const ComponentRef = useRef<HTMLDivElement>(null);

    const checkHasScrollPast = ObserverIntersectionUseEffect({
        scrollPast: scrollPast, setScrollPast: setScrollPast,
        compRef: ComponentRef, threshold: 0.1
    });


    const [more768, setMore768] = useState(true);

    const checkmore768px = MatchmediaQuery({ size: 768, more: more768, setMore: setMore768 });

    return (
        <>
            <Container className={`CommonContainer`} style={{ overflowY: 'hidden' }}
                id="Entertainment" ref={ComponentRef}>
                <CommonHeader header="Japanese Entertainment" colour="#FF1493" scrollPast={checkHasScrollPast} />
                <Container className={`EntertainmentBeforeScoll ${checkHasScrollPast ? "EntertainmentAfterScoll" : ""}`}>
                    <Row >
                        {Object.keys(GE).slice(0, 3).map((entertainment, index) => (
                            <Col lg={12} onMouseEnter={() => setCurrentHover(index)} onMouseLeave={() => setCurrentHover(-1)}
                                style={{
                                    transition: 'flex 1s', cursor: 'pointer',
                                    flex: `${checkmore768px === true ? (currentHover === index ? 1.5 : 1) : ''}`,
                                    marginBottom: `${checkmore768px ? "" : "2.5cqw"}`
                                }} key={entertainment}>
                                <EntertainmentCard
                                    color={GE[entertainment].color}
                                    title={GE[entertainment].title}
                                    desc={GE[entertainment].desc}
                                    image={GE[entertainment].image}
                                    borderColour={GE[entertainment].borderColor}
                                    height={`${checkmore768px ? "350px" : "200px"}`}
                                />
                            </Col>
                        ))}
                    </Row>

                    <Row style={{ marginTop: '1cqw' }}>
                        {Object.keys(GE).slice(3, 5).map((entertainment, index) => (
                            <Col lg={6} onMouseEnter={() => setCurrentHover(index + 3)} onMouseLeave={() => setCurrentHover(-1)}
                                style={{
                                    transition: 'flex 1s', cursor: 'pointer',
                                    flex: `${checkmore768px === true ? (currentHover === index + 3 ? 1.5 : 1) : ''}`,
                                    marginBottom: `${checkmore768px ? "" : "2.5cqw"}`
                                }} key={entertainment}>
                                <EntertainmentCard
                                    color={GE[entertainment].color}
                                    title={GE[entertainment].title}
                                    desc={GE[entertainment].desc}
                                    image={GE[entertainment].image}
                                    borderColour={GE[entertainment].borderColor}
                                    height={`${checkmore768px ? "350px" : "250px"}`}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container >


        </>
    )
}
