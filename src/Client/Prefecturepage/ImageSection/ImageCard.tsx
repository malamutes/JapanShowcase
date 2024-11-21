import { Container, Row, Col, Card, Image } from "react-bootstrap"
import './ImageSection.css'
import { useState } from "react"

export default function TripleImageCard() {
    const [hover, SetHover] = useState(false);

    return (
        <>
            <Col style={{
                position: 'relative', maxWidth: '400px',
                display: 'flex', justifyContent: 'center',
            }}>
                <Image fluid src={`holder.js/400x600?text=InfoIcon`} style={{ borderRadius: '50px ' }}
                    onMouseEnter={() => SetHover(true)} onMouseLeave={() => SetHover(false)} />
                {hover ?
                    (
                        <Card className="text-center" style={{
                            position: 'absolute', left: '0', bottom: '0%',
                            width: '100%', borderRadius: '0px 0px 50px 50px', pointerEvents: 'none'
                        }}>
                            <Card.Header style={{ backgroundColor: 'transparent' }}>Featured</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text className="DescStyle">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed ut purus nec orci ullamcorper aliquet a ac tortor.
                                    Integer feugiat, risus vel cursus dictum, lacus elit convallis nunc,
                                    nec suscipit magna lorem a urna. Ut quis nisi non lorem fringilla luctus.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    )
                    : (
                        null
                    )}

            </Col>
        </>
    )
}
