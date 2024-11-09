import './Entertainment.css'
import { Container, Row, Col, Offcanvas } from 'react-bootstrap'
import EntertainmentCard from './EntertainmentCard'
import { EntertainmentData, GeneralEntertainment } from '../Data/EntertainmentData'
import { useState, useEffect } from 'react'


export default function Entertainment() {
    const GE = GeneralEntertainment;
    const [currentHover, setCurrentHover] = useState(-1);
    const [currentScreenWidth, setCurrentScreenWidth] = useState(true);

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
            <Container className="CommonContainer" style={{ marginBottom: '5cqw' }}>
                <h1 className="CommonHeader">Japanese Entertainment</h1>
                <Container >
                    <Row >
                        {Object.keys(GE).slice(0, 3).map((entertainment, index) => (
                            <Col lg={12} onMouseEnter={() => setCurrentHover(index)} onMouseLeave={() => setCurrentHover(-1)}
                                style={{
                                    transition: 'flex 1s',
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
                                    transition: 'flex 1s',
                                    flex: `${currentScreenWidth === true ? (currentHover === index ? 1.5 : 1) : ''}`,
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
