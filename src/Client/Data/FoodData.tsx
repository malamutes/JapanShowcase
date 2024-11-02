interface FoodCard {
    title: string;
    img: string;
}

const FoodData: { [key: string]: FoodCard } = {
    'Sushi': {
        title: "Sushi (すし)",
        img: `/Public/Images/FoodImages/Sushi.jpg`
    },
    'Ramen': {
        title: "Ramen (ラーメン)",
        img: `/Public/Images/FoodImages/Ramen.jpg`
    },
    'Tempura': {
        title: "Tempura (天ぷら)",
        img: `/Public/Images/FoodImages/Tempura.jpg`
    },
    'Okonomiyaki': {
        title: " (お好み焼き)", //Okonomiyaki
        img: `/Public/Images/FoodImages/Okonomiyaki.jpg`
    },
    'Yakisoba': {
        title: "Yakisoba (焼きそば)",
        img: `/Public/Images/FoodImages/Yakisoba.jpg`
    },
    'Sashimi': {
        title: "Sashimi (さしみ)",
        img: `/Public/Images/FoodImages/Sashimi.jpg`
    },
    'Mochi': {
        title: "Mochi (もち)",
        img: `/Public/Images/FoodImages/Mochi.jpg`
    },
    'Udon': {
        title: "Udon (うどん)",
        img: `/Public/Images/FoodImages/Udon.jpg`
    },
};

export { FoodData };
