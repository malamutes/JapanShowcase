import { useContext, useEffect } from "react";
import { PrefectureContext } from "../PrefectureAppContext";
import { Image } from "react-bootstrap";



export default function MainImage() {
    const CP = useContext(PrefectureContext)


    return (
        <>
            <Image fluid src={`holder.js/1920x900?text=${CP}`} />
        </>
    );
}