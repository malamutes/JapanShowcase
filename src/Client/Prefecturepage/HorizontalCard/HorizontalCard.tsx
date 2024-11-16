import { Col, Row, Card, Image } from "react-bootstrap";

interface HorizontalCardProps {
    switch: boolean
}

export default function HorizontalCard(props: HorizontalCardProps) {
    return (
        <>
            <Col style={{ display: 'flex', justifyContent: 'center' }}>
                <Row >
                    <Card style={{ border: 'none', }}>
                        <Card.Img src="holder.js/1200x400" alt="Card image" style={{ borderRadius: '25px' }} />
                        <Card.ImgOverlay>
                            <Row style={{ margin: '0', height: '100%', display: 'flex', alignItems: 'center' }}>


                                <Col xs={4} >
                                    <Row >
                                        <Card.Title><p>Card title</p></Card.Title>
                                        <Card.Text>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Cras suscipit elit vel sapien luctus, at fermentum justo hendrerit.
                                                Sed ac sem facilisis, sollicitudin nunc ut, laoreet eros.
                                            </p>

                                        </Card.Text>
                                        <blockquote className="blockquote mb-0">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                                posuere erat a ante.
                                            </p>
                                            <footer className="blockquote-footer">
                                                Someone famous in <cite title="Source Title">Source Title</cite>
                                            </footer>
                                        </blockquote>
                                    </Row>

                                </Col>


                                <Col xs={3}>
                                </Col>

                                <Col xs={5} >
                                    <Row style={{ margin: '0', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <Image src="holder.js/225x300?bg=000000" style={{ borderRadius: '50px' }} />
                                        <Image src="holder.js/225x300?bg=000000" style={{ borderRadius: '50px' }} />
                                    </Row>

                                </Col>




                            </Row>

                        </Card.ImgOverlay>
                    </Card>
                </Row>
            </Col>


        </>
    )
}