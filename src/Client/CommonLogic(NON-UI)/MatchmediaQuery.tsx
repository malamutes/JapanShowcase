import { useEffect, useRef } from "react";

interface matchmediaQueryProps {
    size: number,
    more: boolean;
    setMore: React.Dispatch<React.SetStateAction<boolean>>;

}

export default function MatchmediaQuery(props: matchmediaQueryProps) {
    const { size, more, setMore } = props;

    const ref = useRef(window.matchMedia(`(min-width: ${size}px)`));
    useEffect(() => {
        const handler = () => {
            setMore(ref.current.matches)
        }

        handler();
        ref.current.addEventListener('change', handler);

        return () => {
            ref.current.removeEventListener('change', handler);
        }
    }, [])
    return more
}