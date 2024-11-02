import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import './FourImageSpace.css'

interface FourImageSpaceProps {
    title1: string,
    img1: string,

    title2: string,
    img2: string,

    title3: string,
    img3: string,

    title4: string,
    img4: string
}

export default function FourImageSpace(props: FourImageSpaceProps) {
    const [hoveredOne, setHoveredOne] = useState(false);
    const [hoveredTwo, setHoveredTwo] = useState(false);
    const [hoveredThree, setHoveredThree] = useState(false);
    const [hoveredFour, setHoveredFour] = useState(false);

    return (
        <>
            <Container style={{ maxWidth: '500px', aspectRatio: '1' }}>
                <Row>
                    <Col style={{ backgroundColor: 'rgb(36, 36, 36)', borderRadius: "5px", transformOrigin: 'top left', display: 'grid', placeItems: 'center', position: 'relative' }}
                        className={`OneQuarter 
                            ${hoveredOne ? "OneQuarterHovered" : ""} 
                            ${hoveredTwo ? "OneQuarterNotHoveredHorizontal" : ""}
                            ${hoveredThree ? "OneQuarterNotHoveredVertical" : ""}
                            ${hoveredFour ? "OneQuarterNotHoveredOblique" : ""}
                            `} onMouseEnter={() => setHoveredOne(true)}
                        onMouseLeave={() => setHoveredOne(false)}>
                        <span className={`TextStyle
                        ${hoveredTwo ? "TextStyleHorizontal" : ""}
                        ${hoveredThree ? "TextStyleVertical" : ""}
                            `}>{props.title1}</span>

                        <img className={`ImgStyle ImgStyleTopLeft
                        ${hoveredTwo ? "ImgStyleHorizontal" : ""}
                        ${hoveredThree ? "ImgStyleVertical ImgStyleTopLeft" : ""}
                            `} src={props.img1} />
                    </Col>

                    <Col style={{ backgroundColor: 'rgb(36, 36, 36)', borderRadius: "5px", transformOrigin: 'top right', display: 'grid', placeItems: 'center', position: 'relative' }}
                        className={`OneQuarter 
                            ${hoveredTwo ? "OneQuarterHovered" : ""} 
                            ${hoveredOne ? "OneQuarterNotHoveredHorizontal" : ""}
                            ${hoveredThree ? "OneQuarterNotHoveredOblique" : ""}
                            ${hoveredFour ? "OneQuarterNotHoveredVertical" : ""}
                            `} onMouseEnter={() => setHoveredTwo(true)}
                        onMouseLeave={() => setHoveredTwo(false)} >

                        <span className={`TextStyle
                           ${hoveredOne ? "TextStyleHorizontal" : ""}
                        ${hoveredFour ? "TextStyleVertical" : ""}
                            `}>{props.title2}</span>

                        <img className={`ImgStyle ImgStyleTopRight
                        ${hoveredOne ? "ImgStyleHorizontal" : ""}
                        ${hoveredFour ? "ImgStyleVertical ImgStyleTopRight" : ""}

                        `} src={props.img2} />
                    </Col>
                </Row>
                <Row>
                    <Col style={{ backgroundColor: 'rgb(36, 36, 36)', borderRadius: "5px", transformOrigin: 'bottom left', display: 'grid', placeItems: 'center', position: 'relative' }}
                        className={`OneQuarter 
                            ${hoveredThree ? "OneQuarterHovered" : ""} 
                            ${hoveredFour ? "OneQuarterNotHoveredHorizontal" : ""}
                            ${hoveredOne ? "OneQuarterNotHoveredVertical" : ""}
                            ${hoveredTwo ? "OneQuarterNotHoveredOblique" : ""}
                            `}
                        onMouseEnter={() => setHoveredThree(true)}
                        onMouseLeave={() => setHoveredThree(false)}>

                        <span className={`TextStyle
                        ${hoveredFour ? "TextStyleHorizontal" : ""}
                           ${hoveredOne ? "TextStyleVertical" : ""}
                            `}>{props.title3}</span>

                        <img className={`ImgStyle ImgStyleBottomLeft
                        ${hoveredFour ? "ImgStyleHorizontal ImgStyleBottomLeft" : ""}
                        ${hoveredOne ? "ImgStyleVertical ImgStyleBottomLeft " : ""}
                            `} src={props.img3} />
                    </Col>

                    <Col style={{ backgroundColor: 'rgb(36, 36, 36)', borderRadius: "5px", transformOrigin: 'bottom right', display: 'grid', placeItems: 'center', position: 'relative' }}
                        className={`OneQuarter 
                            ${hoveredFour ? "OneQuarterHovered" : ""} 
                            ${hoveredThree ? "OneQuarterNotHoveredHorizontal" : ""}
                            ${hoveredTwo ? "OneQuarterNotHoveredVertical" : ""}
                            ${hoveredOne ? "OneQuarterNotHoveredOblique" : ""}
                            `} onMouseEnter={() => setHoveredFour(true)}
                        onMouseLeave={() => setHoveredFour(false)} >

                        <span className={`TextStyle
                        ${hoveredThree ? "TextStyleHorizontal" : ""}
                           ${hoveredTwo ? "TextStyleVertical" : ""}
                            `}>{props.title4}</span>

                        <img className={`ImgStyle ImgStyleBottomRight
                        ${hoveredTwo ? "ImgStyleVertical ImgStyleTopRight" : ""}
                        ${hoveredThree ? "ImgStyleHorizontal ImgStyleBottomRight" : ""}
                            `} src={props.img4} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}