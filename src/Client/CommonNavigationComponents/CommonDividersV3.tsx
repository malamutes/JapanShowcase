import { Row, Col } from "react-bootstrap"

interface CommonDividersV3Props {
    onScroll: boolean
}

export default function CommonDividersV3(props: CommonDividersV3Props) {
    return (
        <>
            <Col style={{ maxWidth: '60%', margin: '75px auto', }}>
                <Row style={{ textAlign: 'center' }}>
                    <span style={{
                        fontSize: '30px', fontWeight: '500', width: 'fit-content', margin: 'auto',
                        transition: 'clip-path 1.8s cubic-bezier(0.25, 0.1, 0.25, 1',
                        clipPath: `inset(0 ${props.onScroll ? 0 : 100}% 0 0)`
                    }}>Dolor Sit Amet Consectetur</span>
                </Row>

                <Row
                    className="DiamondContainerRow">
                    {['black', 'blue', 'green', 'yellow',].map((item, index) => (
                        <div style={{
                            width: '10px', aspectRatio: '1', backgroundColor: "black",
                            transition: 'opacity 0.5s ease, transform 0.5s ease',
                            transitionDelay: `${0.3 * index}s`,
                            position: 'relative', margin: '10px 10px', padding: '0',
                            transform: `rotate(45deg) scale(${props.onScroll ? 1.25 : 0.5})`,
                            opacity: `${props.onScroll ? 1 : 0}`,
                        }} key={item}>
                        </div>
                    ))}
                </Row>

                <Row>
                    <span style={{
                        textAlign: 'center', maxWidth: '90%', margin: 'auto', fontStyle: "italic",
                        width: 'fit-content',
                        transition: 'clip-path 1.8s cubic-bezier(0.25, 0.1, 0.25, 1)',
                        clipPath: `inset(0 ${props.onScroll ? 0 : 100}% 0 0)`
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                        luctus eros aliquet odio gravida, vel facilisis elit suscipit.
                        Mauris non nisi id est vulputate vestibulum ut id justo.
                    </span>
                </Row>
            </Col>
        </>
    )
}