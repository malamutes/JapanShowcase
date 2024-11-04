interface EntertainmentDataType {
    front: string;
    back: string;
    fullName: string; // New field for full name
    description: string; // New field for description
}

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

export { EntertainmentData };
