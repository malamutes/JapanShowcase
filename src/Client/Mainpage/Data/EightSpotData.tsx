export interface PlaceDescription {
    title: string,
    description: string,
    img: string,
    color: string
}

const PlaceData: { [key: string]: PlaceDescription } = {
    Tokyo: {
        title: "Tokyo - とうきょう",
        description: `The capital of Japan and the center of politics, economics, and culture. It is one of the most populous cities in the world.`,
        img: `/Public/Images/EightCardImages/Tokyo.webp`,
        color: 'rgb(255, 100, 150)' // Bright magenta-pink for Tokyo's dynamic, modern vibe
    },
    Kyoto: {
        title: "Kyoto - きょうと",
        description: `Once the capital of Japan, Kyoto is famous for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses.`,
        img: `/Public/Images/EightCardImages/Kyoto.webp`,
        color: 'rgb(230, 180, 80)' // Rich amber-gold for Kyoto's traditional and historical aura
    },
    Osaka: {
        title: "Osaka - おおさか",
        description: `Known for modern architecture, nightlife, and hearty street food. Osaka is Japan's kitchen and offers many delicious dishes.`,
        img: `/Public/Images/EightCardImages/Osaka.webp`,
        color: 'rgb(255, 70, 70)' // Bright red leaning for Osaka's lively energy
    },
    Hiroshima: {
        title: "Hiroshima - ひろしま",
        description: `Known for the tragic atomic bombing during World War II, Hiroshima is now a city of peace with the Peace Memorial Park and Museum commemorating the victims.`,
        img: `/Public/Images/EightCardImages/Hiroshima.webp`,
        color: 'rgb(100, 200, 100)' // Peaceful green representing resilience and peace
    },
    Sapporo: {
        title: "Sapporo - さっぽろ",
        description: `The capital of Hokkaido, Sapporo is known for its beer, skiing, and annual Sapporo Snow Festival featuring ice sculptures and winter activities.`,
        img: `/Public/Images/EightCardImages/Sapporo.webp`,
        color: 'rgb(80, 190, 250)' // Bright icy blue to represent snow and winter festivities
    },
    Fukuoka: {
        title: "Fukuoka - ふくおか",
        description: `A city on Kyushu Island, known for its ancient temples, beaches, and modern shopping malls, as well as its unique tonkotsu ramen.`,
        img: `/Public/Images/EightCardImages/Fukuoka.webp`,
        color: 'rgb(220, 110, 90)' // Warm coral red for Fukuoka's coastal culture and vibrancy
    },
    Nagoya: {
        title: "Nagoya - なごや",
        description: `Japan's fourth-largest city, known for its automotive industry, Nagoya Castle, and rich history, offering a mix of traditional and modern attractions.`,
        img: `/Public/Images/EightCardImages/Nagoya.webp`,
        color: 'rgb(180, 150, 90)' // Golden tan representing innovation and historical depth
    },
    Nara: {
        title: "Nara - なら",
        description: `Famous for its historic monuments and temples, including Todai-ji, housing a giant Buddha statue, and its friendly free-roaming deer in Nara Park.`,
        img: `/Public/Images/EightCardImages/Nara.webp`,
        color: 'rgb(150, 100, 240)' // Purple leaning for Nara's historical and natural beauty
    },
}

export { PlaceData };
