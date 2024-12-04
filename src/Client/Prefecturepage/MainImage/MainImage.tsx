import { useContext, useEffect, useState, useLayoutEffect, } from "react";
import { PrefectureContext } from "../PrefectureAppContext";
import { Image } from "react-bootstrap";
import clamp from "../../../Clamp";
import InfoSection from "../InfoSection/InfoSection";
import CommonDividers from "../../CommonNavigationComponents/CommonDividers";
import { Container } from "react-bootstrap";
import './MainImage.css'
import { LightThemeContext } from "../../../ThemeContext";


export default function MainImage() {
    const CP = useContext(PrefectureContext)
    const [isDisplay, setIsDisplay] = useState(true);


    const [scrollAmount, setScrollAmount] = useState(0);

    useLayoutEffect(() => {
        history.scrollRestoration = 'manual'; // Prevents browser from restoring scroll position
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);


    useEffect(() => {
        setIsDisplay(true);
        setScrollAmount(0);
    }, [CP])


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

    const { light } = useContext(LightThemeContext);

    return (
        <>
            <div style={{ position: 'relative' }}>
                <Image src="/Images/right_arrow.png"
                    alt="DownArrow"
                    style={{
                        position: 'fixed',
                        zIndex: 1,
                        bottom: '50px',
                        right: '50px',
                        width: '55px',
                        display: `${isDisplay === true ? 'none' : 'inline-block'}`,
                        transform: 'rotate(-90deg)',
                        cursor: 'pointer',
                        filter: `${light ? "" : "invert(0.75)"}`
                    }}
                    onClick={() => {
                        handleClick();
                        setIsDisplay(true);
                        setScrollAmount(0);
                    }}
                >
                </Image>
                <div style={{
                    transform: `translateX(-50%) translateY(-${scrollAmount}%)`, zIndex: 5,
                }} className="PrefectureAppMainImage">
                    <div className="PrefectureAppMainImageText">
                        <p style={{ fontSize: '35px', fontWeight: '700' }}>
                            Welcome to {CP}
                        </p>
                        <span style={{ fontSize: '20px' }}>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vivamus luctus urna sed urna ultricies ac tempor dui sagittis."
                        </span>
                    </div>
                </div>
            </div>
            <Container style={{ marginTop: '-50px' }} id="Home">
                <Container style={{ top: '200px', position: 'relative', marginBottom: '200px' }}>
                    <CommonDividers onScroll={!isDisplay} />
                </Container>
            </Container>
            <InfoSection onScroll={!isDisplay} />
        </>
    );
}