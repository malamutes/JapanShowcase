import LandmarkIntro from "./LandmarkIntro/LandmarkIntro"
import LandmarkCardSection from "./LandmarkCardSection/LandmarkHorizontalCard"
import LandmarkTab from "./LandmarkTab/LandmarkTab"
import LandmarkCard from "./LandmarkCard/LandmarkCard"
import LandmarkNavigation from "./LandmarkNavigation/LandmarkNavigation"
import CommonNavCompTop from "../CommonNavigationComponents/CommonNavComp"
import ReferenceBar from "../Mainpage/ReferenceBar/ReferenceBar"

export default function LandmarkApp() {
    return (
        <>
            <div className="LandmarkAppRoot">
                <CommonNavCompTop />
                <LandmarkIntro />
                <LandmarkCardSection />
                <LandmarkTab />
                <LandmarkCard />
                <LandmarkNavigation />
                <ReferenceBar />
            </div>
        </>
    )
}
