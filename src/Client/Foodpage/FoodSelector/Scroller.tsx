import { Row, Col, Image } from "react-bootstrap"

interface ScrollerCardProps {
    switchMode: boolean,
    onScroll: boolean
}

export function ScrollerCard(props: ScrollerCardProps) {
    return (
        <>
            <Col style={{ maxWidth: '300px', padding: '0', margin: '0 15px' }}
                className={`ScrollCardVerticalDefault ${props.onScroll ? "ScrollCardVerticalShow" : ""}`}>
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
    onClick: (currentId: number) => void,
    onScroll: boolean
}

export default function Scroller(props: ScrollerProps) {
    return (
        <>
            <div className="LargeScreenScroller">
                <Col style={{ maxHeight: props.height, overflow: 'auto', backgroundColor: 'rgb(100,100,100)' }}>
                    <div style={{ maxWidth: 'fit-content' }}>
                        {props.identifier.map((element) => (
                            <Row key={element} style={{ margin: '25px 0' }}
                                onClick={() => console.log(element)}>
                                <div style={{ cursor: 'pointer', padding: '0' }} onClick={() => props.onClick(element)}>
                                    <ScrollerCard switchMode={false} onScroll={props.onScroll} />
                                </div>

                            </Row>

                        ))}
                    </div>
                </Col>
            </div>

            <div className="SmallScreenScroller">
                <Col style={{
                    maxHeight: props.height, overflow: 'auto', backgroundColor: 'rgb(100,100,100)',
                    maxWidth: '100%'
                }}>
                    <div style={{ maxWidth: 'fit-content', display: 'flex' }}>
                        {props.identifier.map((element) => (
                            <div key={element} style={{ margin: '25px 0', }}
                                onClick={() => console.log(element)}>
                                <div style={{ cursor: 'pointer', padding: '0' }} onClick={() => props.onClick(element)}>
                                    <ScrollerCard switchMode={true} onScroll={props.onScroll} />
                                </div>

                            </div>

                        ))}
                    </div>
                </Col>
            </div>
        </>
    )
}

