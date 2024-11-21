//maybe re-use navigation from navigation prefecture
//aspect ratio and width and pass in iamge

import { Row, Col, Card } from "react-bootstrap";

interface FoodSelectorCardProps {
    onClick: (currentItem: number) => void,
    item: number[]
}

export default function FoodSelectorCard(props: FoodSelectorCardProps) {
    return (
        <>
            <Row >
                <Col lg={5} style={{ display: 'grid', placeContent: 'center', textAlign: 'center' }}>
                    <div style={{ maxWidth: '95%', margin: '0 auto' }}>

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
                            <Col key={element} xs={3} style={{
                                display: 'flex', flexDirection: 'column',
                                alignItems: 'center', marginTop: '25px',
                            }}>
                                <Card style={{ margin: '0', textAlign: 'center', cursor: 'pointer' }} onClick={() => props.onClick(element)}>
                                    <Card.Img variant="top" src="https://placehold.co/100x75" style={{ maxWidth: '100%', height: 'auto' }} />

                                    <Card.Text>{element}</Card.Text>

                                </Card>
                            </Col>
                        ))}
                    </Row>

                </Col >

            </Row >
        </>
    )
}