import Scroller from "./Scroller";
import FoodSelectorCard from "./FoodSelectorCard";
import InnerFoodDescCard from "./InnerFoodDescriptionCard";

import { Container, Row, Col } from "react-bootstrap";
import { useState, useRef, useEffect, useContext } from "react";
import CommonDividersV2 from "../../CommonNavigationComponents/CommonNavDividersV2";
import ObserverIntersectionUseEffect from "../../CommonLogic(NON-UI)/ObserverUseEffect";
import { FoodContext } from "../FoodAppContext";


export default function FoodSelector() {

    const CF = useContext(FoodContext);

    const [scrollPast, setScrollPast] = useState(false);

    useEffect(() => {
        setScrollPast(false);
    }, [CF])

    const [currentOuterItem, setCurrentOuterItem] = useState(1);
    const [currentInnerItem, setCurrentInnerItem] = useState(1);

    const ComponentRef = useRef<HTMLDivElement>(null);

    const checkHasScrollPast = ObserverIntersectionUseEffect({
        scrollPast: scrollPast, setScrollPast: setScrollPast,
        compRef: ComponentRef, threshold: 0.1
    });

    console.log(checkHasScrollPast);

    return (
        <>
            <Container style={{ maxWidth: '1800px' }} ref={ComponentRef} >
                <CommonDividersV2 onScroll={checkHasScrollPast} />
                <Container style={{
                    minHeight: 'fit-content',
                    maxWidth: '1800px', display: 'flex', justifyContent: 'center', paddingTop: '25px',
                }}>

                    <Row style={{ width: '90%', boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}>
                        <Col lg={3} style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center',
                            backgroundColor: 'lightgrey',

                        }}>
                            <Scroller height="800px" identifier={[1, 2, 3, 4, 5, 6, 7, 8,]}
                                onClick={(number) => setCurrentOuterItem(number)} onScroll={checkHasScrollPast} />
                        </Col>
                        <Col lg={9} style={{ display: 'flex', flexDirection: 'column' }}>
                            <Row style={{
                                backgroundColor: 'darkgrey', display: 'flex', justifyContent: 'center',
                                flexGrow: '1'
                            }}>
                                <FoodSelectorCard item={[1, 2, 3, 4, 5, 6, 7, 8]}
                                    onClick={(numberInner) => setCurrentInnerItem(numberInner)}
                                    onScroll={checkHasScrollPast} />
                            </Row>

                            <Row style={{ overflow: 'hidden', backgroundColor: 'gray', flexGrow: '1' }} >
                                <InnerFoodDescCard title={`Outer ${currentOuterItem} Inner ${currentInnerItem}`}
                                    rating={3.5} onScroll={checkHasScrollPast} />
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}