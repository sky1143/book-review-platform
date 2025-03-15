
const books = [
    {
        id: 1,
        title: 'Heartless',
        description: 'The Heartless City',
        description2: 'Set in a city where emotions are forbidden, a young rebel discovers the truth behind the oppressive regime. As love and betrayal clash, she must decide whether to fight for her freedom or succumb to the heartless world she was born into.',
        author: 'S.D Thakur',
        price: '$ 3.30',
        imageUrl: 'https://i.pinimg.com/originals/b7/83/9e/b7839e5168bff59aa1f8ca1b922619b0.jpg',
        reviews: [
            { user: 'Alice', comment: 'Amazing Book', rating: 5 },
            { user: 'Brook', comment: 'Very engaging', rating: 4 }
        ]
    },
    {
        id: 2,
        title: 'Magic & Myth',
        description: 'A girl Magician',
        description2: 'A young magician, torn between the mystical and the real world, embarks on a journey to uncover her true destiny. Guided by ancient myths and forbidden spells, she must learn to master her powers before dark forces consume her soul.',
        author: 'J.D Vens',
        price: '$ 1.30',
        imageUrl: 'https://th.bing.com/th/id/OIP.14hc6CEeYYDIxd7OWQQB-wAAAA?w=393&h=630&rs=1&pid=ImgDetMain',
        reviews: [
            { user: 'Charlie', comment: 'Fascinating story!', rating: 4 },
            { user: 'David', comment: 'Couldn’t put it down.', rating: 5 }
        ]
    },
    {
        id: 3,
        title: 'Woods',
        description: 'The darks of',
        description2: 'Lost in the depths of the dark woods, a young explorer must confront his deepest fears and uncover hidden truths. Mysterious creatures, ancient curses, and dark secrets will test his courage as he fights to survive and find his way home.',
        author: 'S.P Bhardwaj',
        price: '$ 3.60',
        imageUrl: 'https://biznewsasia.com/wp-content/uploads/2020/01/Musical-Movies-Pics-22-page-007.jpg',
        reviews: [
            { user: 'Sophia', comment: 'Beautifully written!', rating: 5 },
            { user: 'Liam', comment: 'Loved every chapter.', rating: 4 }
        ]
    },
    {
        id: 4,
        title: 'Moment of Truth',
        description: 'Couple Jungle Adventure',
        description2: 'A young couple embarks on a thrilling adventure deep into the jungle, where hidden dangers and ancient mysteries await. As they face their darkest truths, they must rely on each other to survive and uncover the secrets that could change their lives forever.',
        author: 'R.N Swammy',
        price: '$ 2.35',
        imageUrl: 'https://booksofmyheart.net/wp-content/uploads/sites/305/2021/08/g5-1.jpg',
        reviews: [
            { user: 'Olivia', comment: 'Chilling and captivating!', rating: 4 },
            { user: 'James', comment: 'A real page-turner.', rating: 5 }
        ]
    },
    {
        id: 5,
        title: 'Daughter of Destiny',
        description: 'Daughter of Serial',
        description2: 'Haunted by her dark lineage, a young woman sets out to uncover the truth about her past. As she delves into a legacy of crime and betrayal, she must confront her inner demons and forge a new path toward redemption and freedom.',
        author: 'V.N Pathak',
        price: '$ 4.30',
        imageUrl: 'https://m.media-amazon.com/images/I/81J8b43W5eL._SL1500_.jpg',
        reviews: [
            { user: 'Amelia', comment: 'Could feel the cold while reading!', rating: 5 },
            { user: 'Henry', comment: 'Amazing descriptions.', rating: 4 }
        ]
    }
];








const categoriesFeatures = [
    {
        id: 1,
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/8635/8635996.png',
        title:' Arts & Photography',
        para: 'Shop now',

    },

    {
        id: 2,
        imageUrl:'https://th.bing.com/th/id/R.e0b5a2e36be1a6ed7fb050930204b819?rik=%2bpASqZKu4zwB5g&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fKcn%2fXKX%2fKcnXKXEBi.png&ehk=KIYarE8it%2fqQ%2fpJDglcPKr4s4FglNFvMja8pObiMdOQ%3d&risl=&pid=ImgRaw&r=0',
        title:'Health in your hand', 
        para:'Shop now'
    },
    {
        id:3 ,
        imageUrl:'https://cdn-icons-png.flaticon.com/512/7671/7671546.png',
        title:' Horror Story',
        para:'Shop now'
    },
    {
        id: 4,
        imageUrl:'https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Butterflies-PNG/Blue_and_Purple_Butterfly_PNG_Clipar_Image.png?m=1629783646',
        title:'Romance',
        para:'Shop now'
    },
    {
        id: 5,
        imageUrl:'https://cdn-icons-png.flaticon.com/512/2178/2178197.png',
        title:' Biography',
        para:'Shop now'
    },

]

export default books
export {categoriesFeatures}