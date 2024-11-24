import { useEffect, useState, useRef } from "react";
import { ComplimentaryFoodCard } from "../ComplimentaryFood/ComplimentaryFood";
import { Container, Col, Button } from "react-bootstrap";
import CommonDividersV2 from "../../CommonNavigationComponents/CommonNavDividersV2";
import ObserverIntersectionUseEffect from "../../CommonLogic(NON-UI)/ObserverUseEffect";

export default function FoodNavigation() {
    const [distance, setDistance] = useState(0);
    const [numItemsDisplay, setNumItemsDisplay] = useState(6);
    const totalItems = 8;

    const [scrollPast, setScrollPast] = useState(false);
    const ComponentRef = useRef<HTMLDivElement>(null);

    const checkHasScrollPast = ObserverIntersectionUseEffect({ scrollPast: scrollPast, setScrollPast: setScrollPast, compRef: ComponentRef });

    console.log(checkHasScrollPast);

    function clamp(value: number, min: number, max: number) {
        return Math.max(min, Math.min(value, max));
    }

    useEffect(() => {
        const displayItems = () => {
            if (window.innerWidth >= 992) {
                setNumItemsDisplay(6);
            }
            else if (window.innerWidth < 992 && window.innerWidth >= 768) {
                setNumItemsDisplay(4);
            }
            else if (window.innerWidth < 768 && window.innerWidth >= 576) {
                setNumItemsDisplay(3);
            }
            else if (window.innerWidth < 576) {
                setNumItemsDisplay(2);
            }
        };

        displayItems();

        window.addEventListener('resize', displayItems);

        return () => {
            window.removeEventListener('resize', displayItems);
        }
    }, [])
    //on the scrollbit need to set it so its dynamic when adapting to scrolling so i cant go over bounds

    return (
        <>
            <Container style={{ marginTop: '50px' }} ref={ComponentRef}>
                <CommonDividersV2 />
                <div style={{ overflowX: 'hidden' }}>
                    <div style={{
                        display: 'flex', transition: 'transform 1s ease-in-out',
                        transform: `translateX(${distance}%)`
                    }}>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((element, index) => (
                            <Col xs={6} sm={4} md={3} lg={2}>
                                <ComplimentaryFoodCard image="https://placehold.co/200x200" title={element.toString()}
                                    style={{ clipPath: 'circle(40%)' }} />
                            </Col>

                        ))}
                    </div>
                </div>
                <Button onClick={() => setDistance(
                    distance => clamp(distance + 100, -((1 / (numItemsDisplay / totalItems)) - 1) * 100, 0))}
                >PREV</Button>
                <Button onClick={() => setDistance(
                    distance => clamp(distance - 100, -((1 / (numItemsDisplay / totalItems)) - 1) * 100, 0))}
                >NEXT</Button>
            </Container>
        </>
    )
}