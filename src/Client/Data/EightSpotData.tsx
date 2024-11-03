export interface PlaceDescription {
    title: string,
    description: string,
    img: string
}

const PlaceData: { [key: string]: PlaceDescription } = {
    Tokyo: {
        title: "Tokyo - とうきょう",
        description: `The capital of Japan and the center of politics, economics, and culture. It is one of the most populous cities in the world.`,
        img: `/Public/Images/EightCardImages/Tokyo.jpg`
    },
    Kyoto: {
        title: "Kyoto - きょうと",
        description: `Once the capital of Japan, Kyoto is famous for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses.`,
        img: `/Public/Images/EightCardImages/Kyoto.jpg`
    },
    Osaka: {
        title: "Osaka - おおさか",
        description: `Known for modern architecture, nightlife, and hearty street food. Osaka is Japan's kitchen and offers many delicious dishes.`,
        img: `/Public/Images/EightCardImages/Osaka.jpg`
    },
    Hiroshima: {
        title: "Hiroshima - ひろしま",
        description: `Known for the tragic atomic bombing during World War II, Hiroshima is now a city of peace with the Peace Memorial Park and Museum commemorating the victims.`,
        img: `/Public/Images/EightCardImages/Hiroshima.jpg`
    },
    Sapporo: {
        title: "Sapporo - さっぽろ",
        description: `The capital of Hokkaido, Sapporo is known for its beer, skiing, and annual Sapporo Snow Festival featuring ice sculptures and winter activities.`,
        img: `/Public/Images/EightCardImages/Sapporo.png`
    },
    Fukuoka: {
        title: "Fukuoka - ふくおか",
        description: `A city on Kyushu Island, known for its ancient temples, beaches, and modern shopping malls, as well as its unique tonkotsu ramen.`,
        img: `/Public/Images/EightCardImages/Fukuoka.jpg`
    },
    Nagoya: {
        title: "Nagoya - なごや",
        description: `Japan's fourth-largest city, known for its automotive industry, Nagoya Castle, and rich history, offering a mix of traditional and modern attractions.`,
        img: `/Public/Images/EightCardImages/Nagoya.jpg`
    },
    Nara: {
        title: "Nara - なら",
        description: `Famous for its historic monuments and temples, including Todai-ji, housing a giant Buddha statue, and its friendly free-roaming deer in Nara Park.`,
        img: `/Public/Images/EightCardImages/Nara.jpg`
    },
}


export { PlaceData };