import { Container, Row, Col } from "react-bootstrap";
import './EightSpotsCard.css'
import React from "react";


interface EightSpotsCardProps {
    title: string,
    desc: string,
    img: string,
    colour: string
}

export default function EightSpotsCard(props: EightSpotsCardProps) {
    return (
        <>
            <Container style={{ margin: '2.5cqw auto', display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
                <Row style={{
                    aspectRatio: '5', borderRadius: '15px',
                    maxWidth: '650px',
                    overflow: 'hidden', '--colour': props.colour
                } as React.CSSProperties} className="EightSpotCard">
                    <Col xs={8} style={{
                        backgroundColor: 'rgb(24,24,24)', display: 'flex',
                        flexDirection: 'column', alignItems: 'center'

                    }}>
                        <Row style={{ justifyContent: 'center' }}>
                            <span style={{ textAlign: 'center', fontWeight: '700', fontSize: '1cqw', marginTop: '0.5cqw', marginBottom: '0.5cqw' }}>{props.title}</span >
                            <hr className="Line" />
                        </Row>

                        <Row style={{ maxWidth: '75%', textAlign: 'center' }}>
                            <span style={{ fontSize: '0.55cqw' }}>{props.desc}</span>
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