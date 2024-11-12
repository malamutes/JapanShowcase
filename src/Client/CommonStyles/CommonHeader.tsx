import './CommonStyles.css'
import { Row, Col } from 'react-bootstrap'

interface CommonHeaderProps {
    colour: string,
    header: string
}

export default function CommonHeader(props: CommonHeaderProps) {
    return (
        <>
            <Row style={{ alignItems: 'center', '--shadowColour': props.colour } as React.CSSProperties} className='CommonHeaderRow'>
                <Col xs="auto">
                    <hr style={{
                        backgroundColor: `${props.colour}`, border: `0.1cqw solid ${props.colour}`
                    }} className='CommonHeaderLineLeft' />
                </Col >

                <Col xs="auto">
                    <h1 className='CommonHeaderTitle'>{props.header}</h1>
                </Col>

                <Col xs="auto">
                    <hr style={{
                        backgroundColor: `${props.colour}`, border: `0.1cqw solid ${props.colour}`
                    }} className='CommonHeaderLineRight' />
                </Col>
            </Row>
        </>
    )
}