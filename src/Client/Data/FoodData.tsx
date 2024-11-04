interface FoodCard {
    title: string;
    img: string;
}

const FoodData: { [key: string]: FoodCard } = {
    'Sushi': {
        title: "Sushi (すし)",
        img: `/Public/Images/FoodImages/Sushi.webp`
    },
    'Ramen': {
        title: "Ramen (ラーメン)",
        img: `/Public/Images/FoodImages/Ramen.webp`
    },
    'Tempura': {
        title: "Tempura (天ぷら)",
        img: `/Public/Images/FoodImages/Tempura.webp`
    },
    'Okonomiyaki': {
        title: " (お好み焼き)", //Okonomiyaki
        img: `/Public/Images/FoodImages/Okonomiyaki.webp`
    },
    'Yakisoba': {
        title: "Yakisoba (焼きそば)",
        img: `/Public/Images/FoodImages/Yakisoba.webp`
    },
    'Sashimi': {
        title: "Sashimi (さしみ)",
        img: `/Public/Images/FoodImages/Sashimi.webp`
    },
    'Mochi': {
        title: "Mochi (もち)",
        img: `/Public/Images/FoodImages/Mochi.webp`
    },
    'Udon': {
        title: "Udon (うどん)",
        img: `/Public/Images/FoodImages/Udon.webp`
    },
};

export { FoodData };
