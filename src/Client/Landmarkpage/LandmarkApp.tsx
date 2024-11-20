import LandmarkIntro from "./LandmarkIntro/LandmarkIntro"
import LandmarkCircleCarouselSection from "./LandmarkCircleCarousel/LandmarkCircleCarousel"
import LandmarkTab from "./LandmarkTab/LandmarkTab"
import LandmarkCard from "./LandmarkCard/LandmarkCard"
import LandmarkNavigation from "./LandmarkNavigation/LandmarkNavigation"

export default function LandmarkApp() {
    return (
        <>
            <div className="LandmarkAppRoot">
                <LandmarkIntro />
                <LandmarkCircleCarouselSection />
                <LandmarkTab />
                <LandmarkCard />
                <LandmarkNavigation />
            </div>
        </>
    )
}