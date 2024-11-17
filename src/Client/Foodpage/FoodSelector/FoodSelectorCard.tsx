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
                <Col xs={4} style={{ display: 'grid', placeContent: 'center', textAlign: 'center' }}>

                    <p>Lorem Ipsum</p>

                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                        Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat.
                    </p>

                </Col>

                <Col xs={8}>
                    <Row >
                        {props.item.map((element) => (
                            <Col key={element} xs={3} style={{
                                display: 'flex', flexDirection: 'column',
                                alignItems: 'center', marginTop: '25px'
                            }}>
                                <Card style={{ margin: '0', textAlign: 'center', cursor: 'pointer' }} onClick={() => props.onClick(element)}>
                                    <Card.Img variant="top" src="holder.js/100x75" />

                                    <Card.Text>{element}</Card.Text>

                                </Card>
                            </Col>
                        ))}
                    </Row>

                </Col>

            </Row>
        </>
    )
}