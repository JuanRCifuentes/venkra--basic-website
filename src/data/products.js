const products = [
    {
        id: "c_t-shirt",
        name: "T-Shirt",
        category: "camisetas",
        price: 65000,
        description:
            "Camiseta básica de algodón pima, diseño exclusivo, cuello redondo y manga corta con logo bordado, unidades limitadas.",
        short_description: "$65.000",
        img_url: "https://i.postimg.cc/dV8jXLM6/c-t-shirt-P.jpg",
        xl: 5,
        l: 5,
        m: 5,
        s: 1,
        tallas: "{xl:5,xl:10,m:10,s:5}",
    },
    {
        id: "c_vnk",
        name: "VNK",
        category: "camisetas",
        price: 70000,
        description:
            "Camiseta básica de algodón pima, cuello redondo y manga corta, cuenta con un genial estampado exclusivo en su parte delantera, unidades limitadas.",
        short_description: "$70.000",
        img_url: "https://i.postimg.cc/7YY17fHh/c-vnk-P.jpg",
        xl: 10,
        l: 20,
        m: 20,
        s: 10,
        tallas: "",
    },
    {
        id: "c_generation",
        name: "Generation",
        category: "camisetas",
        price: 70000,
        description:
            "Camiseta básica de algodón pima, cuello redondo y manga corta, cuenta con un genial estampado exclusivo en su parte trasera y logotipo bordado en la parte delantera, unidades limitadas.",
        short_description: "$70.000",
        img_url: "https://i.postimg.cc/TPbpdHqJ/c-generation-P.jpg",
        xl: 10,
        l: 20,
        m: 20,
        s: 10,
        tallas: "",
    },
    {
        id: "c_special",
        name: "Special",
        category: "camisetas",
        price: 80000,
        description:
            "Camiseta básica de algodón pima, cuello redondo y manga corta, cuenta con un genial estampado exclusivo en su parte delantera, unidades limitadas.",
        short_description: "$80.000",
        img_url: "https://i.postimg.cc/dtH29w3B/c-special-P.jpg",
        xl: 10,
        l: 20,
        m: 20,
        s: 10,
        tallas: "",
    },
    {
        id: "c_oldschool",
        name: "OldSchool",
        category: "camisetas",
        price: 70000,
        description:
            "Camiseta básica de algodón pima, cuello redondo y manga corta, cuenta con un genial estampado exclusivo en su parte delantera, unidades limitadas.",
        short_description: "$70.000",
        img_url: "https://i.postimg.cc/vT6D2qqK/c-old-School-P.jpg",
        xl: 10,
        l: 20,
        m: 20,
        s: 10,
        tallas: "",
    },
    {
        id: "c_splash-x",
        name: "Splash X",
        category: "camisetas",
        price: 70000,
        description:
            "Camiseta básica de algodón pima, cuello redondo y manga corta, cuenta con un genial estampado exclusivo en su parte delantera, unidades limitadas.",
        short_description: "$70.000",
        img_url: "https://i.postimg.cc/mkvqj2k0/c-splash-x-P.jpg",
        xl: 10,
        l: 20,
        m: 20,
        s: 10,
        tallas: "",
    },
    {
        id: "g_iso",
        name: "Eagle",
        category: "gorras",
        price: 70000,
        description:
            "Gorra con logo bordado, diseño exclusivo y cuenta con hebilla metálica marcada con láser, unidades limitadas.",
        short_description: "$70.000",
        img_url: "https://i.postimg.cc/K89161fC/g-iso-P.jpg",
        xl: 0,
        l: 16,
        m: 0,
        s: 0,
        tallas: "",
    },
    {
        id: "g_vnk",
        name: "VNK",
        category: "gorras",
        price: 70000,
        description:
            "Gorra con bordado en alto relieve, diseño exclusivo y cuenta con hebilla metálica marcada con láser, unidades limitadas.",
        short_description: "$70.000",
        img_url: "https://i.postimg.cc/QCZXvTzg/g-vnk-P.jpg",
        xl: 0,
        l: 17,
        m: 0,
        s: 0,
        tallas: "",
    },
    {
        id: "c_openmind",
        name: "OPENMIND",
        category: "camisetas",
        price: 60000,
        description:
            "Camiseta tipo esqueleto de algodón pima con estampado estampado exclusivo en su parte delantera, unidades limitadas.",
        short_description: "$60.000",
        img_url: "https://i.postimg.cc/jdfYf2LP/c-openmind-P.jpg",
        xl: 8,
        l: 15,
        m: 15,
        s: 7,
        tallas: "",
    },
    {
        id: "c_victory",
        name: "VICTORY",
        category: "camisetas",
        price: 60000,
        description:
            "Camiseta tipo esqueleto de algodón pima con estampado estampado exclusivo en su parte delantera, unidades limitadas.",
        short_description: "$60.000",
        img_url: "https://i.postimg.cc/0NZN12SM/c-victory-P.jpg",
        xl: 8,
        l: 15,
        m: 15,
        s: 7,
        tallas: "",
    },
    {
        id: "b_busos",
        name: "Buso Venkra",
        category: "busos_y_hoodies",
        price: 130000,
        description:
            "Buso en algodón perchado diseño exclusivo con estampado color rojo y finos detalles en el rib de las mangas y fajín",
        short_description: "$130.000",
        img_url: "https://i.postimg.cc/52pTV29c/b-venkra-negro-p.jpg",
        xl: 5,
        l: 11,
        m: 10,
        s: 6,
        tallas: "",
    },
    {
        id: "b_hoodies",
        name: "Hoodie VNK",
        category: "busos_y_hoodies",
        price: 150000,
        description:
            "Hoodie, en algodón perchado diseño exclusivo con estampado color negro y finos detalles en el rib de las mangas y fajín. Punteras y ojaletes metálicos contramarcados.",
        short_description: "$150.000",
        img_url: "https://i.postimg.cc/3wXm2NSk/b-hoodie-gris-p.jpg",
        xl: 8,
        l: 8,
        m: 9,
        s: 4,
        tallas: "",
    },
];

export default products;
