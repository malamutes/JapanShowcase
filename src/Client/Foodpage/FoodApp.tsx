import { useParams } from "react-router-dom"
import { FoodContext } from "./PrefectureAppContext";
import MainImageFood from './MainImageFood/MainImageFood'
import FoodImageSection from "./FoodImageCard/FoodImageSection";


export default function FoodApp() {
    const { CurrentFood } = useParams();

    return (
        <>
            <div className="FoodAppRoot">
                <FoodContext.Provider value={CurrentFood!}>
                    <MainImageFood />
                    <FoodImageSection />
                </FoodContext.Provider>
            </div>
        </>
    )
}