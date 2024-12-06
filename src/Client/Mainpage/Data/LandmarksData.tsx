interface PlaceDescription {
    titleJapanese: string,
    titleEnglish: string,
    description: string,
    img: string
}

const LandMarksData: { [key: string]: PlaceDescription } = {
    Fujisan: {
        titleJapanese: "富士山",
        titleEnglish: "Mount Fuji",
        description: "Mount Fuji, the tallest peak in Japan, is an iconic symbol that attracts millions of climbers and admirers. Its beautiful, symmetrical shape blends harmoniously with seasonal landscapes and is renowned worldwide.",
        img: "/Images/LandmarkImages/MountFuji.webp"
    },
    Sensoji: {
        titleJapanese: "浅草寺",
        titleEnglish: "Sensō-ji Temple",
        description: "Located in Asakusa, Sensō-ji is the oldest and most famous temple in Tokyo, offering visitors a rich historical experience. It is well known for its lively shopping street, Nakamise-dori, and the iconic Thunder Gate (Kaminarimon).",
        img: "/Images/LandmarkImages/SensoJiTemple.webp"
    },
    FushimiInari: {
        titleJapanese: "伏見稲荷大社",
        titleEnglish: "Fushimi Inari Shrine",
        description: "Fushimi Inari Shrine in Kyoto is famous for its thousands of vermilion torii gates that create enchanting trails through the forested mountain. It is dedicated to Inari, the deity of rice and prosperity, drawing many who seek blessings for success.",
        img: "/Images/LandmarkImages/FushimiInariShrine.webp"
    },
    Kinkakuji: {
        titleJapanese: "金閣寺",
        titleEnglish: "Golden Pavilion",
        description: "Kinkaku-ji, one of Kyoto’s most visited landmarks, captivates visitors with its gold-leaf-covered exterior and serene garden setting. The reflection of the temple in its surrounding pond exemplifies the essence of Zen aesthetics.",
        img: "/Images/LandmarkImages/KinkakuJi.webp"
    },
    HiroshimaPeacePark: {
        titleJapanese: "広島平和記念公園",
        titleEnglish: "Hiroshima Peace Memorial Park",
        description: "Located in Hiroshima, this park was established to commemorate the victims of the 1945 atomic bombing and to promote peace. The Atomic Bomb Dome within the park is a UNESCO World Heritage Site and a powerful symbol of resilience and the call for nuclear disarmament.",
        img: "/Images/LandmarkImages/HiroshimaPeaceMemorialPark.webp"
    }
};



export { LandMarksData };