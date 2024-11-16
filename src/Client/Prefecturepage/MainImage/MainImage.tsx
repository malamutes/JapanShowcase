import { useContext, useEffect } from "react";
import { PrefectureContext } from "../PrefectureAppContext";
import { Image } from "react-bootstrap";



export default function MainImage() {
    const CP = useContext(PrefectureContext)

    useEffect(() => {
        // Trigger holder.js after component mount
        if (window.Holder) {
            window.Holder.run(); // Apply the placeholder transformation
        }
    }, []); // Empty dependency ensures it runs once after mount

    return (
        <>
            <Image fluid src={`holder.js/1920x900?text=${CP}`} />
        </>
    );
}