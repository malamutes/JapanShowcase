import { Container, Row, Col, Form, Button, Accordion, Toast } from 'react-bootstrap'
import './ReferenceBar.css'
import { ReferenceData } from '../Data/ReferenceLinks'
import { faInstagram, faFacebook, faLinkedin, faTiktok, faPinterest, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import MatchmediaQuery from '../../CommonLogic(NON-UI)/MatchmediaQuery';
import '../../Prefecturepage/HorizontalCard/HorizontalCard.css'

const iconMap: { [key: string]: any } = {
    instagram: faInstagram,
    facebook: faFacebook,
    linkedIn: faLinkedin,
    tikTok: faTiktok,
    pinterest: faPinterest,
    youTube: faYoutube,
    twitter: faXTwitter,
};


function EmailInput() {
    const [showToast, setShowToast] = useState(false);
    const [email, setEmail] = useState("");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const [valid, setValid] = useState(false);

    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    return (
        <>
            <div className={`HorizontalCardOverlay ${showToast ? "HorizontalCardOverlayDark" : ""}`}
                onClick={() => { setShowToast(false); setEmail(""); }} />
            <Toast show={showToast} onClose={() => {
                setShowToast(false);
                setEmail("");
            }}
                style={{
                    position: 'fixed', top: '50vh', left: '50vw',
                    transform: 'translate(-50%, -50%)', zIndex: 5
                }}>
                <Toast.Header style={{ boxShadow: '0px 0px 5px rgba(0,0,0,0.5)' }}>
                    <strong className="me-auto">Thanks for Subscribing!</strong>
                    <small>Japan Showcase</small>
                </Toast.Header>
                <Toast.Body style={{ color: 'black' }}>{valid ? `Woohoo, ${email} is now a subscriber!` : "Invalid Email"}</Toast.Body>
            </Toast>

            <Form.Control
                type="text"
                id="EmailInputForm"
                aria-describedby="EmailInputForm"
                placeholder='Email'
                value={email}
                onChange={handleEmailInput}
                className="FormEmailInput"
                style={{
                    width: '50%'
                }}
            />

            <Button variant="danger"
                className="FormEmailInput"
                style={{
                    width: '25%', padding: '0'
                }}
                onClick={() => {
                    if (emailRegex.test(email)) {
                        setValid(true);
                    }
                    else {
                        setValid(false);
                    }
                    setShowToast(true);
                }}
            ><span className='EmailInputText'
            >GIVE</span></Button>

        </>
    )
}

export default function ReferenceBar() {
    const RD = ReferenceData;

    const [more768px, setMore768px] = useState(false);
    const checkMore768px = MatchmediaQuery({ size: 768, more: more768px, setMore: setMore768px });

    return (
        <>
            <Container className="ReferenceBarContainer" style={{
                backgroundColor: 'rgb(25, 25, 25)', color: 'white',
                borderTop: '0.1px solid white'
            }} fluid id="ReferenceBar">
                <Container style={{ paddingTop: '2cqw', paddingBottom: '2cqw' }}>
                    <Col>
                        <Row >
                            <Col md={4} className="d-flex flex-column">
                                <Row >
                                    <span >
                                        <h3 className="JapanTitleStyle">JAPAN SHOWCASE</h3>
                                        <p className="DescriptionStyle">The site I’m building showcases
                                            Japan’s culture while highlighting my web development skills.
                                            It focuses on responsive design, interactivity, and a smooth user experience to
                                            demonstrate my expertise in modern web technologies.</p>
                                    </span>

                                </Row>

                                <Row className="flex-grow-1" style={{
                                    display: 'flex', flexDirection: 'column', justifyContent: 'start',
                                }}>
                                    <span className="EmailInputText"
                                    >Give me your email.</span>
                                    <Row>
                                        <EmailInput />
                                    </Row>

                                </Row>

                                <Row className="SocialIconRow" style={{ maxWidth: '85%' }}>
                                    {["facebook", "twitter", "instagram", "youTube", "linkedIn", "tikTok"].map((social, socialIndex) => (
                                        <Col key={social} xs={2}>
                                            <a target="_blank" href={`https://${social}.com`} >
                                                <FontAwesomeIcon icon={iconMap[social]} className='SocialIcon' />
                                            </a>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>

                            <Col md={4} className="d-flex flex-column align-items-center">
                                <Row className="flex-grow-1">

                                </Row>

                                <Row >
                                    <a href="#Home" className='AnchorToTop'>Back to Top</a>
                                </Row>
                            </Col>

                            <Col md={4} >

                                <div className='LargeScreenBottomBar'>
                                    <Row>
                                        {Object.keys(RD).map((referenceType, typeIndex) => (
                                            <Col key={referenceType} className="ReferenceLinksColStyle">
                                                <h6 className="ReferenceTitle" >{referenceType}</h6>
                                                {Object.keys(RD[referenceType]).map((referenceLinks, linkIndex) => (
                                                    <Row key={referenceLinks} >
                                                        <a
                                                            target={`${["IconReferences", "ImageReferences"].includes(referenceType) ? "_blank" : ""}`}
                                                            href={RD[referenceType][referenceLinks].link} className="ReferenceLinksStyle">{referenceLinks}
                                                        </a>
                                                    </Row>
                                                ))}
                                            </Col>
                                        ))}
                                    </Row>

                                </div>

                                <div className='SmallScreenBottomBar'>
                                    <Accordion style={{ marginBottom: '25px' }} className='CustomAccordian'>
                                        {Object.keys(RD).map((referenceType, typeIndex) => (
                                            <Accordion.Item eventKey={`${typeIndex}`} key={typeIndex}>
                                                <Accordion.Header >{referenceType}</Accordion.Header>
                                                <Accordion.Body style={{ backgroundColor: 'black', color: 'whitesmoke' }}>
                                                    <Col>
                                                        {Object.keys(RD[referenceType]).map((referenceLinks, linkIndex) => (
                                                            <Row key={referenceLinks}>
                                                                <a target="_blank" href={RD[referenceType][referenceLinks].link} className="ReferenceLinksStyle"
                                                                    style={{ fontSize: '15px' }}
                                                                >{referenceLinks}</a>
                                                            </Row>
                                                        ))}
                                                    </Col>

                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                </div>


                            </Col>
                        </Row>

                        <Row style={{ margin: '0' }}>
                            <hr className='ReferenceBarHR' />
                            <Col style={{ padding: '0' }} md={8}>
                                <span className="DescriptionStyle">{`© 2024 Japan Showcase. I have no rights.`}</span>
                            </Col>
                            <Col md={3}>
                                <Row >
                                    {[`Biscuits`, `Publicity`, `Illegal`].map((extra, index) => (
                                        <Col key={extra} style={{ display: 'flex', justifyContent: 'end' }}>
                                            <span className="DescriptionStyle" style={{
                                                textDecoration: 'underline', marginTop: `${more768px ? "0" : "15px"}`
                                            }}>{extra}</span>

                                        </Col>
                                    ))}
                                </Row>
                            </Col>

                            <Col md={1}>
                            </Col>

                        </Row>
                        <span className="DescriptionStyle" style={{
                            display: 'inline-block', maxWidth: `${more768px ? "50%" : "100%"}`,
                            marginTop: `${more768px ? "25px" : "0px"}`
                        }}>Information from your device is used to personalize your ad experience.

                            Ur data finna be stolen, its so over.</span>
                    </Col>
                </Container>
            </Container >
        </>
    )
}