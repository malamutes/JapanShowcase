import { useContext } from "react";
import { PrefectureContext } from "./PrefectureAppContext";


export default function Dummy() {
    const CP = useContext(PrefectureContext)
    return (
        <>
            {CP}
        </>
    );
}