import { Container, Row, Col, Image } from "react-bootstrap"
import './LandmarkNavigation.css'
import CommonDividersV3 from "../../CommonNavigationComponents/CommonDividersV3";
import ObserverIntersectionUseEffect from "../../CommonLogic(NON-UI)/ObserverUseEffect";
import { useEffect, useRef, useState } from "react";
import MatchmediaQuery from "../../CommonLogic(NON-UI)/MatchmediaQuery";

export default function LandmarkNavigation() {
    const menuArray = ['Mochi', 'Ramen', 'Sushi', 'Yakisoba', 'Udon',
    ];

    const [itemHover, setItemHover] = useState(-1);

    const [outerRadius, setOuterRadius] = useState(250);
    const [more768px, setMore768px] = useState(true);
    const [more576px, setMore576px] = useState(true);
    const [more360px, setMore360px] = useState(true);

    const more768 = MatchmediaQuery({ size: 768, more: more768px, setMore: setMore768px });
    const more576 = MatchmediaQuery({ size: 576, more: more576px, setMore: setMore576px });
    const more360 = MatchmediaQuery({ size: 360, more: more360px, setMore: setMore360px });

    useEffect(() => {
        if (!more768) {
            if (more576) {
                setOuterRadius(200);
            }
            else if (!more576) {
                if (more360) {
                    setOuterRadius(140);
                }
                else if (!more360) {
                    setOuterRadius(125);
                }
            }

        }
        else if (more768) {
            setOuterRadius(250);
        }
    }, [more768, more576, more360]);

    const numItems = menuArray.length;
    const sectorAngle = 360 / numItems;

    //outer radius also serves as "halfway mark" for the bounding view box of the svg due to symmetry

    const innerRadius = 0.6 * outerRadius;
    //factor here is the driver which controls width of menu items

    //outerRadius is 50px for now, half of width of container rect 
    const horizDistanceOuter = outerRadius * Math.sin((sectorAngle / 2) * Math.PI / 180);
    const vertDistanceFromTopOuter = outerRadius - (outerRadius * Math.cos((sectorAngle / 2) * Math.PI / 180))

    const startingPositionOuterHoriz = outerRadius - horizDistanceOuter;
    const endingPositionOuterHoriz = outerRadius + horizDistanceOuter

    const menuItemHeight = outerRadius - innerRadius;
    //menuitemheight is the same as distnace between outer circumference and inner circumferece

    const horizDistanceInner = innerRadius * Math.sin((sectorAngle / 2) * Math.PI / 180);
    const vertDistanceFromTopInner = innerRadius - (innerRadius * Math.cos((sectorAngle / 2) * Math.PI / 180))

    const vertDistanceFromTopInnerTotal = vertDistanceFromTopInner + menuItemHeight;

    const startingPositionInnerHoriz = outerRadius + horizDistanceInner;
    const endingPositionInnerHoriz = outerRadius - horizDistanceInner


    const ComponentRef = useRef<HTMLDivElement>(null);

    const [scrollPast, setScrollPast] = useState(false);

    const checkScrollPast = ObserverIntersectionUseEffect({
        scrollPast: scrollPast, setScrollPast: setScrollPast,
        compRef: ComponentRef, threshold: 0.1
    })

    return (
        <>
            <Container ref={ComponentRef} >
                <CommonDividersV3 onScroll={checkScrollPast} />
                <div className="CircularMenuWrapper">
                    <svg width={`${outerRadius * 2}px`} height={`${outerRadius * 2}px`} xmlns="http://www.w3.org/2000/svg">
                        {menuArray.map((colour, index) => (

                            <>
                                <path
                                    key={index}
                                    style={{
                                        transformOrigin: 'center', transition: 'transform 0.5s ease',
                                        transform: `rotate(${sectorAngle * index}deg) 
                                    scale(${index === itemHover ? 1 : 0.9})`,
                                        pointerEvents: 'auto',
                                        cursor: 'pointer',
                                    }}
                                    fill="white"
                                    d={`M ${startingPositionOuterHoriz}, ${vertDistanceFromTopOuter}
                                        A ${outerRadius}, ${outerRadius}, 0, 0, 1, ${endingPositionOuterHoriz}, ${vertDistanceFromTopOuter}
                                        L ${startingPositionInnerHoriz}, ${vertDistanceFromTopInnerTotal}
                                        M ${startingPositionInnerHoriz}, ${vertDistanceFromTopInnerTotal}
                                        A ${innerRadius}, ${innerRadius}, 0, 0, 0, ${endingPositionInnerHoriz} 
                                        ${vertDistanceFromTopInnerTotal}
                                        L ${startingPositionOuterHoriz}, ${vertDistanceFromTopOuter}`}
                                    onMouseEnter={() => setItemHover(index)} onMouseLeave={() => setItemHover(-1)}
                                />

                                <defs >
                                    <mask id={`mask-${index}`} x="0" y="0" width="100%" height="100%">
                                        <path
                                            key={index}
                                            style={{
                                                transformOrigin: 'center', transition: 'transform 0.5s ease',
                                                transform: `rotate(${sectorAngle * index}deg) 
                                    scale(${index === itemHover ? 1 : 0.9})`,
                                            }}
                                            fill="white"
                                            d={`M ${startingPositionOuterHoriz}, ${vertDistanceFromTopOuter}
                                        A ${outerRadius}, ${outerRadius}, 0, 0, 1, ${endingPositionOuterHoriz}, ${vertDistanceFromTopOuter}
                                        L ${startingPositionInnerHoriz}, ${vertDistanceFromTopInnerTotal}
                                        M ${startingPositionInnerHoriz}, ${vertDistanceFromTopInnerTotal}
                                        A ${innerRadius}, ${innerRadius}, 0, 0, 0, ${endingPositionInnerHoriz} 
                                        ${vertDistanceFromTopInnerTotal}
                                        L ${startingPositionOuterHoriz}, ${vertDistanceFromTopOuter}`}
                                        />
                                    </mask>
                                </defs>

                                <image
                                    href={`/Images/FoodImages/${colour}.webp`}
                                    x="0" y="0" width="100%" height="100%"
                                    mask={`url(#mask-${index})`} // Apply the mask
                                    style={{ pointerEvents: 'none' }}
                                />

                            </>

                        ))}
                    </svg>
                </div>
                <div style={{
                    textAlign: 'center', maxWidth: '80%', margin: 'auto',
                }}>
                    <span   >
                        <p style={{ fontWeight: '700', fontSize: '20px' }}>Lorem Ipsum Dolor {itemHover}</p>
                        <p style={{ fontWeight: '500', fontSize: '18px', fontStyle: 'italic', color: 'grey' }}>
                            Sed ut perspiciatis unde omnis
                        </p>

                        <p style={{ fontSize: '16px', fontStyle: 'italic' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
                        </p>
                    </span>
                </div>

            </Container >
        </>
    )
}