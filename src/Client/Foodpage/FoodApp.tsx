import { useParams } from "react-router-dom"

export default function FoodApp() {
    const { CurrentFood } = useParams();
    return (
        <>
            {`HELLO WORLD I AM EATING ${CurrentFood}`}
        </>
    )
}