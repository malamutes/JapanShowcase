import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Offcanvas } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { screenWidthBreakpointsContext } from '../../main';
import { useContext, useEffect, useState } from 'react';

export default function CommonNavCompTop() {
    const screenWidthBreakpoints = useContext(screenWidthBreakpointsContext);

    const [show, setShow] = useState(false);
    const [top, setTop] = useState(true);

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
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container style={{ minHeight: '50px' }}>
                        <Navbar.Brand href="#">Japan Showcase</Navbar.Brand>
                        {screenWidthBreakpoints['more992px'] ? (
                            <>
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{
                                        maxHeight: '100px', width: '50%',
                                        display: 'flex', justifyContent: 'center', margin: 'auto'
                                    }}
                                    navbarScroll
                                >
                                    {['Home', 'Attractions', 'Experiences', 'Contact', 'About'].map((item, index) => (
                                        <NavDropdown title={item} key={index} style={{ flexGrow: '1' }}>
                                            {""}
                                        </NavDropdown>
                                    ))}

                                </Nav>
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
                            </>
                        )
                            :
                            (
                                <>
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
                                </>
                            )}
                    </Container>
                </Navbar>
            </Container>

        </>
    );
}
