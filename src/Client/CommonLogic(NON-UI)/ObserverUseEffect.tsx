import { useEffect } from "react";

interface ObserverIntersectionUseEffectProps {
    scrollPast: boolean;
    setScrollPast: React.Dispatch<React.SetStateAction<boolean>>;
    compRef: React.RefObject<HTMLDivElement>;
}

export default function ObserverIntersectionUseEffect(props: ObserverIntersectionUseEffectProps) {
    const { scrollPast, setScrollPast, compRef } = props;

    //dont want it to keep running
    useEffect(() => {
        const Observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setScrollPast(true);
                }
            });
        }
            ,
            { threshold: 0.1 }
        )

        if (compRef.current && scrollPast === false) {
            Observer.observe(compRef.current);
        }

        return () => {
            if (compRef.current) {
                Observer.unobserve(compRef.current);
            }
        }
    }, [scrollPast])

    return scrollPast;
}