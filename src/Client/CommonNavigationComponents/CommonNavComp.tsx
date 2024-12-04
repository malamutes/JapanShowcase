import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Offcanvas, Row, Col } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useContext, useEffect, useState } from 'react';
import './CommonDividers.css'
import { LightThemeContext } from '../../ThemeContext';

export default function CommonNavCompTop() {
    const [show, setShow] = useState(false);
    const [top, setTop] = useState(true);

    const { light, setLight } = useContext(LightThemeContext);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const checkNoScroll = () => {
            if (window.scrollY === 0) {
                setTop(true);
            }
            else {
                setTop(false);
            }
        }
        window.addEventListener('scroll', checkNoScroll);
    })

    return (
        <>
            <Container fluid style={{ position: 'fixed', padding: '0', zIndex: '10', opacity: top ? 0.1 : 1 }}>
                <Navbar expand="lg" className="bg-body-tertiary" >
                    <Container style={{ minHeight: '50px' }}>
                        <div className='LargeScreenTopNav'>
                            <Row style={{ display: 'flex', maxWidth: '100%', }}>
                                <Col >
                                    <Navbar.Brand href="#" >Japan Showcase</Navbar.Brand>
                                </Col>
                                <Col >
                                    <Nav
                                        className="me-auto my-2 my-lg-0"
                                        style={{
                                            maxHeight: '100px', width: '50%',
                                            display: 'flex', justifyContent: 'center', margin: 'auto'
                                        }}
                                        navbarScroll
                                    >
                                        <a href="/">Home</a>
                                        {['Attractions', 'Experiences', 'Contact', 'About'].map((item, index) => (
                                            <NavDropdown title={item} key={item} style={{ flexGrow: '1' }}>
                                                {""}
                                            </NavDropdown>
                                        ))}

                                    </Nav>

                                </Col>

                                <Col >
                                    <Form className="d-flex">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2"
                                            aria-label="Search"
                                            style={{ borderRadius: '50px' }}
                                        />
                                        <Button variant="outline-success" style={{ borderRadius: '50px' }}>Search</Button>
                                    </Form>
                                </Col>
                            </Row>
                        </div>

                        <div className='SmallScreenTopNav'>
                            <Navbar.Brand href="#" >Japan Showcase</Navbar.Brand>

                            <Button variant="primary" onClick={handleShow}>
                                STUFF
                            </Button>

                            <Offcanvas show={show} onHide={handleClose} scroll={true}
                                placement="end">
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    Some text as placeholder. In real life you can have the elements you
                                    have chosen. Like, text, images, lists, etc.
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
                    </Container>
                </Navbar>

                <Button onClick={() => setLight(light => !light)}>
                    asdsad
                </Button>
            </Container>

        </>
    );
}
