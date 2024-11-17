import { useParams } from "react-router-dom"
import { FoodContext } from "./PrefectureAppContext";
import MainImageFood from './MainImageFood/MainImageFood'
import FoodImageSection from "./FoodImageCard/FoodImageSection";
import FoodSelector from "./FoodSelector/FoodSelector";
import ComplimentaryFood from "./ComplimentaryFood/ComplimentaryFood";
import FoodNavigation from "./FoodNavigation/FoodNavigation";

export default function FoodApp() {
    const { CurrentFood } = useParams();

    return (
        <>
            <div className="FoodAppRoot">
                <FoodContext.Provider value={CurrentFood!}>
                    <MainImageFood />
                    <FoodImageSection />
                    <FoodSelector />
                    <ComplimentaryFood />
                    <FoodNavigation />
                </FoodContext.Provider>
            </div>
        </>
    )
}