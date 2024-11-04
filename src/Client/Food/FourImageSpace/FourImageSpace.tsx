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
            <Container style={{ maxWidth: '750px', aspectRatio: '1' }}>
                <Row>
                    <Col style={{ backgroundColor: 'rgb(36, 36, 36)', borderRadius: "5px", transformOrigin: 'top left', display: 'grid', placeItems: 'center', position: 'relative' }}
                        className={`OneQuarter 
                            ${hoveredOne ? "OneQuarterHovered" : ""} 
                            ${hoveredTwo ? "OneQuarterNotHoveredHorizontal" : ""}
                            ${hoveredThree ? "OneQuarterNotHoveredVertical" : ""}
                            ${hoveredFour ? "OneQuarterNotHoveredOblique" : ""}
                            `} onMouseEnter={() => setHoveredOne(true)}
                        onMouseLeave={() => setHoveredOne(false)}>


                        <img className={`ImgStyle ImgStyleTopLeft rounded
                        ${hoveredTwo ? "ImgStyleHorizontal" : ""}
                        ${hoveredThree ? "ImgStyleVertical ImgStyleTopLeft" : ""}
                            `} src={props.img1} alt={`${props.title1}`} />
                    </Col>

                    <Col style={{ backgroundColor: 'rgb(36, 36, 36)', borderRadius: "5px", transformOrigin: 'top right', display: 'grid', placeItems: 'center', position: 'relative' }}
                        className={`OneQuarter 
                            ${hoveredTwo ? "OneQuarterHovered" : ""} 
                            ${hoveredOne ? "OneQuarterNotHoveredHorizontal" : ""}
                            ${hoveredThree ? "OneQuarterNotHoveredOblique" : ""}
                            ${hoveredFour ? "OneQuarterNotHoveredVertical" : ""}
                            `} onMouseEnter={() => setHoveredTwo(true)}
                        onMouseLeave={() => setHoveredTwo(false)} >


                        <img className={`ImgStyle ImgStyleTopRight rounded
                        ${hoveredOne ? "ImgStyleHorizontal" : ""}
                        ${hoveredFour ? "ImgStyleVertical ImgStyleTopRight" : ""}

                        `} src={props.img2} alt={`${props.title2}`} />
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


                        <img className={`ImgStyle ImgStyleBottomLeft rounded
                        ${hoveredFour ? "ImgStyleHorizontal ImgStyleBottomLeft" : ""}
                        ${hoveredOne ? "ImgStyleVertical ImgStyleBottomLeft " : ""}
                            `} src={props.img3} alt={`${props.title3}`} />
                    </Col>

                    <Col style={{ backgroundColor: 'rgb(36, 36, 36)', borderRadius: "5px", transformOrigin: 'bottom right', display: 'grid', placeItems: 'center', position: 'relative' }}
                        className={`OneQuarter 
                            ${hoveredFour ? "OneQuarterHovered" : ""} 
                            ${hoveredThree ? "OneQuarterNotHoveredHorizontal" : ""}
                            ${hoveredTwo ? "OneQuarterNotHoveredVertical" : ""}
                            ${hoveredOne ? "OneQuarterNotHoveredOblique" : ""}
                            `} onMouseEnter={() => setHoveredFour(true)}
                        onMouseLeave={() => setHoveredFour(false)} >


                        <img className={`ImgStyle ImgStyleBottomRight rounded
                        ${hoveredTwo ? "ImgStyleVertical ImgStyleTopRight" : ""}
                        ${hoveredThree ? "ImgStyleHorizontal ImgStyleBottomRight" : ""}
                            `} src={props.img4} alt={`${props.title4}`} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}


/*                <span className={`TextStyle
                        ${hoveredTwo ? "TextStyleHorizontal" : ""}
                        ${hoveredThree ? "TextStyleVertical" : ""}
                            `}>{props.title1}</span>
 */