import { useEffect, useRef, useState } from "react";
import { Container, Col, Image } from "react-bootstrap";
import CommonDividersV2 from "../../CommonNavigationComponents/CommonNavDividersV2";
import ObserverIntersectionUseEffect from "../../CommonLogic(NON-UI)/ObserverUseEffect";

export default function FoodNavigation() {
    const [distance, setDistance] = useState(0);
    const [numItemsDisplay, setNumItemsDisplay] = useState(6);
    const totalItems = 8;

    const [hover, setHover] = useState(-1);

    const [scrollPast, setScrollPast] = useState(false);
    const ComponentRef = useRef<HTMLDivElement>(null);

    const checkScrollPast = ObserverIntersectionUseEffect({
        scrollPast: scrollPast, setScrollPast: setScrollPast,
        compRef: ComponentRef, threshold: 0.25
    })

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
            <Container style={{ marginTop: '50px', overflow: 'hidden' }} ref={ComponentRef}>
                <CommonDividersV2 />
                <div style={{
                    overflowX: 'hidden', transition: 'transform 1.25s ease',
                    transform: `translateX(-${checkScrollPast ? 0 : 100}%)`
                }}>
                    <div style={{
                        display: 'flex', transition: 'transform 1s ease-in-out',
                        transform: `translateX(${distance}%)`
                    }}>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((element, index) => (
                            <Col xs={6} sm={4} md={3} lg={2} style={{
                                display: 'flex', flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <div style={{
                                    maxWidth: '150px', // Match your image dimensions
                                    maxHeight: '150px',
                                    margin: '15px',
                                    border: '2px solid black', // Border styling
                                    borderRadius: '50%', // Matches the roundedCircle effect
                                    overflow: 'hidden', // Ensures only the image content scales
                                    display: 'inline-block',
                                }}>
                                    <Image fluid src="https://placehold.co/150x150" roundedCircle
                                        style={{
                                            width: '100%', // Ensure the image fits the container
                                            height: '100%',
                                            transition: 'transform 0.5s ease',
                                            transform: `scale(${hover === index ? 1.25 : 1})`, // Scale the image content
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={() => setHover(index)}
                                        onMouseLeave={() => setHover(-1)}
                                    />
                                </div>

                                <div style={{
                                    backgroundColor: 'darkgrey', padding: '10px', width: 'fit-content',
                                    transform: 'translateY(-100%)'
                                }}>
                                    asdsad
                                </div>
                            </Col>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Image src="/Images/right_arrow.png" onClick={() => setDistance(
                        distance => clamp(distance + 100, -((1 / (numItemsDisplay / totalItems)) - 1) * 100, 0))}
                        style={{ cursor: 'pointer', transform: 'rotate(180deg)', maxWidth: '40px', marginRight: '10px' }} />
                    <Image src="/Images/right_arrow.png" onClick={() => setDistance(
                        distance => clamp(distance - 100, -((1 / (numItemsDisplay / totalItems)) - 1) * 100, 0))}
                        style={{ cursor: 'pointer', maxWidth: '40px' }}
                    />
                </div>
            </Container>
        </>
    )
}