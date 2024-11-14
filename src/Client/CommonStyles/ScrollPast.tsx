import { useState } from "react";
import { useEffect } from "react";

export default function checkScrollPosition(positionToCheck: number, container: React.RefObject<HTMLDivElement>) {
    const [isScrollPast, setIsScrollPast] = useState(false);
    useEffect(() => {
        const toggleSetIsScrollPast = () => {
            if (container.current != null) {
                const threshold = window.innerHeight * (positionToCheck);
                const containerRect = container.current.getBoundingClientRect();
                if (threshold - containerRect.top >= 0) {
                    console.log("yippie!");
                    setIsScrollPast(true);
                }
            }

        }

        if (isScrollPast === false) {
            window.addEventListener('scroll', toggleSetIsScrollPast);
        }


        return () => {
            window.removeEventListener('scroll', toggleSetIsScrollPast);
        }

    }, [isScrollPast])
    return isScrollPast;
}