import { Container } from "react-bootstrap"
import { FoodData } from "../Data/FoodData"
import FoodCard from "./FoodCard";
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import './Food.css'
import '../CommonStyles/CommonStyles.css'

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

            <Container style={{ maxWidth: '100vw', marginBottom: '5cqw' }}>
                <h1 className="CommonHeader">Taste of Japan</h1>
                <Container style={{
                    maxWidth: '75%',
                }} >


                    <div style={{ width: '5%', aspectRatio: '2.5', position: 'absolute', right: '10%', display: 'flex', cursor: 'pointer' }}>

                        <Image fluid src="/public/Images/RightArrow.png" style={{
                            cursor: 'pointer', zIndex: '1', filter: 'invert(100%) brightness(75%)',
                            transform: 'rotate(180deg)'
                        }}
                            onClick={() => handleClick(false)} />

                        <hr style={{ width: '2.5cqw', backgroundColor: `darkgrey`, opacity: '1', border: `0.1cqw solid white`, transform: ' rotate(90deg) scaleX(2.5)' }} />


                        <Image fluid src="/public/Images/RightArrow.png" style={{ cursor: 'pointer', zIndex: '1', filter: 'invert(100%) brightness(75%)' }}
                            onClick={() => handleClick(true)} />


                    </div>

                    <div style={{ overflowX: 'hidden' }}>
                        <div style={{ width: '100%', display: 'flex', transform: `translateX(${moveAlong}%)`, transition: 'transform 1s ease-in-out' }}>
                            {Object.keys(FD).map((food, index) => (
                                <FoodCard key={index} activeElement={index === activeIndex}
                                    image={FD[food].img} titleEng={FD[food].titleEng}
                                    titleJap={FD[food].titleJap} desc={FD[food].desc}
                                    color={FD[food].color} />
                            ))}
                        </div>
                    </div>
                </Container>
            </Container>


        </>

    )
}

//<a href="https://www.freepik.com/icon/next_17214681#fromView=search&page=1&position=0&uuid=d174364e-8d06-46f3-8b15-40ca125be8bf">Icon by Icon Desai</a> arrow
