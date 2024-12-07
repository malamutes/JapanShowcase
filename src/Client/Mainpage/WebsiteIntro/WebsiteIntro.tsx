import { useEffect, useState } from "react"

export default function WebsiteIntro() {
    const [intro, setIntro] = useState(false);

    const [ended, SetEnded] = useState(false);

    useEffect(() => {
        if (intro) {
            document.documentElement.style.setProperty('--scrollbar-display', 'none');
        }
        else {
            document.documentElement.style.setProperty('--scrollbar-display', 'block');
        }
    }, [intro]);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (intro) {
                e.preventDefault();
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            const keysToPrevent = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", "Space"];
            if (keysToPrevent.includes(e.key) && intro) {
                e.preventDefault();
            }
        };

        if (intro) {
            window.addEventListener("wheel", handleWheel, { passive: false });
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };

    }, [intro])

    useEffect(() => {
        const timer = setTimeout(() => {
            setIntro(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            SetEnded(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            <div style={{
                width: '100vw', height: '100vh',
                backgroundColor: 'transparent',
                position: 'fixed', zIndex: '10000',
                transition: 'clip-path 1.5s ease-out',
                clipPath: `inset(0 0 0 ${intro ? 0 : 100}%)`,
                display: `${ended ? 'none' : 'block'}`
            }}>
                <video autoPlay muted playsInline style={{ transform: "translateY(-7.5%)" }} >
                    <source src="/Images/IntroIconVideo.mp4" type="video/mp4" />
                </video>
            </div>


        </>
    )
}
