import { useEffect, useState } from "react";

interface VerticalSVGBoxProps {
    SVGwidth: number,
    SVGheight: number,
    SVGBoxBorderRadius: number,
    SVGId: string,
    SVGFill?: string,
    SVGDuration: number,
    SVGDelay: number,
    SVGDelayFill?: number,
    SVGDeviation?: number
}

export default function VerticalSVGBox(props: VerticalSVGBoxProps) {
    const { SVGDeviation = 0 } = props; // Set default value for SVGDeviation

    const [pathLength, setPathLength] = useState<number>(0);

    useEffect(() => {
        const svgPathRight = document.getElementById(props.SVGId);
        if (svgPathRight instanceof SVGGeometryElement) {
            setPathLength(svgPathRight.getTotalLength());
        } else {
            console.error("The element is not an SVGGeometryElement or does not exist.");
        }
    }, []);

    useEffect(() => {
        console.log(pathLength);
    }, [pathLength])

    const halfWidth = props.SVGwidth / 2;

    const pathStringRight = `
        M${props.SVGwidth / 2},0   
        H${props.SVGwidth / 2 - halfWidth + props.SVGBoxBorderRadius}
        A ${`${props.SVGBoxBorderRadius} ${props.SVGBoxBorderRadius} 0 0 0
        0 ${props.SVGBoxBorderRadius}`}
        V${props.SVGheight - props.SVGBoxBorderRadius}
        A ${`${props.SVGBoxBorderRadius} ${props.SVGBoxBorderRadius} 0 0 0
        ${props.SVGBoxBorderRadius} ${props.SVGheight}`}
        H${props.SVGwidth / 2}
    `

    const pathStringLeft = `
        M${props.SVGwidth / 2},0   
        H${props.SVGwidth / 2 + halfWidth - props.SVGBoxBorderRadius}
        A ${`${props.SVGBoxBorderRadius} ${props.SVGBoxBorderRadius} 0 0 1 
        ${props.SVGwidth} ${props.SVGBoxBorderRadius}`}
        V${props.SVGheight - props.SVGBoxBorderRadius}
        A ${`${props.SVGBoxBorderRadius} ${props.SVGBoxBorderRadius} 0 0 1 
        ${props.SVGwidth - props.SVGBoxBorderRadius} 
        ${props.SVGheight}`}
        H${props.SVGwidth / 2}
    `

    return (
        <>
            <svg width={props.SVGwidth} height={props.SVGheight}
                viewBox={`0 0 ${props.SVGwidth} ${props.SVGheight}`}
                overflow={"visible"} xmlns="http://www.w3.org/2000/svg"
            >
                {/* Filter for drop shadow */}
                <defs>
                    <filter id={`dropShadow${props.SVGId}`} x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="0" stdDeviation={SVGDeviation} flood-color="black" />
                    </filter>
                </defs>
                <path
                    id={props.SVGId}
                    d={pathStringRight}
                    fill='transparent'
                    stroke="black"
                    strokeWidth="4"
                    strokeDasharray={pathLength}
                    strokeDashoffset={pathLength}
                    filter={`url(#dropShadow${props.SVGId})`}
                >

                    <animate
                        attributeName="stroke-dashoffset"
                        values={`${pathLength}; 0; 0`}
                        dur={`${props.SVGDuration}s`}
                        fill="freeze"
                        begin={`${props.SVGDelay}s`}
                    />

                    <animate
                        attributeName="fill"
                        values={`transparent; ${props.SVGFill || "transparent"}; ${props.SVGFill || "transparent"}`}
                        dur="0.25s"
                        fill="freeze"
                        begin={`${props.SVGDelayFill}s`}
                    />

                    <animate
                        attributeName="stroke"
                        values="black; transparent; transparent"
                        dur="0.25s"
                        fill="freeze"
                        begin={`${props.SVGDelayFill}s`}
                    />
                </path>

                <path
                    id={`${props.SVGId}left`}
                    d={pathStringLeft}
                    fill='transparent'
                    stroke="black"
                    strokeWidth="4"
                    strokeDasharray={pathLength}
                    strokeDashoffset={pathLength}
                    filter={`url(#dropShadow${props.SVGId})`}
                >

                    <animate
                        attributeName="stroke-dashoffset"
                        values={`${pathLength}; 0; 0`}
                        dur={`${props.SVGDuration}s`}
                        begin={`${props.SVGDelay}s`}
                        fill="freeze"
                    />

                    <animate
                        attributeName="stroke"
                        values="black; transparent; transparent"
                        dur="0.25s"
                        fill="freeze"
                        begin={`${props.SVGDelayFill}s`}
                    />

                    <animate
                        attributeName="fill"
                        values={`transparent; ${props.SVGFill || "transparent"}; ${props.SVGFill || "transparent"}`}
                        dur="0.25s"
                        fill="freeze"
                        begin={`${props.SVGDelayFill}s`}
                    />
                </path>
            </svg>
        </>
    )
}