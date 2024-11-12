interface ReferenceDataInterface {
    title: string,
    link: string, // Changed from 'links' to 'link' since we're dealing with one URL per item
}

const ReferenceData: { [key: string]: { [key: string]: ReferenceDataInterface } } = {
    References: {
        SnowIcon: {
            title: "Snow",
            link: "https://www.freepik.com/icon/snowflake_1622133"
        },
        LanternIcon: {
            title: "Lantern",
            link: "https://www.freepik.com/icon/lantern_7052524#fromView=search&page=1&position=13&uuid=251182de-2438-461c-bb91-2e5bd5fc5632"
        },
        MaskIcon: {
            title: "Mask",
            link: "https://www.freepik.com/icon/opera_17047687#fromView=search&page=1&position=2&uuid=eaecc4a8-1f2a-4231-8bcc-f2fe3d52e55d"
        },
        ShrineIcon: {
            title: "Shrine",
            link: "https://www.freepik.com/icon/dojo_13890178#fromView=search&page=1&position=4&uuid=c0989b94-c0ff-4fdb-9bfc-769d8177edfd"
        },
        DrumIcon: {
            title: "Drum",
            link: "https://www.freepik.com/icon/drum_10073390#fromView=search&page=1&position=0&uuid=43a5f621-a20c-455a-9618-7d84982916f6"
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
        Fontawesome: {
            title: "Fontawesome",
            link: "https://fontawesome.com/"
        }
    },
    Contact: {
        Github: {
            title: "GitHub",
            link: "https://github.com/your-profile"
        },
        PhoneNumber: {
            title: "Phone Number",
            link: "tel:+1234567890"
        },
        Gmail: {
            title: "Gmail",
            link: "mailto:someone@example.com"
        }
    },
    QuickNavigation: {
        Home: {
            title: "Home",
            link: "#Home"
        },
        CulturalHubs: {
            title: "Hubs",
            link: "#Hubs"
        },
        TasteOfJapan: {
            title: "Food",
            link: "#Food"
        },
        TreasuredSites: {
            title: "Landmarks",
            link: "#Landmarks"
        },
        Entertainment: {
            title: "Entertainment",
            link: "#Entertainment"
        },
        CultFavorites: {
            title: "Cult Favorites",
            link: "#Cult Favourites"
        },
        FestivalsAndTraditions: {
            title: "Festivals",
            link: "#Festivals"
        }
    },
    Socials: {
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
        },
        Pinterest: {
            title: "Pinterest",
            link: "https://pinterest.com"
        }
    }
}

export { ReferenceData };

//<a href="https://www.freepik.com/icon/lantern_7052524#fromView=search&page=1&position=13&uuid=251182de-2438-461c-bb91-2e5bd5fc5632">Icon by ToZ Icon</a>
//<a href="https://www.freepik.com/icon/snowflake_1622133">Icon by Freepik</a>
//<a href="https://www.freepik.com/icon/dojo_13890178#fromView=search&page=1&position=4&uuid=c0989b94-c0ff-4fdb-9bfc-769d8177edfd">Icon by Iconic Panda</a>
//<a href="https://www.freepik.com/icon/opera_17047687#fromView=search&page=1&position=2&uuid=eaecc4a8-1f2a-4231-8bcc-f2fe3d52e55d">Icon by Slamlabs</a>
//<a href="https://www.freepik.com/icon/drum_10073390#fromView=search&page=1&position=0&uuid=43a5f621-a20c-455a-9618-7d84982916f6">Icon by Designing Hub</a>
