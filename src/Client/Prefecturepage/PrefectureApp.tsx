import { useParams } from "react-router-dom"
import { PrefectureContext } from "./PrefectureAppContext";
import MainImage from "./MainImage/MainImage";
import TwoTextSection from "./TwoTextSection/TwoTextSection";
import ImageSection from "./ImageSection/ImageSection";
import HorizontalCardSection from "./HorizontalCard/HorizontalCardSection";
import NavigationPrefecture from "./Navigation/NavigationPrefecture";
import CommonNavCompTop from "../CommonNavigationComponents/CommonNavComp";
import ReferenceBar from "../Mainpage/ReferenceBar/ReferenceBar";
import { LightThemeContext } from "../../ThemeContext";
import { useContext } from "react";

export default function PrefectureApp() {
    const { CurrentPrefecture } = useParams();

    const { light } = useContext(LightThemeContext)

    //get data using current prefecture and then pass the data into sub components using value 
    //we will need to redefine the type in context provider

    return (
        <>
            <div className={`${light ? "SubpageAppRoot" : "SubpageAppRootDark"}`}>
                <PrefectureContext.Provider value={CurrentPrefecture!}>
                    <CommonNavCompTop />
                    <MainImage />
                    <TwoTextSection />
                    <ImageSection />
                    <HorizontalCardSection />
                    <NavigationPrefecture />
                    <ReferenceBar />
                </PrefectureContext.Provider>
            </div>
        </>
    )
}

