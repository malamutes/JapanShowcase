//slider card with image and then title on the right and star ratings?? on the bottom 3 with something else
//to fll the empty space, maybe an icon to click or a star idk
import { useState, useContext, useEffect } from "react"
import { Row, Col, Image } from "react-bootstrap"
import { screenWidthBreakpointsContext } from "../../../main"

interface ScrollerCardProps {
    switchMode: boolean
}

export function ScrollerCard(props: ScrollerCardProps) {
    return (
        <>
            <Col style={{ maxWidth: '300px', padding: '0', margin: '0 15px' }}>
                <Row style={{ margin: '0' }}>
                    <Image src="https://placehold.co/300x200" style={{
                        padding: '0', height: 'auto',
                        minWidth: `${props.switchMode ? 200 : 0}px`
                    }} />
                </Row>
                <Row style={{ backgroundColor: 'grey', margin: '0' }}>
                    <Col xl={8} xxl={9} style={{ margin: '0' }}>
                        <p style={{ marginTop: '25px', textAlign: 'center' }}>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.</p>
                    </Col>

                    <Col xl={4} xxl={3} style={{
                        padding: '0', display: 'flex', justifyContent: 'center', alignItems: 'center',
                        marginBottom: '5px'
                    }}>
                        <Image src="https://placehold.co/60x60" roundedCircle />
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

    const screenWidthBreakpoints = useContext(screenWidthBreakpointsContext);


    function clamp(value: number, min: number, max: number) {
        return Math.max(min, Math.min(value, max));
    }

    const handleWheel = (event: React.WheelEvent) => {
        //20 determines rate of scroll, higher number is slower scroll, small is faster
        setDistance(clamp(distance + event.deltaY / 5, 0, 100 * (7.175 - 1)));


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
            {screenWidthBreakpoints['more992px'] ? (
                <Col style={{ maxHeight: props.height, overflow: 'hidden', backgroundColor: 'rgb(100,100,100)' }}>
                    <div style={{ maxWidth: 'fit-content' }}
                        onMouseEnter={() => canScroll(false)} onMouseLeave={() => canScroll(true)}
                        onWheel={(event) => handleWheel(event)}>
                        {props.identifier.map((element, index) => (
                            <Row key={element} style={{ margin: '25px 0', transform: `translateY(-${distance}%)` }}
                                onClick={() => console.log(element)}>
                                <div style={{ cursor: 'pointer', padding: '0' }} onClick={() => props.onClick(element)}>
                                    <ScrollerCard switchMode={false} />
                                </div>

                            </Row>

                        ))}
                    </div>
                </Col>
            )
                :
                (
                    <Col style={{
                        maxHeight: props.height, overflow: 'hidden', backgroundColor: 'rgb(100,100,100)',
                        maxWidth: '100%'
                    }}>
                        <div style={{ maxWidth: 'fit-content', display: 'flex' }}
                            onMouseEnter={() => canScroll(false)} onMouseLeave={() => canScroll(true)}
                            onWheel={(event) => handleWheel(event)}>

                            {props.identifier.map((element, index) => (
                                <div key={element} style={{ margin: '25px 0', transform: `translateX(-${distance}%)` }}
                                    onClick={() => console.log(element)}>
                                    <div style={{ cursor: 'pointer', padding: '0' }} onClick={() => props.onClick(element)}>
                                        <ScrollerCard switchMode={true} />
                                    </div>

                                </div>

                            ))}
                        </div>
                    </Col>
                )}

        </>
    )
}

