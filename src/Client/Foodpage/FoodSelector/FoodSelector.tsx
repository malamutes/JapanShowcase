import Scroller from "./Scroller";
import FoodSelectorCard from "./FoodSelectorCard";
import InnerFoodDescCard from "./InnerFoodDescriptionCard";

import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import CommonDividersV2 from "../../CommonNavigationComponents/CommonNavDividersV2";

export default function FoodSelector() {
    const [currentOuterItem, setCurrentOuterItem] = useState(1);
    const [currentInnerItem, setCurrentInnerItem] = useState(1);

    return (
        <>
            <Container style={{ maxWidth: '1800px' }}>
                <CommonDividersV2 />
                <Container style={{
                    height: 'fit-content',
                    maxWidth: '1800px', display: 'flex', justifyContent: 'center', paddingTop: '25px'
                }}>

                    <Row style={{ width: '90%', boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}>
                        <Col lg={3} style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center',
                            backgroundColor: 'lightgrey',

                        }}>
                            <Scroller height="800px" identifier={[1, 2, 3, 4, 5, 6, 7, 8]} onClick={(number) => setCurrentOuterItem(number)} />
                        </Col>
                        <Col lg={9} >
                            <Row style={{ minHeight: '40%', backgroundColor: 'darkgrey', display: 'flex', justifyContent: 'center' }}>
                                <FoodSelectorCard item={[1, 2, 3, 4, 5, 6, 7, 8]} onClick={(numberInner) => setCurrentInnerItem(numberInner)} />
                            </Row>

                            <Row style={{ minHeight: '60%', overflow: 'hidden', backgroundColor: 'gray' }} >
                                <InnerFoodDescCard title={`Outer ${currentOuterItem} Inner ${currentInnerItem}`} />
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}