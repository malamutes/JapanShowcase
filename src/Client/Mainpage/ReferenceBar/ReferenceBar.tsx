import { Container, Row, Col, Form, Button, Accordion, Toast } from 'react-bootstrap'
import './ReferenceBar.css'
import { ReferenceData } from '../Data/ReferenceLinks'
import { faInstagram, faFacebook, faLinkedin, faTiktok, faPinterest, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import MatchmediaQuery from '../../CommonLogic(NON-UI)/MatchmediaQuery';
import '../../Prefecturepage/HorizontalCard/HorizontalCard.css'
import { useNavigate } from 'react-router-dom';

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

    const [showToastCredentials, setShowToastCredentials] = useState(false);
    const [showToastAbout, setShowToastAbout] = useState(false);
    const [showToastLiterature, setShowToastLiterature] = useState(false);

    return (
        <>
            <Toast show={showToastCredentials} onClose={() => {
                setShowToastCredentials(false);
            }}
                style={{
                    position: 'fixed', top: '50vh', left: '50vw',
                    transform: 'translate(-50%, -50%)', zIndex: 5,
                    width: '80vw', // For small screens
                    minWidth: '200px', // Ensures it's not too small
                }}>
                <Toast.Header style={{ boxShadow: '0px 0px 5px rgba(0,0,0,0.5)' }}>
                    <strong className="me-auto" style={{ fontSize: '15px' }}>Credentials</strong>
                </Toast.Header>
                <Toast.Body style={{ color: 'black', backgroundColor: 'white' }}>
                    <p>
                        <a href='https://drive.google.com/file/d/1klAWXehLNdKPer9q0E71ipcYmX24JpwZ/view?usp=sharing' target='_blank'>
                            <span style={{ fontWeight: '700' }}>Resume</span> <br />
                        </a>
                    </p>

                    <p>
                        <a href='https://drive.google.com/file/d/11AqSF4j4__v57n-ruYofhacIRA7s6jjV/view?usp=sharing' target='_blank'>
                            <span style={{ fontWeight: '700' }}>Academic Transcript</span> <br />
                        </a>
                    </p>

                    <p>
                        <a href='https://www.artstation.com/malamoots' target='_blank'>
                            <span style={{ fontWeight: '700' }}>3D Art</span> <br />
                        </a>
                    </p>
                </Toast.Body>
            </Toast>

            <Toast show={showToastAbout} onClose={() => {
                setShowToastAbout(false);
            }}
                style={{
                    position: 'fixed', top: '50vh', left: '50vw',
                    transform: 'translate(-50%, -50%)', zIndex: 5,
                    width: '80vw', // For small screens
                    minWidth: '200px', // Ensures it's not too small
                }}>
                <Toast.Header style={{ boxShadow: '0px 0px 5px rgba(0,0,0,0.5)' }}>
                    <strong className="me-auto" style={{ fontSize: '15px' }}>About Me</strong>
                </Toast.Header>
                <Toast.Body style={{ color: 'black', backgroundColor: 'white' }}>
                    <p style={{ marginBottom: '10px' }}>
                        Hi! My name is Paul Van. I am currently in my second year studying
                        Advanced Science in Computing at Curtin University.

                    </p>

                    <p>
                        I am passionate about programming, and I am also delving into web development
                        as I grow my skills.
                    </p>

                    <p>
                        In my free time, I enjoy 3D art sculpting as a hobby,
                        where I bring my creative ideas to life. I also have a knack for making savory dishes,
                        which helps me balance out my technical pursuits.
                    </p>

                    <p style={{ marginBottom: '10px', color: 'grey', fontSize: '10px' }}>
                        Psst, that was written by AI, I'm terrible at writing introductions,
                        the info is correct but you may notice the language is a bit...rigid??
                    </p>
                </Toast.Body>
            </Toast>

            <Toast show={showToastLiterature} onClose={() => {
                setShowToastLiterature(false);
            }}
                style={{
                    position: 'fixed',
                    top: '50vh',
                    left: '50vw',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 5,
                    width: '80vw', // For small screens
                    minWidth: '200px', // Ensures it's not too small
                }}>
                <Toast.Header style={{ boxShadow: '0px 0px 5px rgba(0,0,0,0.5)' }}>
                    <strong className="me-auto" style={{ fontSize: '15px' }}>Literature I Strongly Recommend</strong>
                </Toast.Header>
                <Toast.Body style={{ color: 'black', backgroundColor: 'white' }}>
                    <p style={{ marginBottom: '15px' }}>
                        Here are three books I consider must-reads. These works have deeply influenced my perspective on life, morality, and the human condition:
                    </p>
                    <ul style={{ paddingLeft: '30px', marginBottom: '10px', paddingRight: '30px' }}>
                        <li>
                            <strong>Crime and Punishment</strong> by Fyodor Dostoevsky
                            A gripping exploration of morality, guilt, and redemption through the life of Raskolnikov.
                        </li>
                        <li>
                            <strong>The Grand Inquisitor</strong> (from *The Brothers Karamazov*) by Fyodor Dostoevsky
                            A profound philosophical parable questioning faith, free will, and human nature.
                        </li>
                        <li>
                            <strong>The Death of Ivan Ilyich</strong> by Leo Tolstoy
                            A powerful narrative about the inevitability of death and the search for a meaningful life.
                        </li>
                    </ul>
                    <p style={{ fontStyle: 'italic', color: 'grey', fontSize: '10px' }}>
                        These books have genuinely illuminated the human condition and the hidden evil within all of us.
                        It's also written by AI as before, but seriously, read them, they are great works!
                        Ah, and of course, the Bible too.
                    </p>
                </Toast.Body>
            </Toast>


            <Container className="ReferenceBarContainer" style={{
                backgroundColor: 'rgb(25, 25, 25)', color: 'white',
                borderTop: '0.1px solid white'
            }} fluid id="Site map">
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
                                    {["facebook", "twitter", "instagram", "youTube", "linkedIn", "tikTok"].map((social) => (
                                        <Col key={social} xs={2}>
                                            <a target="_blank" href={`https://${social}.com`} aria-label={social}>
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
                                        {Object.keys(RD).map((referenceType) => (
                                            <Col key={referenceType} className="ReferenceLinksColStyle">
                                                <h6 className="ReferenceTitle" >{referenceType}</h6>

                                                {Object.keys(RD[referenceType]).map((referenceLinks) => {
                                                    const navigate = useNavigate();

                                                    // Check if the reference type is "IconReferences" or "ImageReferences"
                                                    if (["IconReferences", "ImageReferences"].includes(referenceType)) {
                                                        return (
                                                            <Row key={referenceLinks}>
                                                                <a
                                                                    target="_blank"
                                                                    href={RD[referenceType][referenceLinks].link}
                                                                    className="ReferenceLinksStyle"
                                                                >
                                                                    {referenceLinks}
                                                                </a>
                                                            </Row>
                                                        );
                                                    } else {
                                                        return (
                                                            <Row key={referenceLinks}>
                                                                <span className="ReferenceLinksStyle"
                                                                    style={{ cursor: 'pointer' }}
                                                                    onClick={() => navigate(`${RD[referenceType][referenceLinks].link}`)}>
                                                                    {referenceLinks}
                                                                </span>
                                                            </Row>
                                                        );
                                                    }
                                                })}
                                            </Col>
                                        ))}
                                    </Row>
                                </div>

                                <div className='SmallScreenBottomBar'>
                                    <Accordion style={{ marginBottom: '25px', }} className='CustomAccordian'>
                                        {Object.keys(RD).map((referenceType, typeIndex) => (
                                            <Accordion.Item eventKey={`${typeIndex}`} key={typeIndex}>
                                                <Accordion.Header style={{ color: 'white !important' }}>{referenceType}</Accordion.Header>
                                                <Accordion.Body style={{ backgroundColor: 'black', color: 'whitesmoke' }}>
                                                    <Col>
                                                        {Object.keys(RD[referenceType]).map((referenceLinks) => (
                                                            <Row key={referenceLinks}>
                                                                <a target={["IconReferences", "ImageReferences"].includes(referenceType) ? "_blank" : ""}
                                                                    href={RD[referenceType][referenceLinks].link} className="ReferenceLinksStyle"
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
                                    <Col style={{ display: 'flex', justifyContent: 'end' }}>
                                        <span className="DescriptionStyle" style={{ marginTop: `${checkMore768px ? "0" : "15px"}` }}
                                            onClick={() => setShowToastAbout(true)}>About</span>
                                    </Col>

                                    <Col style={{ display: 'flex', justifyContent: 'end' }}>
                                        <span className="DescriptionStyle" style={{ marginTop: `${checkMore768px ? "0" : "15px"}` }}
                                            onClick={() => setShowToastCredentials(true)}>Credentials</span>
                                    </Col>


                                    <Col style={{ display: 'flex', justifyContent: 'end' }}>
                                        <span className="DescriptionStyle" style={{ marginTop: `${checkMore768px ? "0" : "15px"}` }}
                                            onClick={() => setShowToastLiterature(true)}>Literature</span>
                                    </Col>

                                </Row>
                            </Col>

                            <Col md={1}>
                            </Col>

                        </Row>
                        <span className="DescriptionStyle" style={{
                            display: 'inline-block', maxWidth: `${checkMore768px ? "50%" : "100%"}`,
                            marginTop: `${checkMore768px ? "25px" : "0px"}`
                        }}>Information from your device is used to personalize your ad experience.
                            Your data is safe with me. Worry not.</span>
                    </Col>
                </Container>
            </Container >
        </>
    )
}