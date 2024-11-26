import { useContext, useEffect, useState } from "react";
import { PrefectureContext } from "../PrefectureAppContext";
import { Image } from "react-bootstrap";
import { clamp } from "../../../main";
import InfoSection from "../InfoSection/InfoSection";
import CommonDividers from "../../CommonNavigationComponents/CommonDividers";
import { Container } from "react-bootstrap";

export default function MainImage() {
    const CP = useContext(PrefectureContext)
    const [isDisplay, setIsDisplay] = useState(true);
    const [scrollAmount, setScrollAmount] = useState(0);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (isDisplay) {
                e.preventDefault(); // Prevent scrolling
                setScrollAmount(scrollAmount => clamp(scrollAmount + e.deltaY / 20, 0, 100))
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            const keysToPrevent = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", "Space"];
            if (keysToPrevent.includes(e.key) && isDisplay) {
                e.preventDefault();
            }
        };

        if (isDisplay) {
            window.addEventListener("wheel", handleWheel, { passive: false });
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("keydown", handleKeyDown);
        };

    }, [isDisplay])

    useEffect(() => {
        if (scrollAmount >= 100) {
            setIsDisplay(false);
        }
    }, [scrollAmount])

    useEffect(() => {
        const handleHome = (e: KeyboardEvent) => {
            if (e.key === "Home") {
                if (isDisplay === false) {
                    window.scrollTo(0, 0);
                    setIsDisplay(true);
                    setScrollAmount(0);
                    console.log("hi")
                }

            }
        }

        if (isDisplay === false) {
            window.addEventListener("keydown", handleHome);
        }

        return () => {
            window.removeEventListener("keydown", handleHome);
        }
    }, [isDisplay])

    const handleClick = () => {
        window.scrollTo(0, 0);
    }

    return (
        <>
            <div>
                <Image src="/Images/right_arrow.png"
                    alt="DownArrow"
                    style={{
                        position: 'fixed',
                        zIndex: 10,
                        bottom: '50px',
                        right: '50px',
                        width: '55px',
                        display: `${isDisplay === true ? 'none' : 'inline-block'}`,
                        transform: 'rotate(-90deg)',
                        cursor: 'pointer'
                    }}
                    onClick={() => {
                        handleClick();
                        setIsDisplay(true);
                        setScrollAmount(0);
                    }}
                >
                </Image>
                <div style={{
                    width: '100vw', height: '100vh', position: 'absolute', transform: `translateY(-${scrollAmount}%)`, zIndex: 5,
                    backgroundColor: 'red', backgroundImage: 'url(https://placehold.co/1920x968)',
                    backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
                }}>
                    <div style={{
                        position: 'absolute', zIndex: 5, margin: 'auto', top: '50%', left: '50%',
                        transform: 'translate(-50%, -50%)', textAlign: 'center'
                    }}>
                        <p style={{ fontSize: '35px' }}>
                            Dolor Sit Amet
                        </p>
                        <span style={{ fontSize: '20px' }}>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vivamus luctus urna sed urna ultricies ac tempor dui sagittis."
                        </span>
                    </div>
                </div>
            </div>
            <Container style={{ marginTop: '-50px' }}>
                <Container style={{ top: '200px', position: 'relative', marginBottom: '200px' }}>
                    <CommonDividers onScroll={!isDisplay} />
                </Container>
            </Container>
            <InfoSection onScroll={!isDisplay} />
        </>
    );
}