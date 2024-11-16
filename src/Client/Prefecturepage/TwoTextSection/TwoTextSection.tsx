import { Container, Row, Col, Image } from "react-bootstrap";

export default function TwoTextSection() {
    return (
        <>
            <Container style={{ marginTop: '100px', }}>
                <Col>
                    <Row>
                        <Col style={{
                            display: 'flex',
                            flexDirection: 'column', alignItems: 'end', padding: '0',
                        }}>
                            <Image fluid src={`holder.js/500x500?text=InfoIcon`} />
                        </Col>

                        <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <p style={{ marginLeft: '50px', lineHeight: '2', maxWidth: '75%' }}>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Sed euismod velit ac neque tincidunt, et ultricies lorem aliquet.
                                Donec scelerisque, ipsum eget vehicula auctor, libero eros ultricies felis,
                                vel auctor sapien felis non neque. Aliquam erat volutpat.

                            </p>

                            <p style={{ marginLeft: '50px', lineHeight: '2', maxWidth: '75%' }}>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Sed euismod velit ac neque tincidunt, et ultricies lorem aliquet.
                                Donec scelerisque, ipsum eget vehicula auctor, libero eros ultricies felis,
                                vel auctor sapien felis non neque. Aliquam erat volutpat.



                            </p>
                        </Col>


                    </Row>

                    <Row>
                        <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'end' }}>
                            <p style={{ marginRight: '50px', lineHeight: '2', textAlign: 'end', maxWidth: '75%' }}> Curabitur interdum scelerisque augue, a consequat libero suscipit vitae.
                                Fusce luctus ante non elit facilisis, u
                                t tincidunt risus viverra. Ut nec leo at nunc malesuada scelerisque.
                                Donec auctor diam in arcu malesuada, ac lacinia metus volutpat.
                                Vestibulum eu ante mauris. .</p>

                            <p style={{ marginRight: '50px', lineHeight: '2', textAlign: 'end', maxWidth: '75%' }}> Curabitur interdum scelerisque augue, a consequat libero suscipit vitae.
                                Fusce luctus ante non elit facilisis, u
                                t tincidunt risus viverra. Ut nec leo at nunc malesuada scelerisque.
                                Donec auctor diam in arcu malesuada, ac lacinia metus volutpat.
                                Vestibulum eu ante mauris. .</p>
                        </Col>

                        <Col style={{ padding: '0' }}>
                            <Image fluid src={`holder.js/500x500?text=InfoIcon`} />
                        </Col>

                    </Row>
                </Col>
            </Container>
        </>
    )
}