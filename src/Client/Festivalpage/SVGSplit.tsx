import VerticalSVGBox from "../SVGComponents/VerticalSVGBox"
import { Container } from "react-bootstrap"
import { useState, useEffect } from "react";

export default function SVGSplit() {

    const [pathLength, setPathLength] = useState<number>(0);

    useEffect(() => {
        const svgPathRight = document.getElementById("Line");
        if (svgPathRight instanceof SVGGeometryElement) {
            setPathLength(svgPathRight.getTotalLength());
        } else {
            console.error("The element is not an SVGGeometryElement or does not exist.");
        }
    }, []);

    useEffect(() => {
        console.log(pathLength);
    }, [pathLength])

    return (
        <>
            <Container style={{
                display: 'flex', justifyContent: 'center',
            }}>
                <svg width={1000} height={1000}
                    overflow={"visible"} xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(300, 50)">
                        <VerticalSVGBox
                            SVGwidth={400}
                            SVGheight={600}
                            SVGBoxBorderRadius={50}
                            SVGId="BottomSVGOne"
                            SVGDuration={1.5}
                            SVGDelay={0}
                        />

                        <g transform="translate(12.5,12.5)">
                            <VerticalSVGBox
                                SVGwidth={375}
                                SVGheight={575}
                                SVGBoxBorderRadius={50}
                                SVGId="BottomSVGEight"
                                SVGDuration={1.5}
                                SVGDelay={0.15}

                            />
                        </g>

                        <g transform="translate(25,325)">
                            <VerticalSVGBox
                                SVGwidth={350}
                                SVGheight={250}
                                SVGBoxBorderRadius={50}
                                SVGId="BottomSVGTwo"
                                SVGDuration={1.5}
                                SVGDelay={0.3}
                            />
                        </g>


                        <g transform="translate(25,200)">
                            <VerticalSVGBox
                                SVGwidth={350}
                                SVGheight={50}
                                SVGBoxBorderRadius={25}
                                SVGId="BottomSVGFive"
                                SVGDuration={1.5}
                                SVGDelay={0.45}
                            />
                        </g>

                        <g transform="translate(25,270)">
                            <VerticalSVGBox
                                SVGwidth={350}
                                SVGheight={40}
                                SVGBoxBorderRadius={20}
                                SVGId="BottomSVGThree"
                                SVGDuration={1.5}
                                SVGDelay={0.6}

                            />
                        </g>


                        <g transform="translate(125,25)">
                            <VerticalSVGBox
                                SVGwidth={150}
                                SVGheight={150}
                                SVGBoxBorderRadius={75}
                                SVGId="BottomSVGFive"
                                SVGDuration={1.5}
                                SVGDelay={0.75}
                            />
                        </g>


                        <path stroke="black" strokeWidth={4}
                            d="M 25 400 H375" id="Line"
                            strokeDasharray={pathLength}
                            strokeDashoffset={pathLength}
                        >
                            <animate
                                attributeName="stroke-dashoffset"
                                values={`${pathLength}; 0; 0`}
                                dur="1.5s"
                                begin={"0.5s"}
                                fill="freeze"
                            />
                        </path>

                    </g>
                </svg>
            </Container >

        </>
    )
}