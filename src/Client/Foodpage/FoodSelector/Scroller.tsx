//slider card with image and then title on the right and star ratings?? on the bottom 3 with something else
//to fll the empty space, maybe an icon to click or a star idk
import { useState, useEffect } from "react"
import { Row, Col, Card, Image } from "react-bootstrap"

export function ScrollerCard() {
    return (
        <>
            <Col style={{ maxWidth: '300px', padding: '0' }}>
                <Row style={{ margin: '0' }}>
                    <Image src="holder.js/300x200" style={{ padding: '0' }} />
                </Row>
                <Row style={{ backgroundColor: 'grey', margin: '0' }}>
                    <Col xs={9} style={{ margin: '0' }}>
                        <p style={{ marginTop: '25px' }}>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.</p>
                    </Col>

                    <Col xs={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image src="holder.js/60x60" roundedCircle />
                    </Col>

                </Row>
            </Col>

        </>
    )
}

interface ScrollerProps {
    height: string,
    identifier: number[],
    onClick: (currentId: number) => void

}

export default function Scroller(props: ScrollerProps) {
    const [distance, setDistance] = useState(0);
    const [scroll, canScroll] = useState(true);

    function clamp(value: number, min: number, max: number) {
        return Math.max(min, Math.min(value, max));
    }

    const handleWheel = (event: React.WheelEvent) => {
        //20 determines rate of scroll, higher number is slower scroll, small is faster
        setDistance(clamp(distance + event.deltaY / 5, 0, 100 * (10 - 1)));


    };

    useEffect(() => {
        function stopScroll(event: WheelEvent) {
            if (scroll === false) {
                event.preventDefault()
            }
        };

        window.addEventListener("wheel", stopScroll, { passive: false });

        return () => {
            window.removeEventListener("wheel", stopScroll);
        };


    }, [scroll])

    return (
        <>
            <Col style={{ maxHeight: props.height, overflow: 'hidden' }}>
                <div style={{ maxWidth: 'fit-content' }}
                    onMouseEnter={() => canScroll(false)} onMouseLeave={() => canScroll(true)}
                    onWheel={(event) => handleWheel(event)}>
                    {props.identifier.map((element, index) => (
                        <Row key={element} style={{ margin: '25px 0', transform: `translateY(-${distance}%)` }}
                            onClick={() => console.log(element)}>
                            <div style={{ cursor: 'pointer', padding: '0' }} onClick={() => props.onClick(element)}>
                                <ScrollerCard />
                            </div>

                        </Row>

                    ))}
                </div>

            </Col>
        </>
    )
}

