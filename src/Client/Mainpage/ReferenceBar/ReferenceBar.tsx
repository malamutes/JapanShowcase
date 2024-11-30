import { Container, Row, Col, Form, Button, Accordion } from 'react-bootstrap'
import './ReferenceBar.css'
import { ReferenceData } from '../Data/ReferenceLinks'
import { faInstagram, faFacebook, faLinkedin, faTiktok, faPinterest, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import MatchmediaQuery from '../../CommonLogic(NON-UI)/MatchmediaQuery';

const iconMap: { [key: string]: any } = {
    instagram: faInstagram,
    facebook: faFacebook,
    linkedIn: faLinkedin,
    tikTok: faTiktok,
    pinterest: faPinterest,
    youTube: faYoutube,
    twitter: faXTwitter,
};


export default function ReferenceBar() {
    const RD = ReferenceData;

    const [more768px, setMore768px] = useState(false);
    const checkMore768px = MatchmediaQuery({ size: 768, more: more768px, setMore: setMore768px });

    return (
        <>
            <Container className="ReferenceBarContainer" style={{ backgroundColor: 'rgb(25, 25, 25)', color: 'white' }} fluid id="ReferenceBar">
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
                                    <span className="EmailInputText">Give me your email.</span>
                                    <Row>
                                        <Form.Control
                                            type="text"
                                            id="inputPassword5"
                                            aria-describedby="passwordHelpBlock"
                                            placeholder='Email'
                                            className="FormEmailInput"
                                            style={{
                                                width: '40%'
                                            }}
                                        />

                                        <Button variant="danger"
                                            className="FormEmailInput"
                                            style={{
                                                width: '25%', padding: '0'
                                            }} ><span className='EmailInputText'>GIVE</span></Button>
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
                                <Row >
                                    {more768px ? (Object.keys(RD).map((referenceType, typeIndex) => (
                                        <Col key={referenceType} className="ReferenceLinksColStyle" >
                                            <h6 className="ReferenceTitle" >{referenceType}</h6>
                                            {Object.keys(RD[referenceType]).map((referenceLinks, linkIndex) => (
                                                <Row key={referenceLinks} style={{}}>
                                                    <a href={RD[referenceType][referenceLinks].link} className="ReferenceLinksStyle">{referenceLinks}</a>
                                                </Row>
                                            ))}
                                        </Col>
                                    ))) :
                                        (<Accordion style={{ marginBottom: '25px' }} className='CustomAccordian'>
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
                                        </Accordion>)}

                                </Row>

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