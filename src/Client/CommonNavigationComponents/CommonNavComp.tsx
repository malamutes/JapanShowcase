import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useContext, useEffect, useState } from 'react';
import './CommonDividers.css'
import { LightThemeContext } from '../../ThemeContext';
import { Row, Col, Form, Button, Offcanvas, Toast, Accordion } from "react-bootstrap"
import MatchmediaQuery from '../CommonLogic(NON-UI)/MatchmediaQuery';

//<a href="https://www.flaticon.com/free-icons/dark-mode" title="dark mode icons">Dark mode icons created by gravisio - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/light-dark" title="light dark icons">Light dark icons created by Any Icon - Flaticon</a>

export default function CommonNavCompTop() {
    const [top, setTop] = useState(true);

    const { light, setLight } = useContext(LightThemeContext);

    const [more768, setMore768] = useState(true);
    const checkmore768px = MatchmediaQuery({ size: 768, more: more768, setMore: setMore768 });

    const [showToastServices, setShowToastServices] = useState(false);

    const [showToastContact, setShowToastContact] = useState(false);

    const [showNavMenu, setShowNavMenu] = useState(false);
    const handleClose = () => setShowNavMenu(false);

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
            <Toast show={showToastServices} onClose={() => {
                setShowToastServices(false);
            }}
                style={{
                    position: 'fixed', top: '50vh', left: '50vw',
                    transform: 'translate(-50%, -50%)', zIndex: 5,
                    display: `${more768 ? "block" : "none"}`
                }}>
                <Toast.Header style={{ boxShadow: '0px 0px 5px rgba(0,0,0,0.5)' }}>
                    <strong className="me-auto" style={{ fontSize: '15px' }}>Services</strong>
                </Toast.Header>
                <Toast.Body style={{ color: 'black', backgroundColor: 'white' }}>
                    <p><span style={{ fontWeight: '700' }}>Vivamus Viverra</span> <br />
                        A journey through elegance and minimalism.
                    </p>


                    <p><span style={{ fontWeight: '700' }}>Mollis Ultrices</span> <br />
                        Dynamic solutions for modern challenges.
                    </p>


                    <p><span style={{ fontWeight: '700' }}>Pharetra Proin</span> <br />
                        Bridging creativity and functionality.
                    </p>
                </Toast.Body>
            </Toast>

            <Toast show={showToastContact} onClose={() => {
                setShowToastContact(false);
            }}
                style={{
                    position: 'fixed', top: '50vh', left: '50vw',
                    transform: 'translate(-50%, -50%)', zIndex: 5,
                    display: `${more768 ? "block" : "none"}`
                }}>
                <Toast.Header style={{ boxShadow: '0px 0px 5px rgba(0,0,0,0.5)' }}>
                    <strong className="me-auto" style={{ fontSize: '15px' }}>Contact</strong>
                </Toast.Header>
                <Toast.Body style={{ color: 'black', backgroundColor: 'white' }}>
                    <p><span style={{ fontWeight: '700' }}>Phone</span> <br />
                        (+61) 452 389 408
                    </p>


                    <p><span style={{ fontWeight: '700' }}>Email</span> <br />
                        pavan192004@gmail.com  <br />
                        paul.van@student.curtin.edu.au
                    </p>


                    <p><span style={{ fontWeight: '700' }}>Address</span> <br />
                        Wtf why do you need to know this??
                    </p>
                </Toast.Body>
            </Toast>


            <Container fluid style={{
                position: 'fixed', padding: '0', zIndex: '10',
                opacity: top ? 0.1 : 1, backgroundColor: 'white'
            }}>
                <Navbar >
                    <Row style={{ minWidth: '90%', margin: 'auto' }}>
                        <Col xs={4} >
                            <Container style={{ display: 'flex', alignItems: 'center' }}>
                                <Image
                                    alt="Navbar Brand"
                                    src="/Images/CherryBlossom.png"
                                    width="40"
                                    height="40"

                                    onClick={() => { window.scrollTo(0, 0) }}
                                    style={{ cursor: 'pointer' }}
                                />
                                <span style={{
                                    fontSize: '20px', marginLeft: '15px', color: 'black', cursor: 'pointer'
                                }}
                                    onClick={() => { window.scrollTo(0, 0) }}>
                                    Japan Showcase
                                </span>
                            </Container>

                        </Col>

                        <Col xs={8} style={{ display: 'flex', justifyContent: 'end', }}>
                            <Row style={{ minWidth: '100%', margin: '0' }}>
                                <Col xs={10} style={{
                                    display: 'flex', justifyContent: 'end',
                                    alignItems: 'center',
                                    padding: '0'
                                }}>

                                    <div className='CommonTopCompNavMenu'>
                                        <Row style={{
                                            height: '100%', transition: 'transform 1s ease',
                                            transform: `translateX(${showNavMenu ? 0 : 100}%)`,
                                            alignItems: 'center', margin: '0'
                                        }}>
                                            <Col xl={3} xs={6}>
                                                <a className='CommonTopCompNavMenuAnchor' href='/'>{"Home"}</a>
                                            </Col>

                                            <Col xl={3} xs={6}>
                                                <a className='CommonTopCompNavMenuAnchor' href='#Site map'>{"About"}</a>
                                            </Col>

                                            <Col xl={3} xs={6}>
                                                <span className={`
                                                ${showToastServices ? "CommonTopCompNavMenuAnchorDisabled" : "CommonTopCompNavMenuAnchor "}`}
                                                    onClick={() =>
                                                        setShowToastServices(showToastServices => !showToastServices)}>
                                                    {"Services"}</span>
                                            </Col>


                                            <Col xl={3} xs={6}>
                                                <span className={`
                                                ${showToastContact ? "CommonTopCompNavMenuAnchorDisabled" : "CommonTopCompNavMenuAnchor "}`}
                                                    onClick={() =>
                                                        setShowToastContact(showToastContact => !showToastContact)}>
                                                    {"Contact"}</span>
                                            </Col>
                                        </Row>
                                    </div>
                                    <Image src='/Images/MenuIcon.png' style={{
                                        maxWidth: '32px', maxHeight: '32px', cursor: 'pointer',
                                        zIndex: '100', marginRight: '15px'
                                    }} onClick={() => setShowNavMenu(showNavMenu => !showNavMenu)} />

                                    <div className='FormGroupContainer'>
                                        <Form className="d-flex">
                                            <Form.Control
                                                type="search"
                                                placeholder="Search"
                                                className="me-2"
                                                aria-label="Search"
                                                style={{ borderRadius: '25px' }}
                                            />
                                            <Button style={{ borderRadius: '25px' }}>Search</Button>
                                        </Form>
                                    </div>


                                </Col>

                                <Col xs={2} style={{
                                    display: 'flex', alignItems: 'center', padding: '0'
                                }}>
                                    <Image src={`${light ? "/Images/DarkModeIcon.png" : "/Images/LightModeIcon.png"}`}
                                        style={{
                                            cursor: 'pointer', maxWidth: '32px', height: 'auto',
                                            marginLeft: '5px'
                                        }}
                                        onClick={() => setLight(light => !light)} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Navbar >

                {checkmore768px ? (null) : (
                    <Offcanvas show={showNavMenu} onHide={handleClose}
                        placement='end'
                        scroll={true}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Col style={{
                                minHeight: '100%',
                            }}>
                                <Row style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <a href='/'><span className='CommonTopCompNavMenuAnchorSmall'>
                                        {"Home"}</span>
                                    </a>
                                </Row>

                                <Row style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <a href='#Site map'><span className='CommonTopCompNavMenuAnchorSmall'>
                                        {"About"}</span>
                                    </a>
                                </Row>

                                <Row style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '25px'
                                }}>
                                    <Accordion >
                                        <Accordion.Item eventKey="0" >
                                            <Accordion.Header >Services</Accordion.Header>
                                            <Accordion.Body>
                                                <p><span style={{ fontWeight: '700' }}>Vivamus Viverra</span> <br />
                                                    A journey through elegance and minimalism.
                                                </p>


                                                <p><span style={{ fontWeight: '700' }}>Mollis Ultrices</span> <br />
                                                    Dynamic solutions for modern challenges.
                                                </p>


                                                <p><span style={{ fontWeight: '700' }}>Pharetra Proin</span> <br />
                                                    Bridging creativity and functionality.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>

                                </Row>

                                <Row style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <Accordion >
                                        <Accordion.Item eventKey="0" >
                                            <Accordion.Header >Contact</Accordion.Header>
                                            <Accordion.Body>
                                                <p><span style={{ fontWeight: '700' }}>Phone</span> <br />
                                                    (+61) 452 389 408
                                                </p>


                                                <p><span style={{ fontWeight: '700' }}>Email</span> <br />
                                                    pavan192004@gmail.com  <br />
                                                    paul.van@student.curtin.edu.au
                                                </p>


                                                <p><span style={{ fontWeight: '700' }}>Address</span> <br />
                                                    Wtf why do you need to know this??
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Row>

                                <Form className="d-flex" style={{ marginLeft: '15px' }}>
                                    <Col >
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2"
                                            aria-label="Search"
                                            style={{
                                                borderRadius: '25px', marginTop: '25px',
                                                marginBottom: '15px'
                                            }}
                                        />
                                        <Button style={{ borderRadius: '25px' }}>Search</Button>
                                    </Col>

                                </Form>
                            </Col>
                        </Offcanvas.Body>
                    </Offcanvas>)}
            </Container >
        </>
    );
}
