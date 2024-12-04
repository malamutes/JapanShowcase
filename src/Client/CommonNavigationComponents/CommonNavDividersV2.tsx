import { Row, Col, Image } from "react-bootstrap"
import './CommonDividers.css'
import { useEffect, useRef, useContext } from "react";
import { LightThemeContext } from "../../ThemeContext";

interface CommonDividersV2Props {
    onScroll: boolean
}

export default function CommonDividersV2(props: CommonDividersV2Props) {
    const textRef = useRef<SVGTextElement>(null);

    const { light } = useContext(LightThemeContext);
    //set attributing is descrinbing instructions on how to render stuff on the screen and this is equivalent to doing <animate> tag down below
    //except this actually interacts with react DOM states as compared to regular svg elements which don't
    useEffect(() => {
        if (textRef.current && props.onScroll) {
            // Create textLength animation
            const animateLength = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
            animateLength.setAttribute('attributeName', 'textLength');
            animateLength.setAttribute('from', '0.1');
            animateLength.setAttribute('to', '110%');
            animateLength.setAttribute('dur', '0.75s');
            animateLength.setAttribute('begin', '0s');
            animateLength.setAttribute('fill', 'freeze');
            animateLength.setAttribute('repeatCount', '1');

            // Create opacity animation
            const animateOpacity = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
            animateOpacity.setAttribute('attributeName', 'opacity');
            animateOpacity.setAttribute('from', '0');
            animateOpacity.setAttribute('to', '1');
            animateOpacity.setAttribute('dur', '0.75s');
            animateOpacity.setAttribute('begin', '0s');
            animateOpacity.setAttribute('fill', 'freeze');
            animateOpacity.setAttribute('repeatCount', '1');

            textRef.current.appendChild(animateLength);
            textRef.current.appendChild(animateOpacity);

            animateLength.beginElement();
            animateOpacity.beginElement();
        }
    }, [props.onScroll]);

    return (
        <>
            <Col style={{
                width: '100%', margin: '150px auto 50px auto', position: 'relative',
                maxWidth: '1400px',
            }}>
                <Row style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}>

                    <div className={`TextContainer ${light ? "TextContainerLight" : "TextContainerDark"}`}>
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
                            <text fontSize="20" fontWeight="700" textDecoration="underline"
                                textAnchor="middle" fill={`${light ? "black" : "white"}`} ref={textRef} opacity="0"
                                textLength="0.1%">
                                <textPath
                                    href="#upperSemiCircle"
                                    startOffset="50%"
                                >
                                    Consectetur Adipiscing
                                </textPath>
                            </text>
                        </svg>

                        <Image
                            src="https://placehold.co/150x150"
                            roundedCircle
                            style={{
                                position: 'absolute',
                                transform: 'translate(-50%, -50%)',
                                transition: 'filter 1.25s ease, clip-path 1.25s ease',
                                filter: `blur(${props.onScroll ? 0 : 10}px)`,
                                clipPath: `circle(${props.onScroll ? 100 : 0}%)`,
                                zIndex: 3,
                            }}
                        />

                        <div style={{
                            margin: '85px auto 25px auto', overflow: 'hidden'
                        }}>
                            <span style={{
                                display: 'inline-block',
                                transition: 'transform 1s',
                                transform: `translateY(-${props.onScroll ? 0 : 100}%)`
                            }}>
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