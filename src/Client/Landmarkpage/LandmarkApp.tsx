import LandmarkIntro from "./LandmarkIntro/LandmarkIntro"
import LandmarkCircleCarouselSection from "./LandmarkCircleCarousel/LandmarkCircleCarousel"
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
                <LandmarkCircleCarouselSection />
                <LandmarkTab />
                <LandmarkCard />
                <LandmarkNavigation />
                <ReferenceBar />
            </div>
        </>
    )
}
