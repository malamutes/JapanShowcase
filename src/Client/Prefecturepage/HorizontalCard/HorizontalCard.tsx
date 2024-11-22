import { useContext } from "react";
import { Col, Row, Card, Image } from "react-bootstrap";
import { screenWidthBreakpointsContext } from "../../../main";


export default function HorizontalCard() {

    const screenWidthBreakpoints = useContext(screenWidthBreakpointsContext);


    return (
        <>
            {screenWidthBreakpoints['more992px'] ?
                (
                    <Col style={{ display: 'flex', justifyContent: 'center' }}>
                        <Row >
                            <Card style={{ border: 'none', }}>
                                <Card.Img src="https://placehold.co/1400x500" alt="Card image"
                                    style={{ borderRadius: '25px', maxWidth: '100%', height: 'auto' }} />
                                <Card.ImgOverlay>
                                    <Row style={{ margin: '0', height: '100%', display: 'flex', alignItems: 'center', }}>
                                        <Col xs={4}>
                                            <Row >
                                                <Card.Title><p>Card title</p></Card.Title>
                                                <Card.Text>
                                                    <p style={{ fontSize: '15px' }}>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Cras suscipit elit vel sapien luctus, at fermentum justo hendrerit.
                                                        Sed ac sem facilisis, sollicitudin nunc ut, laoreet eros.
                                                    </p>

                                                </Card.Text>
                                                <blockquote className="blockquote mb-0">
                                                    <p style={{ fontSize: '15px' }}>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                                        posuere erat a ante.
                                                    </p>
                                                    <footer className="blockquote-footer" style={{ fontSize: '15px' }}>
                                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                                    </footer>
                                                </blockquote>
                                            </Row>
                                        </Col>

                                        <Col xs={3} >

                                        </Col>

                                        <Col xs={5} >
                                            <Row style={{ margin: '0', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                                <Image src="https://placehold.co/225x300/black/white"
                                                    style={{ borderRadius: '50px', maxWidth: '50%', height: 'auto', paddingLeft: '0' }} />
                                                <Image src="https://placehold.co/225x300/black/white"
                                                    style={{ borderRadius: '50px', maxWidth: '50%', height: 'auto', paddingLeft: '0' }} />
                                            </Row>

                                        </Col>
                                    </Row>
                                </Card.ImgOverlay>
                            </Card>
                        </Row>
                    </Col>
                ) :
                (
                    <Col >
                        <Row>
                            <Image
                                src="https://placehold.co/1400x500"
                                alt="Card image"
                                style={{ borderRadius: '25px', maxWidth: '100%', height: 'auto' }}
                            />
                        </Row>

                        <Row style={{ marginTop: '25px' }}>
                            <Col xs={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <p>Card title</p>
                                <p style={{ fontSize: '15px' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Cras suscipit elit vel sapien luctus, at fermentum justo hendrerit.
                                    Sed ac sem facilisis, sollicitudin nunc ut, laoreet eros.
                                </p>



                            </Col>

                            <Col xs={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Row >
                                    <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Image src="https://placehold.co/225x300/black/white"
                                            style={{
                                                borderRadius: '25px', maxWidth: '100px', height: 'auto', paddingLeft: '0',
                                                paddingTop: '2.5px', paddingBottom: '2.5px'

                                            }} />
                                    </Col>

                                    <Col style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Image src="https://placehold.co/225x300/black/white"
                                            style={{
                                                borderRadius: '25px', maxWidth: '100px', height: 'auto', paddingLeft: '0',
                                                paddingTop: '2.5px', paddingBottom: '2.5px'
                                            }} />
                                    </Col>
                                </Row>

                            </Col>

                        </Row >
                        <Row style={{ marginTop: '10px' }}>
                            <blockquote className="blockquote mb-0">
                                <p style={{ fontSize: '15px' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                    posuere erat a ante.
                                </p>
                                <footer className="blockquote-footer" style={{ fontSize: '15px' }}>
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                            </blockquote>
                        </Row>


                    </Col >
                )
            }
        </>
    )
}