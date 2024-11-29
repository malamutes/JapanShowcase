import { Row, Col } from "react-bootstrap"

export default function CommonDividersV3() {
    return (
        <>
            <Col style={{ maxWidth: '60%', margin: '75px auto' }}>
                <Row style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: '30px', fontWeight: '500' }}>Dolor Sit Amet Consectetur</span>
                </Row>

                <Row
                    className="DiamondContainerRow">
                    {['black', 'blue', 'green', 'yellow',].map((item) => (
                        <div style={{
                            width: '10px', aspectRatio: '1', backgroundColor: "black",
                            position: 'relative', margin: '10px 10px', padding: '0', transform: 'rotate(45deg)'
                        }} key={item}>
                        </div>
                    ))}
                </Row>

                <Row>
                    <span style={{ textAlign: 'center', maxWidth: '90%', margin: 'auto', fontStyle: "italic" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                        luctus eros aliquet odio gravida, vel facilisis elit suscipit.
                        Mauris non nisi id est vulputate vestibulum ut id justo.
                    </span>
                </Row>
            </Col>
        </>
    )
}