import './CommonStyles.css'
import { Row, Col } from 'react-bootstrap'

interface CommonHeaderProps {
    colour: string,
    header: string,
    scrollPast: boolean,
}

export default function CommonHeader(props: CommonHeaderProps) {
    return (
        <>
            <Row style={{
                alignItems: 'center', '--shadowColour': props.colour,
                '--shadowRadius': props.scrollPast ? "1cqw" : ""
            } as React.CSSProperties} className='CommonHeaderRow'>
                <Col xs="auto" style={{ padding: '0' }}>
                    <hr style={{
                        backgroundColor: `${props.colour}`, border: `0.1cqw solid ${props.colour}`
                    }} className={`CommonHeaderLineLeft`} />
                </Col >

                <Col xs="auto" style={{ padding: '0' }}>
                    <h1 className='CommonHeaderTitle'>{props.header}</h1>
                </Col>

                <Col xs="auto" style={{ padding: '0' }}>
                    <hr style={{
                        backgroundColor: `${props.colour}`, border: `0.1cqw solid ${props.colour}`
                    }} className={`CommonHeaderLineRight ${(props.scrollPast) ? "CommonHeaderLineRightTransform" : ""}`} />
                </Col>
            </Row>
        </>
    )
}