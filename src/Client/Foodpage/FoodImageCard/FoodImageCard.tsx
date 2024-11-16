import { Col, Card, Row, Image } from "react-bootstrap"

export default function FoodImageCard() {
    return (
        <>
            <Row style={{ justifyContent: 'center', margin: '0 auto' }}>
                <Col xs={4} style={{
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'end', padding: '0'
                }}>
                    <Image src="holder.js/400x300" />
                </Col>

                <Col xs={8} style={{
                    backgroundColor: 'lightgray',
                    display: 'flex', flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <div style={{ marginLeft: '50px' }}>
                        <p> <h4>Lorem Ipsum Dolor Sit Amet</h4></p>

                        <p>SPICE, THICKNESS, STRENGTH WITH STARS?</p>

                        <p>   <h5>Sed Ut Perspiciatis Unde Omnis</h5></p>

                        <h6 style={{ maxWidth: '90%' }}>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.</h6>
                    </div>


                </Col>
            </Row>
        </>
    )
}