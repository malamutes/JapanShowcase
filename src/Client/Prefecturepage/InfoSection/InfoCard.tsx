import { Card, Row, Col, Image } from "react-bootstrap"

export interface InfoCardProps {
    title: string,
    text: string,
    subtitle: string,
    margin: string
}

export default function InfoCard(props: InfoCardProps) {
    return (
        <>
            <Col style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", margin: props.margin, aspectRatio: 'auto' }}>
                <Row style={{ display: 'grid', placeItems: 'center' }}>
                    <Image fluid src={`holder.js/150x150?text=InfoIcon`} style={{ clipPath: "circle(40%)" }} />
                </Row>

                <Row>
                    <Card style={{ border: 'none', maxWidth: '90%', margin: 'auto', textAlign: 'center' }}>
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