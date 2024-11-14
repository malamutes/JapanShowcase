import './Entertainment.css'
import { Container, Row, Col, Offcanvas } from 'react-bootstrap'
import EntertainmentCard from './EntertainmentCard'
import { GeneralEntertainment } from '../Data/EntertainmentData'
import { useState, useEffect, useRef } from 'react'
import CommonHeader from '../CommonStyles/CommonHeader'
import checkScrollPosition from '../CommonStyles/ScrollPast'

export default function Entertainment() {
    const GE = GeneralEntertainment;
    const [currentHover, setCurrentHover] = useState(-1);
    const [currentScreenWidth, setCurrentScreenWidth] = useState(true);

    const EntertainmentRef = useRef<HTMLDivElement>(null);
    const scrollPast = checkScrollPosition((8.5 / 10), EntertainmentRef)

    useEffect(() => {
        function widthLess768() {
            if (window.innerWidth <= 768) {
                setCurrentScreenWidth(false);
            }
            else if (window.innerWidth > 768) {
                setCurrentScreenWidth(true);
            }
        };

        widthLess768();

        window.addEventListener('resize', widthLess768);

        return () => {
            window.removeEventListener('resize', widthLess768);
        };

    }, []);

    return (
        <>
            <Container className={`CommonContainer`} style={{ overflowY: 'hidden' }}
                id="Entertainment" ref={EntertainmentRef}>
                <CommonHeader header="Japanese Entertainment" colour="#FF1493" scrollPast={scrollPast} />
                <Container className={`EntertainmentBeforeScoll ${scrollPast ? "EntertainmentAfterScoll" : ""}`}>
                    <Row >
                        {Object.keys(GE).slice(0, 3).map((entertainment, index) => (
                            <Col lg={12} onMouseEnter={() => setCurrentHover(index)} onMouseLeave={() => setCurrentHover(-1)}
                                style={{
                                    transition: 'flex 1s', cursor: 'pointer',
                                    flex: `${currentScreenWidth === true ? (currentHover === index ? 1.5 : 1) : ''}`,
                                    marginBottom: `${currentScreenWidth ? "" : "2.5cqw"}`
                                }}>
                                <EntertainmentCard
                                    color={GE[entertainment].color}
                                    title={GE[entertainment].title}
                                    desc={GE[entertainment].desc}
                                    image={GE[entertainment].image}
                                    borderColour={GE[entertainment].borderColor}
                                    height={`${currentScreenWidth ? "350px" : "200px"}`}
                                />
                            </Col>
                        ))}
                    </Row>

                    <Row style={{ marginTop: '1cqw' }}>
                        {Object.keys(GE).slice(3, 5).map((entertainment, index) => (
                            <Col lg={6} onMouseEnter={() => setCurrentHover(index + 3)} onMouseLeave={() => setCurrentHover(-1)}
                                style={{
                                    transition: 'flex 1s', cursor: 'pointer',
                                    flex: `${currentScreenWidth === true ? (currentHover === index + 3 ? 1.5 : 1) : ''}`,
                                    marginBottom: `${currentScreenWidth ? "" : "2.5cqw"}`
                                }}>
                                <EntertainmentCard
                                    color={GE[entertainment].color}
                                    title={GE[entertainment].title}
                                    desc={GE[entertainment].desc}
                                    image={GE[entertainment].image}
                                    borderColour={GE[entertainment].borderColor}
                                    height={`${currentScreenWidth ? "350px" : "250px"}`}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container >


        </>
    )
}
