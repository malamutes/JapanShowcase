import FoodImageCard from "./FoodImageCard"
import { Container, Col, Row } from "react-bootstrap"
import CommonDividersV2 from "../../CommonNavigationComponents/CommonNavDividersV2"
import { useEffect, useRef, useState } from "react";

export default function FoodImageSection() {
    const ComponentRef = useRef<HTMLDivElement>(null);
    const [rect, setRect] = useState<DOMRect | null>(null);

    // Update the rect value when the component is resized
    useEffect(() => {
        const handleResize = () => {
            if (ComponentRef.current) {
                setRect(ComponentRef.current.getBoundingClientRect());
            }
        };

        // Add resize event listener
        window.addEventListener('resize', handleResize);

        // Initial check when the component mounts
        if (ComponentRef.current) {
            setRect(ComponentRef.current.getBoundingClientRect());
        }

        // Clean up the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array to run once on mount

    return (
        <>
            <Container style={{ padding: '0', overflow: 'hidden' }} ref={ComponentRef}>
                <CommonDividersV2 />
                <Row style={{ margin: '0' }} >
                    {[1, 2, 3, 4, 5, 6].map((element, index) => (
                        <Col key={index} style={{ margin: '25px 0px', }} md={6} lg={12}>
                            <FoodImageCard />
                        </Col>
                    ))}
                </Row>
            </Container>

        </>
    )
}