import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import './FourImageSpace.css'

export default function FourImageSpace() {
    const [hoveredOne, setHoveredOne] = useState(false);
    const [hoveredTwo, setHoveredTwo] = useState(false);
    const [hoveredThree, setHoveredThree] = useState(false);
    const [hoveredFour, setHoveredFour] = useState(false);

    return (
        <>
            <Container style={{ maxWidth: '500px', aspectRatio: '1' }}>
                <Row>
                    <Col style={{ backgroundColor: 'blue', transformOrigin: 'top left' }}
                        className={`OneQuarter 
                            ${hoveredOne ? "OneQuarterHovered" : ""} 
                            ${hoveredTwo ? "OneQuarterNotHoveredHorizontal" : ""}
                            ${hoveredThree ? "OneQuarterNotHoveredVertical" : ""}
                            ${hoveredFour ? "OneQuarterNotHoveredOblique" : ""}
                            `} onMouseEnter={() => setHoveredOne(true)}
                        onMouseLeave={() => setHoveredOne(false)}></Col>

                    <Col style={{ backgroundColor: 'red', transformOrigin: 'top right' }}
                        className={`OneQuarter 
                            ${hoveredTwo ? "OneQuarterHovered" : ""} 
                            ${hoveredOne ? "OneQuarterNotHoveredHorizontal" : ""}
                            ${hoveredThree ? "OneQuarterNotHoveredOblique" : ""}
                            ${hoveredFour ? "OneQuarterNotHoveredVertical" : ""}
                            `} onMouseEnter={() => setHoveredTwo(true)}
                        onMouseLeave={() => setHoveredTwo(false)} ></Col>
                </Row>
                <Row>
                    <Col style={{ backgroundColor: 'green', transformOrigin: 'bottom left' }}
                        className={`OneQuarter 
                            ${hoveredThree ? "OneQuarterHovered" : ""} 
                            ${hoveredFour ? "OneQuarterNotHoveredHorizontal" : ""}
                            ${hoveredOne ? "OneQuarterNotHoveredVertical" : ""}
                            ${hoveredTwo ? "OneQuarterNotHoveredOblique" : ""}
                            `}
                        onMouseEnter={() => setHoveredThree(true)}
                        onMouseLeave={() => setHoveredThree(false)}></Col>

                    <Col style={{ backgroundColor: 'yellow', transformOrigin: 'bottom right' }}
                        className={`OneQuarter 
                            ${hoveredFour ? "OneQuarterHovered" : ""} 
                            ${hoveredThree ? "OneQuarterNotHoveredHorizontal" : ""}
                            ${hoveredTwo ? "OneQuarterNotHoveredVertical" : ""}
                            ${hoveredOne ? "OneQuarterNotHoveredOblique" : ""}
                            `} onMouseEnter={() => setHoveredFour(true)}
                        onMouseLeave={() => setHoveredFour(false)} ></Col>
                </Row>
            </Container>
        </>
    )
}