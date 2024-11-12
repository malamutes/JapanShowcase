import { Container, Row, Col } from 'react-bootstrap'
import './ReferenceBar.css'
import { ReferenceData } from '../Data/ReferenceLinks'
import { faInstagram, faFacebook, faLinkedin, faTiktok, faPinterest, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconMap: { [key: string]: any } = {
    Instagram: faInstagram,
    Facebook: faFacebook,
    LinkedIn: faLinkedin,
    TikTok: faTiktok,
    Pinterest: faPinterest,
    YouTube: faYoutube,
    Twitter: faXTwitter,
};


export default function ReferenceBar() {
    const RD = ReferenceData;

    return (
        <>
            <Container style={{ backgroundColor: 'rgb(25, 25, 25)' }} fluid>
                <Container style={{ width: '80%', paddingTop: '2cqw' }}>
                    <Row >
                        {Object.keys(RD).map((reference, index) => (
                            <Col key={index} xs={12} sm={6} lg={3} >
                                <h6 style={{ textAlign: 'center', marginBottom: '1cqw', textDecoration: 'underline' }}>{reference}</h6>
                                <Row style={{ justifyContent: 'center', marginBottom: '2.5cqw' }}>
                                    {Object.keys(RD[reference]).map((referenceExample, indexExample) => (
                                        reference === "References" ? (
                                            <Col key={indexExample} style={{ display: 'flex', justifyContent: 'center' }}>
                                                <a target="_blank" href={RD[reference][referenceExample].link} className="ReferenceAnchor">
                                                    {RD[reference][referenceExample].title}
                                                </a>
                                            </Col>
                                        ) : reference === "Socials" ? (
                                            <Col key={indexExample} xs={4} style={{ display: 'flex', justifyContent: 'center' }}>
                                                <a target="_blank" href={RD[reference][referenceExample].link} className="SocialAnchor">
                                                    <FontAwesomeIcon icon={iconMap[RD[reference][referenceExample].title]} size="2x" />
                                                </a>
                                            </Col>
                                        ) : reference === "Contact" ? (

                                            <Col key={indexExample} xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                                <a target="_blank" href={RD[reference][referenceExample].link} className="ReferenceAnchor">
                                                    {RD[reference][referenceExample].title}
                                                </a>
                                            </Col>
                                        ) : (
                                            //for quick nav since its the last one
                                            <Col key={indexExample} style={{ display: 'flex', justifyContent: 'center' }}>
                                                <a href={RD[reference][referenceExample].link} className="ReferenceAnchor">
                                                    {RD[reference][referenceExample].title}
                                                </a>
                                            </Col>
                                        )
                                    ))}
                                </Row>

                            </Col>
                        ))}
                    </Row>

                </Container>
            </Container >
        </>
    )
}