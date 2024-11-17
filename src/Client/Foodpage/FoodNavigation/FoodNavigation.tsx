import { useState } from "react";
import { ComplimentaryFoodCard } from "../ComplimentaryFood/ComplimentaryFood";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function FoodNavigation() {
    const [moveRight, setMoveRight] = useState(false);

    return (
        <>
            <Container style={{ marginTop: '50px' }}>
                <div style={{ overflowX: 'hidden' }}>
                    <div style={{
                        display: 'flex', transition: 'transform 1s ease-in-out',
                        transform: `translateX(${moveRight === true ? -100 / 3 : 0}%)`
                    }}>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((element, index) => (
                            <Col xs={2}>
                                <ComplimentaryFoodCard image="holder.js/200x200" title={element.toString()}
                                    style={{ clipPath: 'circle(40%)' }} />
                            </Col>

                        ))}
                    </div>
                </div>
                <Button onClick={() => setMoveRight(false)}>PREV</Button>
                <Button onClick={() => setMoveRight(true)}>NEXT</Button>
            </Container>
        </>
    )
}