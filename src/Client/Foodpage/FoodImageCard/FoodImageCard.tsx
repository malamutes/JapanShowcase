import { Col, Row, Image } from "react-bootstrap"
import './FoodImageCard.css'
import ObserverIntersectionUseEffect from "../../CommonLogic(NON-UI)/ObserverUseEffect"
import { useRef, useState, useContext, useEffect } from "react"
import { FoodContext } from "../FoodAppContext"

export default function FoodImageCard() {
    const CF = useContext(FoodContext);

    const [scrollPast, setScrollPast] = useState(false);

    useEffect(() => {
        setScrollPast(false);
    }, [CF])

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
                        <h4>Lorem Ipsum Dolor Sit Amet</h4>

                        <p>SPICE, THICKNESS, STRENGTH WITH STARS?</p>

                        <h5>Sed Ut Perspiciatis Unde Omnis</h5>

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