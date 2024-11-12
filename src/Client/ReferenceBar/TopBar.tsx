import './ReferenceBar.css'
import { Container, Row, Col, Offcanvas, Accordion, Image } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { TopBarData } from '../Data/ReferenceLinks';

export default function TopBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [more1200px, setMore1200px] = useState(true);
    const [currentHover, setCurrentHover] = useState("");

    useEffect(() => {
        function widthLess1200() {
            if (window.innerWidth <= 1200) {
                setMore1200px(false);
            }
            else if (window.innerWidth > 1200) {
                setMore1200px(true);
            }
        };

        widthLess1200();

        window.addEventListener('resize', widthLess1200);

        return () => {
            window.removeEventListener('resize', widthLess1200);
        };

    }, []);



    const TBD = TopBarData;

    return (
        <>
            <Container style={{
                position: 'absolute', zIndex: '10',
                backgroundColor: 'red', height: '7.5%'
            }} fluid>
                <Row>
                    <Col xs={1} >
                        <button onClick={handleShow}>HELLO</button>

                        {more1200px ? (<Offcanvas placement="top" show={show}
                            style={{ height: '55vh' }}
                            onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>JAPAN</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Container style={{ maxWidth: '1824px' }}>
                                    <Row>
                                        <Col xs={8}>
                                            <Row>
                                                {Object.keys(TBD).map((topBarDataItem, index) => (
                                                    <Col key={index} >
                                                        <h6 style={{ marginBottom: '1cqw', marginLeft: '-0.25cqw' }}>{topBarDataItem}</h6>
                                                        <Row >
                                                            {Object.keys(TBD[topBarDataItem]).map((topBarDataInnerItem, innerIndex) => (
                                                                <Col xs={12} style={{ marginBottom: '0.8cqw', marginLeft: '0cqw' }} key={innerIndex}>
                                                                    <span className='TopBarText' onMouseEnter={() => setCurrentHover(TBD[topBarDataItem][topBarDataInnerItem].image)}
                                                                        onMouseLeave={() => setCurrentHover("")}
                                                                    >{TBD[topBarDataItem][topBarDataInnerItem].title}</span>
                                                                </Col>
                                                            ))}
                                                        </Row>
                                                    </Col>

                                                ))}
                                            </Row>

                                        </Col>

                                        <Col xs={4}>
                                            <Image src={currentHover} style={{ maxWidth: '90%' }} />
                                        </Col>

                                    </Row>
                                </Container>
                            </Offcanvas.Body>
                        </Offcanvas>)

                            :

                            (
                                <Offcanvas placement="start" show={show}
                                    onHide={handleClose}>
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title>JAPAN</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <Container style={{ maxWidth: '1824px' }}>
                                            <Accordion>
                                                {Object.keys(TBD).map((topBarDataItem, accordionIndex) => (
                                                    <Accordion.Item eventKey={`${accordionIndex}`} key={accordionIndex} >
                                                        <Accordion.Header>{topBarDataItem}</Accordion.Header>
                                                        <Accordion.Body>
                                                            <Col>
                                                                {Object.keys(TBD[topBarDataItem]).map((topBarDataInnerItem, accordionInnerIndex) => (
                                                                    <Row key={accordionInnerIndex}>
                                                                        <Image style={{ cursor: 'pointer', marginBottom: '2.5cqw' }} src={TBD[topBarDataItem][topBarDataInnerItem].image} />
                                                                    </Row>
                                                                ))}
                                                            </Col>

                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                ))}

                                            </Accordion>
                                        </Container>
                                    </Offcanvas.Body>
                                </Offcanvas>
                            )}


                    </Col>

                    <Col xs={7} style={{ backgroundColor: 'green' }}>

                    </Col>

                    <Col xs={2} style={{ backgroundColor: 'yellow' }}>
                        ABOUT ME
                    </Col>

                    <Col xs={2} style={{ backgroundColor: 'purple' }}>
                        MOTIVATION
                    </Col>

                </Row >

            </Container >

        </>
    )
}