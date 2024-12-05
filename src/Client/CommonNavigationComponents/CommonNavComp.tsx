import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useContext, useEffect, useState } from 'react';
import './CommonDividers.css'
import { LightThemeContext } from '../../ThemeContext';
import { Row, Col, Form, Button, Offcanvas } from "react-bootstrap"
import MatchmediaQuery from '../CommonLogic(NON-UI)/MatchmediaQuery';

//<a href="https://www.flaticon.com/free-icons/dark-mode" title="dark mode icons">Dark mode icons created by gravisio - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/light-dark" title="light dark icons">Light dark icons created by Any Icon - Flaticon</a>

export default function CommonNavCompTop() {
    const [top, setTop] = useState(true);

    const { light, setLight } = useContext(LightThemeContext);

    const [more768, setMore768] = useState(true);
    const checkmore768px = MatchmediaQuery({ size: 768, more: more768, setMore: setMore768 });

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
                                />
                                <span style={{
                                    fontSize: '20px', marginLeft: '15px',

                                }}>
                                    Japan Showcase
                                </span>
                            </Container>

                        </Col>

                        <Col xs={8} style={{ display: 'flex', justifyContent: 'end' }}>
                            <Row style={{ minWidth: '100%', margin: '0' }}>
                                <Col xs={10} style={{
                                    display: 'flex', justifyContent: 'end',
                                    alignItems: 'center',
                                    padding: '0'
                                }}>

                                    <div className='CommonTopCompNavMenu'>
                                        <Row style={{
                                            height: '100%', transition: 'transform 1s ease',
                                            transform: `translateX(${showNavMenu ? 0 : 100}%)`
                                        }}>
                                            {['Home', 'About', 'Services', 'Contact'].map((nav) => (
                                                <Col key={nav} style={{
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}>
                                                    <a >{nav}</a>
                                                </Col>
                                            ))}
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
                                {['Home', 'About', 'Services', 'Contact'].map((nav) => (
                                    <Row key={nav} style={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <a><span style={{
                                            fontSize: '20px', fontWeight: '600',
                                            margin: '15px', display: 'inline-block'
                                        }}>
                                            {nav}</span>
                                        </a>
                                    </Row>


                                ))}

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
