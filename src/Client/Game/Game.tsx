import { Container, Row, Col, Image, Form } from "react-bootstrap";
import './Game.css'
import { useEffect, useState } from "react";

export default function Games() {
    const [hoverDuration, setHoverDuration] = useState<number[]>([0, 0, 0, 0, 0]);
    const [timers, setTimers] = useState<Array<number | null>>(Array(5).fill(null));
    const [timersDrop, setTimersDrop] = useState<Array<number | null>>(Array(5).fill(null));



    //0 and 150 hover dur
    function startTimer(index: number) {
        const newTimersDrop = [...timersDrop];
        const newTimers = [...timers];

        if (newTimersDrop[index]) {
            clearInterval(newTimersDrop[index]);
            newTimersDrop[index] = null;
        }

        setTimersDrop(newTimersDrop);

        const newTimer = setInterval(() => {
            setHoverDuration(prevHoverDuration => {
                const newDuration = Math.min(prevHoverDuration[index] + 1, 150);
                return [...prevHoverDuration.slice(0, index), newDuration, ...prevHoverDuration.slice(index + 1)];
            });
        }, 10); // 10ms


        newTimers[index] = newTimer;
        setTimers(newTimers);
    };

    function stopTimer(index: number) {
        const newTimersDrop = [...timersDrop];
        const newTimers = [...timers];

        if (newTimers[index]) {
            clearInterval(newTimers[index]);
            newTimers[index] = null;
        }

        setTimers(newTimers);

        const newTimer = setInterval(() => {
            setHoverDuration(prevHoverDuration => {
                const newDuration = Math.max(prevHoverDuration[index] - 1, 0);
                return [...prevHoverDuration.slice(0, index), newDuration, ...prevHoverDuration.slice(index + 1)];
            });
        }, 10); // 10ms

        newTimersDrop[index] = newTimer;
        setTimersDrop(newTimersDrop);

    }

    useEffect(() => {
        const newTimersDrop = [...timersDrop];
        for (let i = 0; i < 5; i++) {
            if (hoverDuration[i] <= 0 && timersDrop[i] !== null) {
                clearInterval(timersDrop[i]!);
                newTimersDrop[i] = null;
                setTimersDrop(newTimersDrop);
            }
        }
        console.log(hoverDuration);
    }, [hoverDuration]);



    return (
        <>
            <Container>
                <h1 style={{ margin: '75px', textAlign: 'center' }}>GAMES WHICH LORE I LIKE</h1>
                <Row >
                    <Col>
                        <div className={`animated-border`} onMouseEnter={() => startTimer(0)} onMouseLeave={() => stopTimer(0)}
                            style={{
                                backgroundImage: `conic-gradient(darkgrey ${hoverDuration[0] / 1.5}%, transparent ${hoverDuration[0]}%`,
                                cursor: `${hoverDuration[0] === 150 ? "pointer" : "progress"}`
                            }}>
                            <Image src="/Public/Images/GameImages/Bloodborne.jpg" fluid style={{ padding: '5px' }} />
                        </div>

                    </Col>

                    <Col>
                        <Row >
                            <div className={`animated-border`} onMouseEnter={() => startTimer(1)} onMouseLeave={() => stopTimer(1)}
                                style={{
                                    backgroundImage: `conic-gradient(yellow ${hoverDuration[1] / 1.5}%, transparent ${hoverDuration[1]}%`,
                                    cursor: `${hoverDuration[1] === 150 ? "pointer" : "progress"}`
                                }}>
                                <Image src="/Public/Images/GameImages/YakuzaZero.jpg" fluid style={{ padding: '5px' }} />
                            </div>
                        </Row>
                        <Row>
                            <Col style={{ paddingTop: '2%' }}>

                                <Row >
                                    <div className={`animated-border`} onMouseEnter={() => startTimer(2)} onMouseLeave={() => stopTimer(2)}
                                        style={{
                                            backgroundImage: `conic-gradient(purple ${hoverDuration[2] / 1.5}%, transparent ${hoverDuration[2]}%`,
                                            cursor: `${hoverDuration[2] === 150 ? "pointer" : "progress"}`
                                        }}>
                                        <Image src="/Public/Images/GameImages/SMTThree.jpg" fluid style={{ padding: '5px' }} />
                                    </div>
                                </Row>

                                <Row style={{ paddingTop: '4%' }}>
                                    <div className={`animated-border`} onMouseEnter={() => startTimer(3)} onMouseLeave={() => stopTimer(3)}
                                        style={{
                                            backgroundImage: `conic-gradient(red ${hoverDuration[3] / 1.5}%, transparent ${hoverDuration[3]}%`,
                                            cursor: `${hoverDuration[3] === 150 ? "pointer" : "progress"}`
                                        }}>
                                        <Image src="/Public/Images/GameImages/PersonaFive.jpg" fluid style={{ padding: '5px' }} />
                                    </div>
                                </Row>

                            </Col>

                            <Col style={{ paddingTop: '1%' }}>
                                <div className={`animated-border`} onMouseEnter={() => startTimer(4)} onMouseLeave={() => stopTimer(4)}
                                    style={{
                                        backgroundImage: `conic-gradient(blue ${hoverDuration[4] / 1.5}%, transparent ${hoverDuration[4]}%`,
                                        cursor: `${hoverDuration[4] === 150 ? "pointer" : "progress"}`
                                    }}>
                                    <Image src="/Public/Images/GameImages/MGR.jpg" fluid style={{ padding: '5px' }} />
                                </div>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container >

        </>
    )
}