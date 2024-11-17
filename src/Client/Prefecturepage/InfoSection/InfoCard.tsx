import { Card, Row, Col, Image } from "react-bootstrap"

export interface InfoCardProps {
    title: string,
    text: string,
    subtitle: string,
    margin: string,
    image: string,
    style: React.CSSProperties
}

export default function InfoCard(props: InfoCardProps) {
    return (
        <>
            <Col style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", margin: props.margin, aspectRatio: 'auto' }}>
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