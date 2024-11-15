import { Container, Row, Col, Image, Card } from "react-bootstrap";
import './EightSpotsCard.css'
import React from "react";


interface EightSpotsCardProps {
    title: string,
    desc: string,
    img: string,
    colour: string,
    scrollPast: boolean,
    smallScreen: boolean,
    onclick: () => void
}

export default function EightSpotsCard(props: EightSpotsCardProps) {

    /*  */
    return (
        <>
            <Container className={`EightSpotCardContainer `} onClick={props.onclick}>
                <Row className={`EightSpotCard `} style={{
                    '--colour': props.colour, backgroundColor: props.colour
                } as React.CSSProperties}>
                    <Row style={{ padding: '0' }} className={`EightSpotHide
                     ${(props.scrollPast || props.smallScreen) ? "EightSpotShow" : ""}`}>
                        <Col xs={8} style={{
                            backgroundColor: 'rgb(24,24,24)', display: 'flex',
                            alignItems: 'center', padding: '0', justifyContent: 'center'

                        }} >
                            <Card style={{
                                backgroundColor: 'transparent',
                                color: 'white', textAlign: 'center'
                            }}>
                                <Card.Body className="CardBody">
                                    <Card.Title className="TitleStyle">{props.title}</Card.Title>
                                    <hr className="Line" />
                                    <Card.Text className="DescStyle">
                                        {props.desc}
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col xs={4} style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignContent: 'center',
                            overflow: 'hidden',

                        }}>

                            <Image alt="Image" src={props.img}
                                className="CityImage" />
                        </Col>
                    </Row >
                </Row>
            </Container >
        </>
    )
}