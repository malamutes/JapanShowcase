import { Container, Row, Col, Image } from "react-bootstrap";
import './TwoTextSection.css'

export default function TwoTextSection() {

    return (
        <>
            <Container style={{ marginTop: '100px' }}>
                <Col >
                    <Row >
                        <Col lg={6}
                            className="UpperCardCol">
                            <Image style={{
                                maxWidth: '100%', aspectRatio: '1', height: 'auto',
                                padding: '10px'
                            }}
                                fluid src={`https://placehold.co/600x600`} />
                        </Col>

                        <Col lg={6}
                            className="UpperCard">
                            <div className="DescStyle">
                                <p >Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Sed euismod velit ac neque tincidunt, et ultricies lorem aliquet.
                                    Donec scelerisque, ipsum eget vehicula auctor, libero eros ultricies felis,
                                    vel auctor sapien felis non neque. Aliquam erat volutpat.
                                </p>

                                <p >Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Sed euismod velit ac neque tincidunt, et ultricies lorem aliquet.
                                    Donec scelerisque, ipsum eget vehicula auctor, libero eros ultricies felis,
                                    vel auctor sapien felis non neque. Aliquam erat volutpat.
                                </p>
                                <hr style={{ border: '1px solid black', opacity: '1' }} />
                            </div>

                        </Col>


                    </Row>

                    <Row>
                        <Col lg={6}
                            className="LowerCard"  >
                            <div className="DescStyle">
                                <hr style={{ border: '1px solid black', opacity: '1' }} />
                                <p > Curabitur interdum scelerisque augue, a consequat libero suscipit vitae.
                                    Fusce luctus ante non elit facilisis, u
                                    t tincidunt risus viverra. Ut nec leo at nunc malesuada scelerisque.
                                    Donec auctor diam in arcu malesuada, ac lacinia metus volutpat.
                                    Vestibulum eu ante mauris. .</p>

                                <p > Curabitur interdum scelerisque augue, a consequat libero suscipit vitae.
                                    Fusce luctus ante non elit facilisis, u
                                    t tincidunt risus viverra. Ut nec leo at nunc malesuada scelerisque.
                                    Donec auctor diam in arcu malesuada, ac lacinia metus volutpat.
                                    Vestibulum eu ante mauris. .</p>


                            </div>

                        </Col>

                        <Col lg={6}
                            className="LowerCardCol">
                            <Image fluid src={`https://placehold.co/600x600`} style={{
                                maxWidth: '100%', aspectRatio: '1',
                                height: 'auto',
                                padding: '10px'
                            }} />
                        </Col>

                    </Row>
                </Col>
            </Container>
        </>
    )
}