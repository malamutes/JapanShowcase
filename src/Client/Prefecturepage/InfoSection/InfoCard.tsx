import { Card, Row, Col, Image } from "react-bootstrap"
import './InfoCard.css'
import React from "react"

export interface InfoCardProps {
    title: string,
    text: string,
    subtitle: string,
    margin: string,
    image: string,
    style: React.CSSProperties,
    onScroll: boolean,
    timing: string,
    transitionTimingFunc: string,
    onClick?: () => void //optional
}

export default function InfoCard(props: InfoCardProps) {
    return (
        <>
            <Col style={{
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", margin: props.margin, aspectRatio: 'auto',
                '--transition-duration': props.timing, '--transition-timing-func': props.transitionTimingFunc,
            } as React.CSSProperties}
                className={`InfoCardDefault ${props.onScroll ? 'InfoCardDefaultShow' : ""}`}
                onClick={props.onClick}>
                <Row style={{ display: 'grid', placeItems: 'center', margin: '0', padding: '0' }}>
                    <Image src={props.image} style={{ padding: '0', ...props.style }} />
                </Row>

                <Row className="g-0">
                    <Card style={{ border: 'none', margin: 'auto', textAlign: 'center' }}>
                        <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
                            <Card.Text>
                                {props.text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Col>

        </>
    )
}