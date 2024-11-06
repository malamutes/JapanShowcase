interface FoodCard {
    titleEng: string;
    titleJap: string;
    img: string;
    desc: string;
    color: string; // New color property
}

const FoodData: { [key: string]: FoodCard } = {
    'Sushi': {
        titleEng: "Sushi",
        titleJap: "すし",
        img: "/Public/Images/FoodImages/Sushi.webp",
        desc: "A Japanese dish consisting of vinegared rice combined with various ingredients, such as seafood, vegetables, and occasionally tropical fruits.",
        color: "#1ABC9C" // Sushi color: seaweed green
    },
    'Ramen': {
        titleEng: "Ramen",
        titleJap: "ラーメン",
        img: "/Public/Images/FoodImages/Ramen.webp",
        desc: "A Japanese noodle soup dish consisting of Chinese-style wheat noodles served in a meat- or fish-based broth, flavored with soy sauce or miso.",
        color: "#E74C3C" // Ramen color: spicy red
    },
    'Tempura': {
        titleEng: "Tempura",
        titleJap: "天ぷら",
        img: "/Public/Images/FoodImages/Tempura.webp",
        desc: "A Japanese dish of battered and deep-fried vegetables, seafood, or meat, often served with dipping sauce.",
        color: "#F39C12" // Tempura color: golden yellow
    },
    'Okonomiyaki': {
        titleEng: "Okonomiyaki",
        titleJap: "お好み焼き",
        img: "/Public/Images/FoodImages/Okonomiyaki.webp",
        desc: "A savory pancake made with flour, eggs, shredded cabbage, and various meats or seafood, often topped with okonomiyaki sauce.",
        color: "#D35400" // Okonomiyaki color: deep orange
    },
    'Yakisoba': {
        titleEng: "Yakisoba",
        titleJap: "焼きそば",
        img: "/Public/Images/FoodImages/Yakisoba.webp",
        desc: "Stir-fried noodles with vegetables, meat, or seafood, typically seasoned with a sweet and savory sauce.",
        color: "#9B59B6" // Yakisoba color: brownish purple
    },
    'Sashimi': {
        titleEng: "Sashimi",
        titleJap: "さしみ",
        img: "/Public/Images/FoodImages/Sashimi.webp",
        desc: "Thinly sliced raw fish or seafood, often served with soy sauce and wasabi.",
        color: "#3498DB" // Sashimi color: sea blue
    },
    'Mochi': {
        titleEng: "Mochi",
        titleJap: "もち",
        img: "/Public/Images/FoodImages/Mochi.webp",
        desc: "A sticky, chewy rice cake made from glutinous rice, often enjoyed as a sweet treat or used in savory dishes.",
        color: "#F1C6C2" // Mochi color: soft pink
    },
    'Udon': {
        titleEng: "Udon",
        titleJap: "うどん",
        img: "/Public/Images/FoodImages/Udon.webp",
        desc: "Thick Japanese wheat noodles served in a hot broth with various toppings such as tempura, meat, and vegetables.",
        color: "#2ECC71" // Udon color: fresh green
    },
};

export { FoodData };
