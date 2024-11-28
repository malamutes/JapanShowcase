import { Col, Row, Image } from "react-bootstrap"
import './FoodImageCard.css'
import ObserverIntersectionUseEffect from "../../CommonLogic(NON-UI)/ObserverUseEffect"
import { useRef, useState } from "react"

export default function FoodImageCard() {
    const [scrollPast, setScrollPast] = useState(false);

    const ComponentRef = useRef<HTMLDivElement>(null);

    const checkScrollPast = ObserverIntersectionUseEffect({
        scrollPast: scrollPast, setScrollPast: setScrollPast,
        compRef: ComponentRef, threshold: 0.1
    })

    return (
        <>
            <Row className={`FoodImageCardDefault ${checkScrollPast ? "FoodImageCardShow" : ""}`} ref={ComponentRef}>
                <Col lg={4} style={{
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'end', padding: '0'
                }}>
                    <Image src="https://placehold.co/400x300" fluid style={{ minWidth: '100%', height: 'auto' }} />
                </Col>

                <Col lg={8} style={{
                    backgroundColor: 'lightgray',
                    display: 'flex', flexDirection: 'column',
                    justifyContent: 'center', alignItems: 'center'
                }}>
                    <div style={{ maxWidth: '80%' }}>
                        <p> <h4>Lorem Ipsum Dolor Sit Amet</h4></p>

                        <p>SPICE, THICKNESS, STRENGTH WITH STARS?</p>

                        <p>   <h5>Sed Ut Perspiciatis Unde Omnis</h5></p>

                        <h6 style={{ maxWidth: '90%' }}>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.</h6>
                    </div>


                </Col>
            </Row>
        </>
    )
}