import LandmarkIntro from "./LandmarkIntro/LandmarkIntro"
import LandmarkCardSection from "./LandmarkCardSection/LandmarkHorizontalCard"
import LandmarkTab from "./LandmarkTab/LandmarkTab"
import LandmarkCard from "./LandmarkCard/LandmarkCard"
import LandmarkNavigation from "./LandmarkNavigation/LandmarkNavigation"
import CommonNavCompTop from "../CommonNavigationComponents/CommonNavComp"
import ReferenceBar from "../Mainpage/ReferenceBar/ReferenceBar"
import { useParams } from "react-router-dom"
import { LandmarkContext } from "./LandmarkAppContext"
import { LightThemeContext } from "../../ThemeContext"
import { useContext } from "react"

export default function LandmarkApp() {
    const { CurrentLandmark } = useParams();
    const { light } = useContext(LightThemeContext);
    return (
        <>
            <div className={`${light ? "SubpageAppRoot" : "SubpageAppRootDark"}`}>
                <LandmarkContext.Provider value={CurrentLandmark!}>
                    <CommonNavCompTop />
                    <LandmarkIntro />
                    <LandmarkCardSection />
                    <LandmarkTab />
                    <LandmarkCard />
                    <LandmarkNavigation />
                    <ReferenceBar />
                </LandmarkContext.Provider>

            </div>
        </>
    )
}
