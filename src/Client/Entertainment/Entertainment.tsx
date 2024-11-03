import './Entertainment.css'
import { Container, Row, Col, Offcanvas } from 'react-bootstrap'
import EntertainmentCard from './EntertainmentCard'
import { EntertainmentData } from '../Data/EntertainmentData'
import { useState } from 'react'

export default function Entertainment() {
    const ED = EntertainmentData;
    const [show, setShow] = useState(false);
    const [currentanime, setCurrentanime] = useState('AOT');

    const handleClose = () => setShow(false);
    const handleShow = (anime: string) => {
        setShow(true);
        setCurrentanime(anime);
    };

    return (
        <>
            <h1 style={{ margin: '75px', textAlign: 'center' }}>TOP 5 NO DISPUTE</h1>
            <Container style={{ maxWidth: '50%' }}>
                <Row style={{ maxWidth: '100%' }}>
                    {Object.keys(ED).slice(0, 3).map((anime, index) => (
                        <Col key={index} style={{ margin: '5px', cursor: 'pointer' }} onClick={() => handleShow(anime)} >
                            <EntertainmentCard front={ED[anime].front} back={ED[anime].back} />
                        </Col>
                    ))}
                </Row>

                <Row style={{ maxWidth: '67%', margin: 'auto' }}>
                    {Object.keys(ED).slice(3, 5).map((anime, index) => (
                        <Col key={index} style={{ margin: '5px', cursor: 'pointer' }} onClick={() => handleShow(anime)}>
                            <EntertainmentCard front={ED[anime].front} back={ED[anime].back} />
                        </Col>
                    ))}
                </Row>

                <Offcanvas show={show} onHide={handleClose} placement='bottom'>
                    <Offcanvas.Header closeButton style={{ backgroundColor: 'darkgrey' }}>
                        <Offcanvas.Title style={{ textAlign: 'center', width: '100%' }}>
                            {ED[currentanime].fullName}
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body style={{ backgroundColor: 'lightgrey', textAlign: 'center' }}>
                        <div style={{ maxWidth: '50%', margin: '0 auto', lineHeight: '2' }}>
                            <p>{ED[currentanime].description}</p>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>


            </Container>

        </>
    )
}
