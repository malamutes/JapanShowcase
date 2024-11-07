import './Entertainment.css'
import { Container, Row, Col, Offcanvas } from 'react-bootstrap'
import EntertainmentCard from './EntertainmentCard'
import { EntertainmentData, GeneralEntertainment } from '../Data/EntertainmentData'
import { useState } from 'react'


export default function Entertainment() {
    const GE = GeneralEntertainment;
    const [currentHover, setCurrentHover] = useState(-1);

    return (
        <>
            <Container style={{ maxWidth: '100vw', marginBottom: '5cqw' }}>
                <h1 className="CommonHeader">Japanese Entertainment</h1>
                <Container style={{ maxWidth: '75%' }}>
                    <Row >
                        {Object.keys(GE).slice(0, 3).map((entertainment, index) => (
                            <Col onMouseEnter={() => setCurrentHover(index)} onMouseLeave={() => setCurrentHover(-1)}
                                style={{ transition: 'flex 1s', flex: `${currentHover === index ? 1.5 : 1}` }}>
                                <EntertainmentCard
                                    color={GE[entertainment].color}
                                    title={GE[entertainment].title}
                                    desc={GE[entertainment].desc}
                                    image={GE[entertainment].image}
                                    borderColour={GE[entertainment].borderColor}
                                />
                            </Col>
                        ))}
                    </Row>

                    <Row style={{ marginTop: '1cqw' }}>
                        {Object.keys(GE).slice(3, 5).map((entertainment, index) => (
                            <Col onMouseEnter={() => setCurrentHover(index + 3)} onMouseLeave={() => setCurrentHover(-1)}
                                style={{ transition: 'flex 1s', flex: `${currentHover === index + 3 ? 1.5 : 1}` }}>
                                <EntertainmentCard
                                    color={GE[entertainment].color}
                                    title={GE[entertainment].title}
                                    desc={GE[entertainment].desc}
                                    image={GE[entertainment].image}
                                    borderColour={GE[entertainment].borderColor}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container >


        </>
    )
}
