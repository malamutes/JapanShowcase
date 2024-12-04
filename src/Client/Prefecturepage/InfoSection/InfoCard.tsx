import { Card, Row, Col, Image } from "react-bootstrap"
import './InfoCard.css'
import React from "react"
import { LightThemeContext } from "../../../ThemeContext";
import { useContext } from "react";

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
    const { light } = useContext(LightThemeContext);
    return (
        <>
            <Col style={{
                boxShadow: `0 0 25px ${light ? "rgba(0, 0, 0, 0.5)" : "rgba(200, 200, 200, 0.75)"}`, margin: props.margin, aspectRatio: 'auto',
                '--transition-duration': props.timing, '--transition-timing-func': props.transitionTimingFunc,
            } as React.CSSProperties}
                className={`InfoCardDefault ${props.onScroll ? 'InfoCardDefaultShow' : ""}`}
                onClick={props.onClick}>
                <Row style={{
                    display: 'grid', placeItems: 'center', margin: '0', padding: '0',
                    backgroundColor: `${light ? "white" : "grey"}`
                }}>
                    <Image src={props.image} style={{ padding: '0', ...props.style }} />
                </Row>

                <Row className="g-0">
                    <Card style={{
                        border: 'none', margin: 'auto', textAlign: 'center',
                        color: `${light ? "black" : "white"}`, backgroundColor: `${light ? "white" : "black"}`
                    }}>
                        <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Subtitle style={{ fontStyle: 'italic', margin: '4px 0 4px 0' }}>{props.subtitle}</Card.Subtitle>
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