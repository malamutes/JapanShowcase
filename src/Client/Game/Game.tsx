import { Container, Row, Col, Image, Form } from "react-bootstrap";
import './Game.css'
import { useEffect, useState } from "react";

export default function Games() {
    const [hoverDurationOne, setHoverDurationOne] = useState<number>(0);
    const [timerOne, setTimerOne] = useState<number | null>(null);
    const [timerDropOne, setTimerDropOne] = useState<number | null>(null);

    //0 and 150 hover dur
    function startTimerOne() {
        if (hoverDurationOne < 150) {
            if (timerDropOne) {
                clearInterval(timerDropOne);
                setTimerDropOne(null);
            }

            const newTimer = setInterval(() => {
                setHoverDurationOne(hoverDurationOne => (Math.min(hoverDurationOne + 1, 150)));
            }, 10); // 10ms

            setTimerOne(newTimer)
        }

    };

    function stopTimerOne() {
        if (hoverDurationOne < 150) {
            if (timerOne) {
                clearInterval(timerOne);
                setTimerOne(null);
            }

            console.log("hello1");

            const newTimer = setInterval(() => {
                setHoverDurationOne(hoverDurationOne => (Math.max(hoverDurationOne - 1, 0)));
            }, 10); // 10ms

            setTimerDropOne(newTimer);
        }

    }


    useEffect(() => {
        if (hoverDurationOne <= 0 && timerDropOne) {
            clearInterval(timerDropOne);
            setTimerDropOne(null);
        }
        else if (hoverDurationOne >= 150 && timerOne) {
            clearInterval(timerOne);
            setTimerOne(null);
        }
        console.log(hoverDurationOne);
    }, [hoverDurationOne]);

    // Timer 2
    const [hoverDurationTwo, setHoverDurationTwo] = useState<number>(0);
    const [timerTwo, setTimerTwo] = useState<number | null>(null);
    const [timerDropTwo, setTimerDropTwo] = useState<number | null>(null);

    function startTimerTwo() {
        if (hoverDurationTwo < 150) {
            if (timerDropTwo) {
                clearInterval(timerDropTwo);
                setTimerDropTwo(null);
            }

            const newTimer = setInterval(() => {
                setHoverDurationTwo(hoverDurationTwo => Math.min(hoverDurationTwo + 1, 150));
            }, 10); // 10ms

            setTimerTwo(newTimer);
        }
    }

    function stopTimerTwo() {
        if (hoverDurationTwo < 150) {
            if (timerTwo) {
                clearInterval(timerTwo);
                setTimerTwo(null);
            }

            console.log("hello2");

            const newTimer = setInterval(() => {
                setHoverDurationTwo(hoverDurationTwo => Math.max(hoverDurationTwo - 1, 0));
            }, 10); // 10ms

            setTimerDropTwo(newTimer);
        }
    }

    useEffect(() => {
        if (hoverDurationTwo <= 0 && timerDropTwo) {
            clearInterval(timerDropTwo);
            setTimerDropTwo(null);
        }
        else if (hoverDurationTwo >= 150 && timerTwo) {
            clearInterval(timerTwo);
            setTimerTwo(null);
        }
        console.log(hoverDurationTwo);
    }, [hoverDurationTwo]);

    // Timer 3
    const [hoverDurationThree, setHoverDurationThree] = useState<number>(0);
    const [timerThree, setTimerThree] = useState<number | null>(null);
    const [timerDropThree, setTimerDropThree] = useState<number | null>(null);
    function startTimerThree() {
        if (hoverDurationThree < 150) {
            if (timerDropThree) {
                clearInterval(timerDropThree);
                setTimerDropThree(null);
            }

            const newTimer = setInterval(() => {
                setHoverDurationThree(hoverDurationThree => Math.min(hoverDurationThree + 1, 150));
            }, 10); // 10ms

            setTimerThree(newTimer);
        }
    }

    function stopTimerThree() {
        if (hoverDurationThree < 150) {
            if (timerThree) {
                clearInterval(timerThree);
                setTimerThree(null);
            }
            console.log("hello3");

            const newTimer = setInterval(() => {
                setHoverDurationThree(hoverDurationThree => Math.max(hoverDurationThree - 1, 0));
            }, 10); // 10ms

            setTimerDropThree(newTimer);
        }
    }

    useEffect(() => {
        if (hoverDurationThree <= 0 && timerDropThree) {
            clearInterval(timerDropThree);
            setTimerDropThree(null);
        }
        else if (hoverDurationThree >= 150 && timerThree) {
            clearInterval(timerThree);
            setTimerThree(null);
        }
    }, [hoverDurationThree]);

    // Timer 4
    const [hoverDurationFour, setHoverDurationFour] = useState<number>(0);
    const [timerFour, setTimerFour] = useState<number | null>(null);
    const [timerDropFour, setTimerDropFour] = useState<number | null>(null);

    function startTimerFour() {
        if (hoverDurationFour < 150) {
            if (timerDropFour) {
                clearInterval(timerDropFour);
                setTimerDropFour(null);
            }

            const newTimer = setInterval(() => {
                setHoverDurationFour(hoverDurationFour => Math.min(hoverDurationFour + 1, 150));
            }, 10); // 10ms

            setTimerFour(newTimer);
        }
    }

    function stopTimerFour() {
        if (hoverDurationFour < 150) {
            if (timerFour) {
                clearInterval(timerFour);
                setTimerFour(null);
            }
            console.log("hello4");

            const newTimer = setInterval(() => {
                setHoverDurationFour(hoverDurationFour => Math.max(hoverDurationFour - 1, 0));
            }, 10); // 10ms

            setTimerDropFour(newTimer);
        }
    }

    useEffect(() => {
        if (hoverDurationFour <= 0 && timerDropFour) {
            clearInterval(timerDropFour);
            setTimerDropFour(null);
        }
        else if (hoverDurationFour >= 150 && timerFour) {
            clearInterval(timerFour);
            setTimerFour(null);
        }
    }, [hoverDurationFour]);

    // Timer 5
    const [hoverDurationFive, setHoverDurationFive] = useState<number>(0);
    const [timerFive, setTimerFive] = useState<number | null>(null);
    const [timerDropFive, setTimerDropFive] = useState<number | null>(null);

    function startTimerFive() {
        if (hoverDurationFive < 150) {
            if (timerDropFive) {
                clearInterval(timerDropFive);
                setTimerDropFive(null);
            }

            const newTimer = setInterval(() => {
                setHoverDurationFive(hoverDurationFive => Math.min(hoverDurationFive + 1, 150));
            }, 10); // 10ms

            setTimerFive(newTimer);
        }
    }

    function stopTimerFive() {
        if (hoverDurationFive < 150) {
            if (timerFive) {
                clearInterval(timerFive);
                setTimerFive(null);
            }
            console.log("hello5");

            const newTimer = setInterval(() => {
                setHoverDurationFive(hoverDurationFive => Math.max(hoverDurationFive - 1, 0));
            }, 10); // 10ms

            setTimerDropFive(newTimer);
        }
    }

    useEffect(() => {
        if (hoverDurationFive <= 0 && timerDropFive) {
            clearInterval(timerDropFive);
            setTimerDropFive(null);
        }
        else if (hoverDurationFive >= 150 && timerFive) {
            clearInterval(timerFive);
            setTimerFive(null);
        }
    }, [hoverDurationFive]);

    return (
        <>
            <Container style={{ maxWidth: '100vw', backgroundColor: "rgba(15, 15, 15, 1)", marginBottom: '3.75cqw' }}>
                <h1 className="CommonHeader">Cult Favorites</h1>
                <Container >
                    <Row >
                        <Col>
                            <div className={`animated-border`} onMouseEnter={() => startTimerOne()} onMouseLeave={() => stopTimerOne()}
                                style={{
                                    filter: `brightness(${hoverDurationOne === 150 ? 1 : 0.75})`,
                                    backgroundImage: `conic-gradient(rgba(127, 127, 127, ${hoverDurationOne === 150 ? 1 : 0.5}) ${hoverDurationOne / 1.5}%, transparent ${hoverDurationOne}%`,
                                    cursor: `${hoverDurationOne === 150 ? "pointer" : "progress"}`
                                }}>
                                <div style={{ transform: 'scale(0.975)', overflow: 'hidden' }}>
                                    <Image src="/Public/Images/GameImages/Bloodborne.webp" alt="Bloodborne" fluid style={{
                                        filter: `grayscale(${hoverDurationOne === 150 ? "0%" : "100%"})`,
                                        transition: 'transform 1s', transform: `scale(${hoverDurationOne === 150 ? 1.15 : 1})`
                                    }} />
                                </div>

                            </div>

                        </Col>

                        <Col>
                            <Row style={{ margin: '0' }}>
                                <div className={`animated-border`} onMouseEnter={() => startTimerTwo()} onMouseLeave={() => stopTimerTwo()}
                                    style={{
                                        filter: `brightness(${hoverDurationTwo === 150 ? 1 : 0.75})`,
                                        backgroundImage: `conic-gradient(rgba(204, 173, 0, ${hoverDurationTwo === 150 ? 1 : 0.5}) ${hoverDurationTwo / 1.5}%, transparent ${hoverDurationTwo}%`,
                                        cursor: `${hoverDurationTwo === 150 ? "pointer" : "progress"}`
                                    }}>
                                    <div style={{ transform: 'scaleY(0.95)', overflow: 'hidden' }}>
                                        <Image src="/Public/Images/GameImages/YakuzaZero.webp" alt="YakuzaZero" fluid style={{
                                            filter: `grayscale(${hoverDurationTwo === 150 ? "0%" : "100%"})`,
                                            transition: 'transform 1s', transform: `scale(${hoverDurationTwo === 150 ? 1.1 : 1})`
                                        }} />
                                    </div>

                                </div>
                            </Row>
                            <Row style={{ margin: '0' }}>
                                <Col style={{ paddingTop: '2%' }}>
                                    <Row >
                                        <div className={`animated-border`} onMouseEnter={() => startTimerThree()} onMouseLeave={() => stopTimerThree()}
                                            style={{
                                                filter: `brightness(${hoverDurationThree === 150 ? 1 : 0.75})`,
                                                backgroundImage: `conic-gradient(rgba(102, 0, 102, ${hoverDurationThree === 150 ? 1 : 0.5}) ${hoverDurationThree / 1.5}%, transparent ${hoverDurationThree}%`,
                                                cursor: `${hoverDurationThree === 150 ? "pointer" : "progress"}`
                                            }}>
                                            <div style={{ transform: 'scaleY(0.90)', overflow: 'hidden' }}>
                                                <Image src="/Public/Images/GameImages/SMTThree.webp" alt="SMTThree" fluid style={{
                                                    filter: `grayscale(${hoverDurationThree === 150 ? "0%" : "100%"})`,
                                                    transition: 'transform 1s', transform: `scale(${hoverDurationThree === 150 ? 1.15 : 1})`
                                                }} />
                                            </div>

                                        </div>
                                    </Row>

                                    <Row style={{ paddingTop: '4%' }}>
                                        <div className={`animated-border`} onMouseEnter={() => startTimerFour()} onMouseLeave={() => stopTimerFour()}
                                            style={{

                                                backgroundImage: `conic-gradient(rgba(204, 0, 0, ${hoverDurationFour === 150 ? 1 : 0.5}) ${hoverDurationFour / 1.5}%, transparent ${hoverDurationFour}%`,
                                                cursor: `${hoverDurationFour === 150 ? "pointer" : "progress"}`
                                            }}>
                                            <div style={{ transform: 'scaleY(0.90)', overflow: 'hidden' }}>
                                                <Image src="/Public/Images/GameImages/PersonaFive.webp" alt="PersonaFive" fluid style={{
                                                    filter: `grayscale(${hoverDurationFour === 150 ? "0%" : "100%"})`,
                                                    transition: 'transform 1s', transform: `scale(${hoverDurationFour === 150 ? 1.15 : 1})`
                                                }} />
                                            </div>

                                        </div>
                                    </Row>

                                </Col>

                                <Col style={{ paddingTop: '2%' }}>
                                    <div className={`animated-border`} onMouseEnter={() => startTimerFive()} onMouseLeave={() => stopTimerFive()}
                                        style={{

                                            backgroundImage: `conic-gradient(rgba(0, 0, 204, ${hoverDurationFive === 150 ? 1 : 0.5}) ${hoverDurationFive / 1.5}%, transparent ${hoverDurationFive}%`,
                                            cursor: `${hoverDurationFive === 150 ? "pointer" : "progress"}`
                                        }}>
                                        <div style={{ transform: 'scale(0.95)', overflow: 'hidden' }}>
                                            <Image src="/Public/Images/GameImages/MGR.webp" alt="MGR" fluid style={{
                                                filter: `grayscale(${hoverDurationFive === 150 ? "0%" : "100%"})`,
                                                transition: 'transform 1s', transform: `scale(${hoverDurationFive === 150 ? 1.1 : 1})`
                                            }} />
                                        </div>
                                    </div>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </Container >
            </Container>


        </>
    )
}