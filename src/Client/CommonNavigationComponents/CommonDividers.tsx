import { Row, Col } from "react-bootstrap"
import MatchmediaQuery from "../CommonLogic(NON-UI)/MatchmediaQuery";
import { useContext, useState } from "react"
import { LightThemeContext } from "../../ThemeContext";

interface CommonDividersProps {
    onScroll: boolean
}

export default function CommonDividers(props: CommonDividersProps) {
    const [more992, setMore992] = useState(true);

    const { light } = useContext(LightThemeContext);

    const checkmore992px = MatchmediaQuery({ size: 992, more: more992, setMore: setMore992 });

    return (
        <>
            <Col style={{ maxWidth: '60%', margin: '50px auto', padding: '75px 0 50px 0', }}>
                <Row style={{ maxWidth: '87.5%', margin: 'auto', }}>
                    <Col style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '1',
                        minWidth: `${checkmore992px ? "auto" : "100%"}`
                    }}>
                        <hr className={`DividerOneHR ${light ? "DividerOneHRLight" : "DividerOneHRDark"} ${props.onScroll ? "DividerOneHRShow" : ""}`}
                            style={{ transformOrigin: 'center right' }} />
                    </Col>

                    <Col style={{
                        margin: 'auto', textAlign: 'center', overflowY: 'hidden'
                    }}>
                        <span className={`DividerOneTitle ${props.onScroll ? "DividerOneTitleShow" : ""}`}>Dolor Sit Amet</span>
                    </Col>

                    <Col style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '1',
                        minWidth: `${checkmore992px ? "auto" : "100%"}`
                    }}>
                        <hr className={`DividerOneHR ${light ? "DividerOneHRLight" : "DividerOneHRDark"} ${props.onScroll ? "DividerOneHRShow" : ""}`}
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