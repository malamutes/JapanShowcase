interface ReferenceDataInterface {
    title: string,
    link: string, // Changed from 'links' to 'link' since we're dealing with one URL per item
}



//<a href="https://www.freepik.com/icon/lantern_7052524#fromView=search&page=1&position=13&uuid=251182de-2438-461c-bb91-2e5bd5fc5632">Icon by ToZ Icon</a>
//<a href="https://www.freepik.com/icon/snowflake_1622133">Icon by Freepik</a>
//<a href="https://www.freepik.com/icon/dojo_13890178#fromView=search&page=1&position=4&uuid=c0989b94-c0ff-4fdb-9bfc-769d8177edfd">Icon by Iconic Panda</a>
//<a href="https://www.freepik.com/icon/opera_17047687#fromView=search&page=1&position=2&uuid=eaecc4a8-1f2a-4231-8bcc-f2fe3d52e55d">Icon by Slamlabs</a>
//<a href="https://www.freepik.com/icon/drum_10073390#fromView=search&page=1&position=0&uuid=43a5f621-a20c-455a-9618-7d84982916f6">Icon by Designing Hub</a>
//https://fontawesome.com/

//<a href="https://www.flaticon.com/free-icons/japan" title="japan icons">Japan icons created by Freepik - Flaticon</a>
//<a href="https://www.freepik.com/icon/cherry-blossom_15273749#fromView=search&page=1&position=0&uuid=7bdf669a-2314-4b32-8822-ddf444d08b0f">Icon by afif fudin</a>
const ReferenceData: { [key: string]: { [key: string]: ReferenceDataInterface } } = {
    IconReferences: {
        Snowflake: {
            title: "Snowflake",
            link: "https://www.freepik.com/icon/snowflake_1622133"
        },
        Lantern: {
            title: "Lantern",
            link: "https://www.freepik.com/icon/lantern_7052524#fromView=search&page=1&position=13&uuid=251182de-2438-461c-bb91-2e5bd5fc5632"
        },
        Drum: {
            title: "Drum",
            link: "https://www.freepik.com/icon/drum_10073390#fromView=search&page=1&position=0&uuid=43a5f621-a20c-455a-9618-7d84982916f6"
        },
        Mask: {
            title: "Mask",
            link: "https://www.freepik.com/icon/opera_17047687#fromView=search&page=1&position=2&uuid=eaecc4a8-1f2a-4231-8bcc-f2fe3d52e55d"
        },
        Shrine: {
            title: "Shrine",
            link: "https://www.freepik.com/icon/dojo_13890178#fromView=search&page=1&position=4&uuid=c0989b94-c0ff-4fdb-9bfc-769d8177edfd"
        },
        DownArrow: {
            title: 'DownArrow',
            link: "https://www.flaticon.com/free-icons/arrow"
        }
    },
    ImageReferences: {
        Fontawesome: {
            title: "Fontawesome",
            link: "//https://fontawesome.com/"
        },
        Unsplash: {
            title: "Unsplash",
            link: "https://unsplash.com/"
        },
        Pexels: {
            title: "Pexels",
            link: "https://www.pexels.com/"
        },
        Pixabay: {
            title: "Pixabay",
            link: "https://pixabay.com/"
        },
        Alphacoder: {
            title: "Alphacoder",
            link: "https://alphacoders.com/"
        },
        Placehold: {
            title: "Placehold",
            link: "https://placehold.co/"
        }
    },
    LocationNav: {
        Prefecture: {
            title: "Prefecture",
            link: "/Prefecture/Tokyo"
        },
        Festival: {
            title: "Festival",
            link: ""
        },
        Landmark: {
            title: "Landmark",
            link: "/Landmark/Fujisan"
        }
    },
    ExperienceNav: {
        Game: {
            title: "Game",
            link: "#/Food/Sushi"
        },
        Food: {
            title: "Food",
            link: "/Food/Sushi"
        },
        Entertainment: {
            title: "Entertainment",
            link: ""
        },
    },
}

const TopBarData: { [outerKey: string]: { [innerKey: string]: { title: string; image: string } } } = {

    Prefecture: {
        Tokyo: { title: "Tokyo", image: '/Public/Images/EightCardImages/Tokyo.webp' },
        Kyoto: { title: "Kyoto", image: '/Public/Images/EightCardImages/Kyoto.webp' },
        Osaka: { title: "Osaka", image: '/Public/Images/EightCardImages/Osaka.webp' },
        Hiroshima: { title: "Hiroshima", image: '/Public/Images/EightCardImages/Hiroshima.webp' },
        Sapporo: { title: "Sapporo", image: '/Public/Images/EightCardImages/Sapporo.webp' },
        Fukuoka: { title: "Fukuoka", image: '/Public/Images/EightCardImages/Fukuoka.webp' },
        Nagoya: { title: "Nagoya", image: '/Public/Images/EightCardImages/Nagoya.webp' },
        Nara: { title: "Nara", image: '/Public/Images/EightCardImages/Nara.webp' }
    },
    Food: {
        Ramen: { title: "Ramen", image: "/Public/Images/FoodImages/Ramen.webp" },
        Sushi: { title: "Sushi", image: "/Public/Images/FoodImages/Sushi.webp" },
        Tempura: { title: "Tempura", image: "/Public/Images/FoodImages/Tempura.webp" },
        Okonomiyaki: { title: "Okonomiyaki", image: "/Public/Images/FoodImages/Okonomiyaki.webp" },
        Yakisoba: { title: "Yakisoba", image: "/Public/Images/FoodImages/Yakisoba.webp" },
        Sashimi: { title: "Sashimi", image: "/Public/Images/FoodImages/Sashimi.webp" },
        Mochi: { title: "Mochi", image: "/Public/Images/FoodImages/Mochi.webp" },
        Udon: { title: "Udon", image: "/Public/Images/FoodImages/Udon.webp" }
    },
    Landmark: {
        Fujisan: { title: "Mount Fuji", image: "/Public/Images/LandmarkImages/MountFuji.webp" },
        Sensoji: { title: "Sensō-ji Temple", image: "/Public/Images/LandmarkImages/SensoJiTemple.webp" },
        FushimiInari: { title: "Fushimi Inari Shrine", image: "/Public/Images/LandmarkImages/FushimiInariShrine.webp" },
        Kinkakuji: { title: "Golden Pavilion", image: "/Public/Images/LandmarkImages/KinkakuJi.webp" },
        HiroshimaPeacePark: { title: "Hiroshima Peace Memorial Park", image: "/Public/Images/LandmarkImages/HiroshimaPeaceMemorialPark.webp" }
    },
    Entertainment: {
        Anime: { title: "Anime", image: '/Public/Images/EntertainmentImages/anime.webp' },
        JDrama: { title: "J-Drama", image: '/Public/Images/EntertainmentImages/AOTFront.webp' },
        TraditionalArt: { title: "Japanese Traditional Art", image: '/Public/Images/EntertainmentImages/MonsterBack.webp' },
        JMusic: { title: "J-Music", image: '/Public/Images/EntertainmentImages/MonsterBack.webp' },
        Manga: { title: "Manga", image: '/Public/Images/EntertainmentImages/MonsterBack.webp' }
    },
    Game: {
        Bloodborne: { title: "Bloodborne", image: "/Public/Images/GameImages/Bloodborne.webp" },
        SMTThree: { title: "Shin Megami Tensei III: Nocturne", image: "/Public/Images/GameImages/SMTThree.webp" },
        YakuzaZero: { title: "Yakuza Zero", image: "/Public/Images/GameImages/YakuzaZero.webp" },
        PersonaFive: { title: "Persona 5", image: "/Public/Images/GameImages/PersonaFive.webp" },
        MGR: { title: "Metal Gear Rising", image: "/Public/Images/GameImages/MGR.webp" }
    },

    Festival: {
        SapporoSnowFestival: { title: "Sapporo Snow Festival", image: "/Public/Images/FestivalImages/SapporoSnowOne.webp" },
        GionMatsuri: { title: "Gion Festival", image: "/Public/Images/FestivalImages/GionMatsuriOne.webp" },
        AomoriNebutaMatsuri: { title: "Aomori Nebuta Festival", image: "/Public/Images/FestivalImages/AomoriNebutaOne.jpg" },
        KandaMatsuri: { title: "Kanda Festival", image: "/Public/Images/FestivalImages/KandaMatsuriOne.webp" },
        TakayamaMatsuri: { title: "Takayama Matsuri", image: "/Public/Images/FestivalImages/TakayamaMatsuriOne.webp" }
    },

};

export { ReferenceData, TopBarData };

//<a href="https://www.freepik.com/icon/lantern_7052524#fromView=search&page=1&position=13&uuid=251182de-2438-461c-bb91-2e5bd5fc5632">Icon by ToZ Icon</a>
//<a href="https://www.freepik.com/icon/snowflake_1622133">Icon by Freepik</a>
//<a href="https://www.freepik.com/icon/dojo_13890178#fromView=search&page=1&position=4&uuid=c0989b94-c0ff-4fdb-9bfc-769d8177edfd">Icon by Iconic Panda</a>
//<a href="https://www.freepik.com/icon/opera_17047687#fromView=search&page=1&position=2&uuid=eaecc4a8-1f2a-4231-8bcc-f2fe3d52e55d">Icon by Slamlabs</a>
//<a href="https://www.freepik.com/icon/drum_10073390#fromView=search&page=1&position=0&uuid=43a5f621-a20c-455a-9618-7d84982916f6">Icon by Designing Hub</a>
//https://fontawesome.com/

//<a href="https://www.flaticon.com/free-icons/japan" title="japan icons">Japan icons created by Freepik - Flaticon</a>
//<a href="https://www.freepik.com/icon/cherry-blossom_15273749#fromView=search&page=1&position=0&uuid=7bdf669a-2314-4b32-8822-ddf444d08b0f">Icon by afif fudin</a>


/*  

    */


/*    Socials: {
    Facebook: {
        title: "Facebook",
        link: "https://facebook.com"
    },
    Twitter: {
        title: "Twitter",
        link: "https://twitter.com"
    },
    Instagram: {
        title: "Instagram",
        link: "https://instagram.com"
    },
    YouTube: {
        title: "YouTube",
        link: "https://youtube.com"
    },
    LinkedIn: {
        title: "LinkedIn",
        link: "https://linkedin.com"
    },
    TikTok: {
        title: "TikTok",
        link: "https://tiktok.com"
    }, */