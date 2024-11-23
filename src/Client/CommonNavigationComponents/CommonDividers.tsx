import { Row, Col } from "react-bootstrap"
import { screenWidthBreakpointsContext } from "../../main"
import { useContext } from "react"

export default function CommonDividers() {
    const screenWidthBreakpoints = useContext(screenWidthBreakpointsContext);
    return (
        <>
            <Col style={{ maxWidth: '60%', margin: '50px auto' }}>
                <Row style={{ maxWidth: '87.5%', margin: 'auto' }}>
                    <Col style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '1',
                        minWidth: `${screenWidthBreakpoints['more992px'] ? "auto" : "100%"}`
                    }}>
                        <hr style={{ border: '1.25px solid black', opacity: '1', width: '100%' }} />
                    </Col>

                    <Col style={{
                        whiteSpace: `${screenWidthBreakpoints['more992px'] ? "nowrap" : "normal"}`, maxWidth: 'fit-content',
                        margin: 'auto', textAlign: 'center',
                    }}>
                        <span style={{ fontSize: '25px', fontWeight: '500' }}>Dolor Sit Amet Consectetur</span>
                    </Col>

                    <Col style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '1',
                        minWidth: `${screenWidthBreakpoints['more992px'] ? "auto" : "100%"}`
                    }}>
                        <hr style={{ border: '1.25px solid black', opacity: '1', width: '100%', }} />
                    </Col>
                </Row>

                <Row >
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