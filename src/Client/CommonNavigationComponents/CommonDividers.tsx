import { Row, Col } from "react-bootstrap"
import { screenWidthBreakpointsContext } from "../../main"
import { useContext } from "react"

interface CommonDividersProps {
    onScroll: boolean
}

export default function CommonDividers(props: CommonDividersProps) {
    const screenWidthBreakpoints = useContext(screenWidthBreakpointsContext);
    return (
        <>
            <Col style={{ maxWidth: '60%', margin: '50px auto', padding: '75px 0 50px 0', }}>
                <Row style={{ maxWidth: '87.5%', margin: 'auto', }}>
                    <Col style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '1',
                        minWidth: `${screenWidthBreakpoints['more992px'] ? "auto" : "100%"}`
                    }}>
                        <hr className={`DividerOneHR ${props.onScroll ? "DividerOneHRShow" : ""}`}
                            style={{ transformOrigin: 'center right' }} />
                    </Col>

                    <Col style={{
                        margin: 'auto', textAlign: 'center', overflowY: 'hidden'
                    }}>
                        <span className={`DividerOneTitle ${props.onScroll ? "DividerOneTitleShow" : ""}`}>Dolor Sit Amet</span>
                    </Col>

                    <Col style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '1',
                        minWidth: `${screenWidthBreakpoints['more992px'] ? "auto" : "100%"}`
                    }}>
                        <hr className={`DividerOneHR ${props.onScroll ? "DividerOneHRShow" : ""}`}
                            style={{ transformOrigin: 'center left' }} />
                    </Col>
                </Row>

                <Row style={{ overflowY: 'hidden' }}>
                    <span className={`DividerOneText ${props.onScroll ? "DividerOneTextShow" : ""}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                        luctus eros aliquet odio gravida, vel facilisis elit suscipit.
                        Mauris non nisi id est vulputate vestibulum ut id justo.
                    </span>
                </Row>
            </Col>


        </>
    )
}