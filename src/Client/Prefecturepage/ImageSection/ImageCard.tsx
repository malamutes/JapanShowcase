import { Col, Card, Image } from "react-bootstrap"
import './ImageSection.css'
import { useState } from "react"

export default function TripleImageCard() {
    const [hover, SetHover] = useState(false);

    return (
        <>
            <Col style={{
                position: 'relative', maxWidth: '400px',
                display: 'flex', justifyContent: 'center', overflowY: 'hidden', borderRadius: '50px',
                transition: "box-shadow 0.3s ease",
                boxShadow: `10px 10px 15px rgba(0, 0, 0, ${hover ? 0.5 : 0})`
            }}>
                <Image fluid src={`https://placehold.co/400x600`}
                    onMouseEnter={() => SetHover(true)} onMouseLeave={() => SetHover(false)}
                    className={`ImageSectionImageStyle ${hover ? "ImageSectionImageStyleShow" : ""}`} />
                <Card className={`text-center ImageSectionCardStyle ${hover ? "ImageSectionCardStyleShow" : ""}`} >
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


            </Col >
        </>
    )
}
