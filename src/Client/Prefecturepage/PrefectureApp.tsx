import { useParams } from "react-router-dom"
import { useState, useContext } from "react";
import Dummy from "./dummy";
import { PrefectureContext } from "./PrefectureAppContext";


export default function PrefectureApp() {
    const { CurrentPrefecture } = useParams();

    //get data using current prefecture and then pass the data into sub components using value 
    //we will need to redefine the type in context provider


    return (
        <>
            <PrefectureContext.Provider value={CurrentPrefecture!}>
                <Dummy />
            </PrefectureContext.Provider>

        </>
    )
}