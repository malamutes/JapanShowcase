import './ReferenceBar.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function TopBar() {
    return (
        <>
            <Container style={{
                position: 'absolute', zIndex: '10',
                backgroundColor: 'red', height: '7.5%'
            }} fluid>
                <Row>
                    <Col xs={1} style={{ backgroundColor: 'blue' }}>
                        HELLO WORLd
                    </Col>

                    <Col xs={7} style={{ backgroundColor: 'green' }}>

                    </Col>

                    <Col xs={2} style={{ backgroundColor: 'yellow' }}>

                    </Col>

                    <Col xs={2} style={{ backgroundColor: 'purple' }}>

                    </Col>

                </Row>

            </Container>

        </>
    )
}