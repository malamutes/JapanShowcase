interface FestivalTypes {
    titleEng: string;
    titleJap: string;
    date: string;
    location: string;
    description: string;
    images: string[];
    icons: string;
    color: string;
    textColor: string; // New field for subtle text color
}

const FestivalData: { [key: string]: FestivalTypes } = {
    SapporoSnowFestival: {
        titleEng: "Sapporo Snow Festival",
        titleJap: "さっぽろ雪まつり",
        date: "Early February",
        location: "Sapporo",
        description: `The Sapporo Snow Festival showcases stunning snow and ice sculptures and attracts visitors from around the world. Key highlights include the Snow Sculpture Contest and massive sculptures at Odori Park, illuminated at night. This festival began in 1950 as a local event created by high school students.`,
        images: [
            "/Images/FestivalImages/SapporoSnowOne.webp",
            "/Images/FestivalImages/SapporoSnowTwo.webp",
            "/Images/FestivalImages/SapporoSnowThree.webp",
            "/Images/FestivalImages/SapporoSnowFour.webp",
            "/Images/FestivalImages/SapporoSnowFive.webp"
        ],
        icons: "/Images/FestivalImages/Snowflake.png",
        color: "#00BFFF", // Deep Sky Blue
        textColor: "rgb(225, 240, 255)" // Subtle text color
    },
    GionMatsuri: {
        titleEng: "Gion Festival",
        titleJap: "祇園祭",
        date: "July",
        location: "Kyoto",
        description: `Gion Matsuri, held in July, features grand float processions called yamaboko to ward off plagues. Key events include the vibrant parades and the lively Yoiyama night filled with food stalls and traditional performances. Originating in the 9th century, it is closely linked to the Yasaka Shrine.`,
        images: [
            "/Images/FestivalImages/GionMatsuriOne.webp",
            "/Images/FestivalImages/GionMatsuriTwo.webp",
            "/Images/FestivalImages/GionMatsuriThree.jpg",
            "/Images/FestivalImages/GionMatsuriFour.jpg",
            "/Images/FestivalImages/GionMatsuriFive.webp"
        ],
        icons: "/Images/FestivalImages/Lantern.png",
        color: "#FF4C4C", // Vibrant Red
        textColor: "rgb(255, 230, 230)" // Subtle text color
    },
    AomoriNebutaMatsuri: {
        titleEng: "Aomori Nebuta Festival",
        titleJap: "青森ねぶた祭り",
        date: "Early August",
        location: "Aomori",
        description: `The Aomori Nebuta Festival features large illuminated floats that depict warriors and folklore. It includes vibrant night parades with dancers and traditional taiko drumming. The festival, rooted in the 18th century, celebrates summer and illuminates the streets with colorful displays.`,
        images: [
            "/Images/FestivalImages/AomoriNebutaOne.jpg",
            "/Images/FestivalImages/AomoriNebutaTwo.webp",
            "/Images/FestivalImages/AomoriNebutaThree.webp",
            "/Images/FestivalImages/AomoriNebutaFour.webp"
        ],
        icons: "/Images/FestivalImages/Mask.png",
        color: "#FFD700", // Gold
        textColor: "rgb(255, 245, 230)" // Subtle text color
    },
    KandaMatsuri: {
        titleEng: "Kanda Festival",
        titleJap: "神田祭",
        date: "Mid-May (odd-numbered years)",
        location: "Tokyo",
        description: `Kanda Matsuri celebrates prosperity and good fortune and features a procession of mikoshi (portable shrines) through Tokyo. The festival includes vibrant parades with traditional music and dance, reflecting its historical ties to the Tokugawa shogunate. This lively event is held every odd-numbered year in mid-May.`,
        images: [
            "/Images/FestivalImages/KandaMatsuriOne.webp",
            "/Images/FestivalImages/KandaMatsuriTwo.webp",
            "/Images/FestivalImages/KandaMatsuriThree.webp",
            "/Images/FestivalImages/KandaMatsuriFour.webp"
        ],
        icons: "/Images/FestivalImages/Shrine.png",
        color: "#8A2BE2", // Blue Violet
        textColor: "rgb(240, 225, 255)" // Subtle text color
    },
    TakayamaMatsuri: {
        titleEng: "Takayama Matsuri",
        titleJap: "高山祭",
        date: "April & October",
        location: "Takayama",
        description: `Takayama Matsuri features ornately decorated floats and celebrates seasonal changes. The festival includes puppet performances and traditional music, highlighting Edo-period craftsmanship. A notable event is the night-time parade where beautifully lit floats create a magical atmosphere.`,
        images: [
            "/Images/FestivalImages/TakayamaMatsuriOne.webp",
            "/Images/FestivalImages/TakayamaMatsuriTwo.webp",
            "/Images/FestivalImages/TakayamaMatsuriThree.webp",
            "/Images/FestivalImages/TakayamaMatsuriFour.jpg",
            "/Images/FestivalImages/TakayamaMatsuriFive.webp"
        ],
        icons: "/Images/FestivalImages/Drum.png",
        color: "#FF8C00", // Dark Orange
        textColor: "rgb(255, 235, 190)" // Subtle text color
    }
};



export { FestivalData };