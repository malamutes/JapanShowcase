import { useParams } from "react-router-dom"
import { PrefectureContext } from "./PrefectureAppContext";
import MainImage from "./MainImage/MainImage";
import InfoSection from "./InfoSection/InfoSection";
import TwoTextSection from "./TwoTextSection/TwoTextSection";
import ImageSection from "./ImageSection/ImageSection";
import HorizontalCardSection from "./HorizontalCard/HorizontalCardSection";
import NavigationPrefecture from "./Navigation/NavigationPrefecture";
import CommonNavCompTop from "../CommonNavigationComponents/CommonNavComp";
import ReferenceBar from "../Mainpage/ReferenceBar/ReferenceBar";

export default function PrefectureApp() {
    const { CurrentPrefecture } = useParams();

    //get data using current prefecture and then pass the data into sub components using value 
    //we will need to redefine the type in context provider

    return (
        <>
            <div className="PrefectureAppRoot">
                <PrefectureContext.Provider value={CurrentPrefecture!}>
                    <CommonNavCompTop />
                    <MainImage />
                    <InfoSection />
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

