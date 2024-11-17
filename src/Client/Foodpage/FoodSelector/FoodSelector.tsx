import Scroller from "./Scroller";
import FoodSelectorCard from "./FoodSelectorCard";
import InnerFoodDescCard from "./InnerFoodDescriptionCard";

import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

export default function FoodSelector() {
    const [currentOuterItem, setCurrentOuterItem] = useState(1);
    const [currentInnerItem, setCurrentInnerItem] = useState(1);


    return (
        <>
            <Container style={{ height: '800px', boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", marginTop: '100px' }}>
                <Row >
                    <Col xs={4} style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center',
                        backgroundColor: 'lightgrey'

                    }}>
                        <Scroller height="800px" identifier={[1, 2, 3, 4, 5, 6, 7, 8]} onClick={(number) => setCurrentOuterItem(number)} />
                    </Col>
                    <Col xs={8}>
                        <Row style={{ height: '35%', backgroundColor: 'darkgrey' }}>
                            <FoodSelectorCard item={[1, 2, 3, 4, 5, 6, 7, 8]} onClick={(numberInner) => setCurrentInnerItem(numberInner)} />
                        </Row>

                        <Row style={{ height: '65%', overflow: 'hidden', backgroundColor: 'gray' }} >
                            <InnerFoodDescCard title={`Outer ${currentOuterItem} Inner ${currentInnerItem}`} />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}