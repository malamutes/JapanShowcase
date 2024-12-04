import { useParams } from "react-router-dom"
import { FoodContext } from "./FoodAppContext";
import MainImageFood from './MainImageFood/MainImageFood'
import FoodImageSection from "./FoodImageCard/FoodImageSection";
import FoodSelector from "./FoodSelector/FoodSelector";
import ComplimentaryFood from "./ComplimentaryFood/ComplimentaryFood";
import FoodNavigation from "./FoodNavigation/FoodNavigation";
import CommonNavCompTop from "../CommonNavigationComponents/CommonNavComp";
import ReferenceBar from "../Mainpage/ReferenceBar/ReferenceBar";


export default function FoodApp() {
    const { CurrentFood } = useParams();

    return (
        <>
            <div className="SubpageAppRoot">
                <FoodContext.Provider value={CurrentFood!}>
                    <CommonNavCompTop />
                    <MainImageFood />
                    <FoodImageSection />
                    <FoodSelector />
                    <ComplimentaryFood />
                    <FoodNavigation />
                    <ReferenceBar />
                </FoodContext.Provider>
            </div>
        </>
    )
}
