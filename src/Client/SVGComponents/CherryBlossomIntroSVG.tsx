import { useState, useEffect } from "react"

export default function InlineSvg() {
    const [pathLengthInside, setPathLengthInside] = useState<number>(0);
    const [pathLengthOutside, setPathLengthOutside] = useState<number>(0);

    useEffect(() => {
        const outside = document.getElementById("outsideCircle");
        const inside = document.getElementById("insideCircle");

        if (outside instanceof SVGGeometryElement && inside instanceof SVGGeometryElement) {
            setPathLengthInside(inside.getTotalLength());
            setPathLengthOutside(outside.getTotalLength());
        } else {
            console.error("The element is not an SVGGeometryElement or does not exist.");
        }
    }, []);

    return (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
            preserveAspectRatio="xMidYMid meet">
            <metadata>
                Created by potrace 1.10, written by Peter Selinger 2001-2011
            </metadata>
            <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                fill="transparent" stroke="black" strokeWidth={5}>
                <path d="M245 607 c-182 -54 -272 -242 -197 -409 44 -97 154 -171 257 -172 84
        -1 115 7 177 47 196 125 175 414 -38 517 -53 26 -144 34 -199 17z m175 -48
        c207 -93 211 -372 7 -473 -56 -28 -153 -36 -175 -14 -7 7 -12 9 -12 5 0 -15
        -76 33 -112 70 -49 50 -70 103 -69 175 0 63 31 139 74 182 72 72 197 96 287
        55z" id="outsideCircle" strokeDasharray={pathLengthOutside}
                    strokeDashoffset={pathLengthOutside}>
                    <animate
                        attributeName="stroke-dashoffset"
                        values={`${pathLengthOutside}; 0; 0`}
                        dur="3s"
                        fill="freeze"
                    />
                </path>

                <path d="M264 529 c-11 -6 -28 -24 -38 -40 -9 -16 -20 -29 -24 -30 -53 -6 -97
        -48 -107 -103 -6 -28 -2 -41 19 -69 19 -24 26 -46 26 -76 0 -76 73 -126 148
        -102 30 9 45 9 77 -3 37 -13 43 -13 70 4 46 29 69 65 67 106 -2 26 4 44 23 65
        28 35 30 46 13 102 -12 39 -54 77 -87 77 -8 0 -29 18 -48 40 -30 35 -40 40
        -76 39 -23 0 -51 -5 -63 -10z m44 -31 c8 -8 15 -8 27 2 19 16 39 1 53 -38 7
        -20 5 -39 -8 -72 -23 -58 -45 -60 -44 -5 0 32 -3 41 -17 41 -14 0 -16 -6 -12
        -28 l6 -28 -32 29 c-35 32 -39 56 -15 89 17 25 25 27 42 10z m-41 -111 c22
        -21 33 -38 29 -46 -9 -14 -46 -5 -61 14 -8 10 -13 7 -22 -12 -10 -21 -10 -23
        8 -18 37 12 39 -7 2 -26 -48 -24 -55 -24 -83 5 -22 25 -22 56 1 56 6 0 8 7 5
        16 -10 25 12 44 50 44 25 0 44 -9 71 -33z m222 24 c8 -5 11 -16 7 -29 -4 -13
        -1 -22 9 -26 22 -8 19 -29 -9 -55 -23 -22 -43 -26 -103 -23 -26 2 -33 6 -33
        22 0 20 18 26 64 21 15 -1 16 2 7 12 -6 8 -8 17 -4 20 3 4 2 7 -3 7 -6 0 -15
        -5 -22 -12 -20 -20 -23 -3 -7 35 13 32 20 37 48 37 17 0 38 -4 46 -9z m-149
        -87 c11 -12 10 -18 -3 -32 -16 -15 -18 -15 -34 0 -13 14 -14 20 -3 32 7 9 16
        16 20 16 4 0 13 -7 20 -16z m-75 -72 c-23 -19 -25 -26 -14 -33 18 -11 32 -12
        25 0 -3 4 1 16 8 26 12 16 14 13 19 -31 5 -42 3 -52 -15 -67 -25 -21 -68 -23
        -68 -3 0 8 -10 16 -22 18 -17 2 -24 11 -26 31 -4 37 20 72 66 96 33 17 38 18
        46 3 7 -11 2 -22 -19 -40z m89 -4 c8 -12 13 -25 10 -30 -8 -13 10 -9 32 7 16
        12 16 14 3 15 -9 0 -22 7 -29 15 -12 14 -8 15 31 9 52 -8 71 -28 67 -69 -2
        -22 -9 -31 -25 -33 -13 -2 -23 -10 -23 -18 0 -17 -33 -18 -62 -3 -37 20 -66
        129 -34 129 8 0 22 -10 30 -22z" id="insideCircle" strokeDasharray={pathLengthInside}
                    strokeDashoffset={pathLengthInside}>
                    <animate
                        attributeName="stroke-dashoffset"
                        values={`${pathLengthInside}; 0; 0`}
                        dur="3s"
                        fill="freeze"
                    />
                </path>
            </g>
        </svg>
    );
}