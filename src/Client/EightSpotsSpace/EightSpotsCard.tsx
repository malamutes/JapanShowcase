import { Container, Row, Col } from "react-bootstrap";

interface EightSpotsCardProps {
    title: string,
    desc: string,
    img: string
}

export default function EightSpotsCard(props: EightSpotsCardProps) {
    return (
        <>
            <Container style={{ margin: '2.5cqw auto' }}>
                <Row style={{
                    aspectRatio: '5', borderRadius: '15px',
                    maxWidth: '750px', width: '50cqw',
                    overflow: 'hidden'
                }}>
                    <Col xs={8} style={{
                        backgroundColor: 'rgb(24,24,24)', display: 'flex',
                        flexDirection: 'column', alignItems: 'center',

                    }}>
                        <Row style={{

                        }}>
                            <span style={{ fontWeight: '700', fontSize: '1.25cqw', margin: '1.25cqw' }}>{props.title}</span >
                        </Row>

                        <Row style={{ maxWidth: '75%', textAlign: 'center' }}>
                            <span style={{ fontSize: '0.6cqw' }}>{props.desc}</span>
                        </Row>

                    </Col>

                    <Col xs={4} style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent: 'center',
                        overflow: 'hidden'

                    }}>

                        <img alt="Image" src={props.img}
                            style={{
                                width: '110%',
                                height: 'auto',
                                transform: 'scale(1.05)',
                                transformOrigin: 'center'
                            }} />
                    </Col>

                </Row >
            </Container >
        </>
    )
}