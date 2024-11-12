import { Container } from "react-bootstrap"
import { FoodData } from "../Data/FoodData"
import FoodCard from "./FoodCard";
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import './Food.css'
import '../CommonStyles/CommonStyles.css'
import CommonHeader from "../CommonStyles/CommonHeader";

export default function Food() {
    const FD = FoodData;

    function clamp(value: number, min: number, max: number) {
        return Math.max(min, Math.min(value, max));
    }


    const [moveAlong, setMoveAlong] = useState<number>(0);
    const [activeIndex, setActiveIndex] = useState<number>(1);

    function handleClick(directionRight: boolean) {
        /* moving right */
        if (directionRight === true) {
            setMoveAlong(moveAlong => Math.max((moveAlong - 33.3), -33.3 * (Object.keys(FD).length - 2)));
            setActiveIndex(activeIndex => clamp((activeIndex + 1), 0, Object.keys(FD).length - 1));
        }
        else if (directionRight === false) {
            setMoveAlong(moveAlong => Math.min((moveAlong + 33.3), 33.3));
            setActiveIndex(activeIndex => clamp((activeIndex - 1), 0, Object.keys(FD).length - 1));
        }

    }

    useEffect(() => { console.log(activeIndex) }, [activeIndex]);

    return (
        <>

            <Container className="CommonContainer" id="Food">
                <CommonHeader header="Taste of Japan" colour="green" />
                <Container className="FoodContainer" >

                    <div className="NavDiv">

                        <Image fluid src="/public/Images/RightArrow.png" style={{
                            cursor: 'pointer', zIndex: '1', filter: 'invert(100%) brightness(75%)',
                            transform: 'rotate(180deg)'
                        }}
                            onClick={() => handleClick(false)} />

                        <div style={{
                            backgroundColor: `red`, opacity: '1',
                            border: `2.5px solid white`, margin: '0 5px'

                        }} />


                        <Image fluid src="/public/Images/RightArrow.png" style={{ cursor: 'pointer', zIndex: '1', filter: 'invert(100%) brightness(75%)' }}
                            onClick={() => handleClick(true)} />


                    </div>

                    <div style={{ overflowX: 'hidden' }}>
                        <div style={{
                            width: '100%', display: 'flex',
                            transform: `translateX(${moveAlong}%)`,
                            transition: 'transform 1s ease-in-out',
                        }}>
                            {Object.keys(FD).map((food, index) => (
                                <FoodCard key={index} activeElement={index === activeIndex}
                                    image={FD[food].img} titleEng={FD[food].titleEng}
                                    titleJap={FD[food].titleJap} desc={FD[food].desc}
                                    color={FD[food].color} onclick={() => {
                                        if (index != activeIndex) {
                                            if (index > activeIndex) {
                                                setMoveAlong(moveAlong => Math.max((moveAlong - 33.3), -33.3 * (Object.keys(FD).length - 2)));
                                            }
                                            else if (index < activeIndex) {
                                                setMoveAlong(moveAlong => Math.min((moveAlong + 33.3), 33.3));
                                            }
                                            setActiveIndex(index);
                                        }
                                        else if (index === activeIndex) {
                                            console.log("YIPPIE");
                                        }

                                    }} />
                            ))}
                        </div>
                    </div>
                </Container>
            </Container>


        </>

    )
}

//<a href="https://www.freepik.com/icon/next_17214681#fromView=search&page=1&position=0&uuid=d174364e-8d06-46f3-8b15-40ca125be8bf">Icon by Icon Desai</a> arrow
