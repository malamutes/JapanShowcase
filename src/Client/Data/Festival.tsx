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
    GionMatsuri: {
        titleEng: "Gion Festival",
        titleJap: "祇園祭",
        date: "July",
        location: "Kyoto",
        description: `Gion Matsuri, held in July, features grand float processions called yamaboko to ward off plagues. Key events include the vibrant parades and the lively Yoiyama night filled with food stalls and traditional performances. Originating in the 9th century, it is closely linked to the Yasaka Shrine.`,
        images: [
            "/Public/Images/FestivalImages/GionMatsuriOne.webp",
            "/Public/Images/FestivalImages/GionMatsuriTwo.webp",
            "/Public/Images/FestivalImages/GionMatsuriThree.jpg",
            "/Public/Images/FestivalImages/GionMatsuriFour.jpg",
            "/Public/Images/FestivalImages/GionMatsuriFive.webp"
        ],
        icons: "/Public/Images/FestivalImages/Lantern.png",
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
            "/Public/Images/FestivalImages/AomoriNebutaOne.jpg",
            "/Public/Images/FestivalImages/AomoriNebutaTwo.webp",
            "/Public/Images/FestivalImages/AomoriNebutaThree.webp",
            "/Public/Images/FestivalImages/AomoriNebutaFour.webp"
        ],
        icons: "/Public/Images/FestivalImages/Mask.png",
        color: "#FFD700", // Gold
        textColor: "rgb(255, 245, 230)" // Subtle text color
    },
    SapporoSnowFestival: {
        titleEng: "Sapporo Snow Festival",
        titleJap: "さっぽろ雪まつり",
        date: "Early February",
        location: "Sapporo",
        description: `The Sapporo Snow Festival showcases stunning snow and ice sculptures and attracts visitors from around the world. Key highlights include the Snow Sculpture Contest and massive sculptures at Odori Park, illuminated at night. This festival began in 1950 as a local event created by high school students.`,
        images: [
            "/Public/Images/FestivalImages/SapporoSnowOne.webp",
            "/Public/Images/FestivalImages/SapporoSnowTwo.webp",
            "/Public/Images/FestivalImages/SapporoSnowThree.webp",
            "/Public/Images/FestivalImages/SapporoSnowFour.webp",
            "/Public/Images/FestivalImages/SapporoSnowFive.webp"
        ],
        icons: "/Public/Images/FestivalImages/Snowflake.png",
        color: "#00BFFF", // Deep Sky Blue
        textColor: "rgb(225, 240, 255)" // Subtle text color
    },
    KandaMatsuri: {
        titleEng: "Kanda Festival",
        titleJap: "神田祭",
        date: "Mid-May (odd-numbered years)",
        location: "Tokyo",
        description: `Kanda Matsuri celebrates prosperity and good fortune and features a procession of mikoshi (portable shrines) through Tokyo. The festival includes vibrant parades with traditional music and dance, reflecting its historical ties to the Tokugawa shogunate. This lively event is held every odd-numbered year in mid-May.`,
        images: [
            "/Public/Images/FestivalImages/KandaMatsuriOne.webp",
            "/Public/Images/FestivalImages/KandaMatsuriTwo.webp",
            "/Public/Images/FestivalImages/KandaMatsuriThree.webp",
            "/Public/Images/FestivalImages/KandaMatsuriFour.webp"
        ],
        icons: "/Public/Images/FestivalImages/Shrine.png",
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
            "/Public/Images/FestivalImages/TakayamaMatsuriOne.webp",
            "/Public/Images/FestivalImages/TakayamaMatsuriTwo.webp",
            "/Public/Images/FestivalImages/TakayamaMatsuriThree.webp",
            "/Public/Images/FestivalImages/TakayamaMatsuriFour.jpg",
            "/Public/Images/FestivalImages/TakayamaMatsuriFive.webp"
        ],
        icons: "/Public/Images/FestivalImages/Drum.png",
        color: "#FF8C00", // Dark Orange
        textColor: "rgb(255, 235, 190)" // Subtle text color
    }
};


//<a href="https://www.freepik.com/icon/lantern_7052524#fromView=search&page=1&position=13&uuid=251182de-2438-461c-bb91-2e5bd5fc5632">Icon by ToZ Icon</a>
//<a href="https://www.freepik.com/icon/snowflake_1622133">Icon by Freepik</a>
//<a href="https://www.freepik.com/icon/dojo_13890178#fromView=search&page=1&position=4&uuid=c0989b94-c0ff-4fdb-9bfc-769d8177edfd">Icon by Iconic Panda</a>
//<a href="https://www.freepik.com/icon/opera_17047687#fromView=search&page=1&position=2&uuid=eaecc4a8-1f2a-4231-8bcc-f2fe3d52e55d">Icon by Slamlabs</a>
//<a href="https://www.freepik.com/icon/drum_10073390#fromView=search&page=1&position=0&uuid=43a5f621-a20c-455a-9618-7d84982916f6">Icon by Designing Hub</a>

export { FestivalData };