import { useEffect, useState } from "react"

export default function WebsiteIntro() {
    const [intro, setIntro] = useState(true);

    const [ended, SetEnded] = useState(false);

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
