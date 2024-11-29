import { Row, Col, Card } from "react-bootstrap";
import './FoodSelector.css'

interface FoodSelectorCardProps {
    onClick: (currentItem: number) => void,
    item: number[],
    onScroll: boolean
}

export default function FoodSelectorCard(props: FoodSelectorCardProps) {

    return (
        <>
            <Row className={`FoodSelectorCardDefault ${props.onScroll ? "FoodSelectorCardShow" : ""}`}>
                <Col lg={5} style={{ display: 'grid', placeContent: 'center', textAlign: 'center' }}>
                    <div style={{ maxWidth: '95%', margin: '15px auto', padding: '5px' }} className="GlassmorphismEffect">

                        <p>Lorem Ipsum</p>

                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco.
                        </p>
                    </div>

                </Col>

                <Col lg={7}>
                    <Row style={{ height: '100%' }}>
                        {props.item.map((element) => (
                            <Col key={element} xs={6} sm={3} style={{
                                display: 'flex', flexDirection: 'column', justifyContent: 'center',
                                alignItems: 'center', marginTop: '15px', marginBottom: '25px'
                            }}>
                                <Card style={{
                                    margin: '0', textAlign: 'center', cursor: 'pointer',
                                    backgroundColor: 'transparent', border: 'none'
                                }} onClick={() => props.onClick(element)}>
                                    <Card.Img variant="top" src="https://placehold.co/100x100"
                                        style={{
                                            maxWidth: '100%', height: 'auto',
                                            transition: 'transform 0.5s ease', borderRadius: '15px'
                                        }} className="ImageScale" />
                                </Card>
                            </Col>
                        ))}
                    </Row>

                </Col >

            </Row >
        </>
    )
}