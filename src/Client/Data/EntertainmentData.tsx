interface EntertainmentDataType {
    front: string;
    back: string;
    fullName: string; // New field for full name
    description: string; // New field for description
}

interface GeneralEntertainmentType {
    image: string,
    title: string,
    desc: string,
    color: string,
    borderColor: string
}

const GeneralEntertainment: { [key: string]: GeneralEntertainmentType } = {
    Anime: {
        image: '/Public/Images/EntertainmentImages/anime.webp',
        title: 'Anime',
        desc: 'A style of animation that originated in Japan, known for its colorful artwork, fantastical themes, and vibrant characters. Popular globally, it spans many genres, appealing to audiences of all ages.',
        color: '#CC5A52', // Darker coral color
        borderColor: '#A4423C' // Even darker shade to blend with the dark background
    },
    JDrama: {
        image: '/Public/Images/EntertainmentImages/AOTFront.webp',
        title: 'J-Drama',
        desc: 'Japanese TV dramas that cover a range of genres including romance, mystery, and slice-of-life. They often feature compelling storytelling and cultural themes, gaining fans both domestically and internationally.',
        color: '#3B6B8E', // Darker steel blue
        borderColor: '#2E526C' // Darker, muted steel blue for better blending
    },
    TraditionalArt: {
        image: '/Public/Images/EntertainmentImages/MonsterBack.webp',
        title: 'Japanese Traditional Art',
        desc: 'Encompasses art forms such as Kabuki theater, Noh performances, and Sumo wrestling. These arts are rooted in centuries-old traditions, showcasing Japan’s rich cultural heritage and artistry.',
        color: '#6E3A12', // Darker saddle brown
        borderColor: '#4F2A0D' // Even darker brown to blend with background
    },
    JMusic: {
        image: '/Public/Images/EntertainmentImages/MonsterBack.webp',
        title: 'J-Music',
        desc: 'The diverse world of Japanese music, encompassing various genres, from traditional instruments like shamisen and koto to modern styles that have made a global impact.',
        color: '#D4AF37', // Darker gold for subtlety
        borderColor: '#A07F29' // Darkened, deeper gold for blending
    },
    Manga: {
        image: '/Public/Images/EntertainmentImages/MonsterBack.webp',
        title: 'Manga',
        desc: 'Japanese graphic novels and comics that have become a global phenomenon, with genres spanning everything from action and adventure to romance, horror, and fantasy.',
        color: '#2A8B2A', // Darker green for a muted look
        borderColor: '#1F661F' // Darker green to subtly define against background
    }
};


const EntertainmentData: { [key: string]: EntertainmentDataType } = {
    AOT: {
        front: '/Public/Images/EntertainmentImages/AOTFront.webp',
        back: '/Public/Images/EntertainmentImages/AOTBack.webp',
        fullName: 'Attack on Titan - 進撃の巨人',
        description: 'In a world plagued by giant humanoid creatures known as Titans, humanity has retreated behind enormous walls to protect themselves. Eren Yeager, along with his friends Mikasa and Armin, witnesses a Titan breach the walls, leading to personal tragedy. Sworn to eliminate the Titans, they join the military. As they uncover dark truths about the Titans, their society, and Eren’s mysterious powers, they must confront not only the monsters outside but also the ones within their own humanity.'
    },
    FMAB: {
        front: '/Public/Images/EntertainmentImages/FMABFront.webp',
        back: '/Public/Images/EntertainmentImages/FMABBack.webp',
        fullName: 'Fullmetal Alchemist: Brotherhood - 鋼の錬金術師',
        description: 'The story follows brothers Edward and Alphonse Elric, who attempt to use alchemy to bring their deceased mother back to life. The experiment fails tragically, costing Edward his arm and Alphonse his entire body. To restore what they lost, they search for the Philosopher’s Stone, a powerful object that can amplify alchemical abilities. Their journey takes them through political intrigue, encounters with homunculi, and profound questions about sacrifice and the value of life, leading them to a climactic confrontation that tests their bonds and beliefs.'
    },
    Naruto: {
        front: '/Public/Images/EntertainmentImages/NarutoFront.webp',
        back: '/Public/Images/EntertainmentImages/NarutoBack.webp',
        fullName: 'Naruto - ナルト',
        description: 'Born with the Nine-Tails Fox sealed within him, Naruto Uzumaki faces prejudice and loneliness in his village. Determined to earn their respect, he aspires to become Hokage, the village leader. Throughout his journey, he trains to master ninjutsu, forms strong bonds with friends like Sasuke and Sakura, and faces formidable foes. As he battles various villains, including his former friend Sasuke, and unravels the mysteries of his past, Naruto learns the importance of friendship, perseverance, and the true meaning of strength, culminating in an epic war that unites all ninjas.'
    },
    Monster: {
        front: '/Public/Images/EntertainmentImages/MonsterFront.webp',
        back: '/Public/Images/EntertainmentImages/MonsterBack.webp',
        fullName: 'Monster - モンスター',
        description: 'Renowned neurosurgeon Dr. Kenzo Tenma makes a life-altering decision when he chooses to save the life of a young boy named Johan over a prominent politician. Years later, Johan grows up to become a psychopathic killer, prompting Tenma to go on a quest to stop the monster he saved. As Tenma unravels a complex web of murder, deception, and psychological manipulation, he confronts his own beliefs about morality and redemption. The story delves deep into the nature of good and evil, revealing shocking truths about Johan’s past and the impact of choices on human lives.'
    },
    DeathNote: {
        front: '/Public/Images/EntertainmentImages/DeathNoteFront.webp',
        back: '/Public/Images/EntertainmentImages/DeathNoteBack.webp',
        fullName: 'Death Note - デスノート',
        description: 'High school student Light Yagami discovers a mysterious notebook that grants him the power to kill anyone by writing their name in it. Initially using it to rid the world of criminals, he adopts the persona of “Kira.” As his actions draw the attention of law enforcement, a genius detective known as L begins to investigate. A tense game of cat and mouse ensues, with Light and L trying to outsmart each other. The series explores themes of justice, morality, and the consequences of absolute power, leading to a gripping conclusion where ideals clash and sacrifices are made.'
    }
};

export { EntertainmentData, GeneralEntertainment };
