import { Row, Col, Image } from "react-bootstrap"
import './CommonDividers.css'

export default function CommonDividersV2() {
    return (
        <>
            <Col style={{
                width: '100%', margin: '150px auto 50px auto', position: 'relative',
                maxWidth: '1400px',
            }}>
                <Row style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}>

                    <div className="TextContainer">
                        <svg width="200" height="200" style={{
                            position: 'absolute', top: '-100px', left: '50%',
                            transform: 'translateX(-50%)',
                        }}>
                            <defs>
                                <path
                                    id="upperSemiCircle"
                                    d="M 100, 100 m -80,0 a 75,75 0 0,1 160,0"
                                />
                            </defs>
                            <text fontSize="20" fontWeight="700" textDecoration="underline" textAnchor="middle" fill="black">
                                <textPath href="#upperSemiCircle" startOffset="50%">
                                    Consectetur Adipiscing
                                </textPath>
                            </text>
                        </svg>

                        <Image src="https://placehold.co/150x150" roundedCircle style={{
                            maxWidth: '150px',
                            position: 'absolute', zIndex: '3',
                            transform: 'translateY(-50%) translateX(-50%)',
                        }} />


                        <div style={{ margin: '85px auto 25px auto' }}>
                            <span >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
                                Morbi tincidunt felis vel dui tincidunt, ac tempus libero volutpat.
                            </span>
                        </div>
                    </div>
                    <hr className="DividerV2HR" />
                </Row>
            </Col>
        </>
    )
}