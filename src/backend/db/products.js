import { v4 as uuid } from "uuid";

export const products = [
  {
    _id: uuid(),
    name: "Vanguard Elite",
    original_price: 149,
    discounted_price: 99,
    category_name: "Детская обувь",
    is_stock: false,
    description:
      "Эти премиальные кожаные кроссовки воплощают городскую утонченность своим элегантным дизайном, высококачественной изготовкой и вниманием к деталям.",
    trending: true,
    img: "/assets/images/products-images/image-kids-1.png",
  },

  {
    _id: uuid(),
    name: "Nova Pro X",
    original_price: 130,
    discounted_price: 99,
    category_name: "Женская обувь",
    is_stock: true,
    description:
      "Эти городские кеды с высокими голенищами имеют современную силуэт, роскошные материалы и безупречную отделку, что делает их стильным выбором для модных личностей.",
    trending: true,
    img: "/assets/images/products-images/image-kids-2.png",
  },
  {
    _id: uuid(),
    name: "Ascend TechFit",
    original_price: 199,
    discounted_price: 79,
    category_name: "Детская обувь",
    is_stock: true,
    description:
      "Сочетая передовые технологии с городским стилем, эти беговые кроссовки оснащены передовой амортизацией, дышащей сеткой и изящным современным дизайном.",
    trending: false,
    img: "/assets/images/products-images/image-kids-3.png",
  },
  {
    _id: uuid(),
    name: "Velocity Prime",
    original_price: 299,
    discounted_price: 199,
    category_name: "Женская обувь",
    is_stock: true,
    description:
      "Изготовленные из мягкой премиальной кожи, эти мокасины выражают элегантность с минималистичным городским стилем и легким беззастежечным дизайном.",
    trending: false,
    img: "/assets/images/products-images/image-kids-4.png",
  },
  {
    _id: uuid(),
    name: "Equinox Maxima",
    original_price: 399,
    discounted_price: 299,
    category_name: "Детская обувь",
    is_stock: true,
    description:
      "Эти городские сапоги изготовлены из роскошной замши и имеют современный силуэт, делая их универсальным и стильным выбором для любого случая.",
    trending: false,
    img: "/assets/images/products-images/image-kids-5.png",
  },
  {
    _id: uuid(),
    name: "Precision Optima",
    original_price: 99,
    discounted_price: 89,
    category_name: "Детская обувь",
    is_stock: true,
    description:
      "Эти беговые кроссовки сочетают в себе комфорт, стиль и производительность. Они оснащены удобной подошвой, амортизацией и эргономичным дизайном.",
    trending: false,
    img: "/assets/images/products-images/image-kids-6.png",
  },
  {
    _id: uuid(),
    name: "Apex Fusion X",
    original_price: 399,
    discounted_price: 299,
    category_name: "Детская обувь",
    is_stock: true,
    description:
      "Эти стильные городские ботинки идеально подходят для повседневной носки. Они выполнены из прочных материалов и обеспечивают комфорт и поддержку во время ходьбы.",
    trending: false,
    img: "/assets/images/products-images/image-kids-7.png",
  },
  {
    _id: uuid(),
    name: "Quantum Impact",
    original_price: 599,
    discounted_price: 499,
    category_name: "Детская обувь",
    is_stock: true,
    description:
      "Эти легкие и прочные треккинговые ботинки предназначены для исследования города и природы. Они обеспечивают защиту и комфорт в любых условиях.",
    trending: true,
    img: "/assets/images/products-images/image-kids-8.png",
  },
  {
    _id: uuid(),
    name: "Elevation Ultra",
    original_price: 699,
    discounted_price: 599,
    category_name: "Детская обувь",
    is_stock: true,
    description:
      "Эти классические кроссовки изготовлены из высококачественной кожи и обеспечивают стиль и комфорт в равной степени. Они подходят для любого формального события.",
    trending: false,
    img: "/assets/images/products-images/image-kids-9.png",
  },
  {
    _id: uuid(),
    name: "Radiant Elite",
    original_price: 899,
    discounted_price: 799,
    category_name: "Детская обувь",
    is_stock: true,
    description:
      "Эти тренировочные кроссовки предназначены для поддержки и стабильности во время тренировок с грузом. Они обеспечивают оптимальную посадку и комфорт во время подъемов.",
    trending: false,
    img: "/assets/images/products-images/image-kids-10.png",
  },
  {
    _id: uuid(),
    name: "Ignite Pro X",
    original_price: 399,
    discounted_price: 299,
    category_name: "Детская обувь",
    is_stock: true,
    description:
      "Эти премиальные броги сочетают в себе современный шик с классическим дизайном, украшенным городскими деталями и безупречной работой мастеров.",
    trending: false,
    img: "/assets/images/products-images/image-kids-11.png",
  },
  {
    _id: uuid(),
    name: "Luminary Evo",
    original_price: 999,
    discounted_price: 899,
    category_name: "Детская обувь",
    is_stock: true,
    description:
      "Сочетая городскую эстетику с нотками резкости, эти кеды на платформе отличаются премиальными материалами, уникальными текстурами и комфортной подошвой.",
    trending: false,
    img: "/assets/images/products-images/image-kids-12.png",
  },
  {
    _id: uuid(),
    name: "Velocity Boost",
    original_price: 699,
    discounted_price: 599,
    category_name: "Детская обувь",
    is_stock: false,
    description:
      "Эти городские кожаные мокасины предлагают изысканный и стильный образ благодаря своему премиальному качеству, элегантной силуэту и изысканной отделке.",
    trending: true,
    img: "/assets/images/products-images/image-kids-13.png",
  },
  {
    _id: uuid(),
    name: "Synthesis Xcel",
    original_price: 999,
    discounted_price: 899,
    category_name: "Детская обувь",
    is_stock: true,
    description:
      "Эти кроссовки выходят за рамки городской обуви благодаря инновационным материалам, геометрическим узорам и авангардному дизайну.",
    trending: false,
    img: "/assets/images/products-images/image-kids-14.png",
  },
  {
    _id: uuid(),
    name: "Momentum Prime",
    original_price: 799,
    discounted_price: 699,
    category_name: "Женская обувь",
    is_stock: false,
    description:
      "Эти ботильоны имеют стильный городской силуэт, премиальную кожу и декоративную молнию, добавляя современности любому образу.",
    trending: false,
    img: "/assets/images/products-images/image-kids-15.png",
  },
  {
    _id: uuid(),
    name: "Optimum Stride",
    original_price: 399,
    discounted_price: 299,
    category_name: "Женская обувь",
    is_stock: true,
    description:
      "Эти городские кеды сочетают в себе дышащую ткань вязки с премиальными акцентами, предлагая современный и комфортный вариант обуви.",
    trending: false,
    img: "/assets/images/products-images/image-kids-16.png",
  },
  {
    _id: uuid(),
    name: "Empower Pro X",
    original_price: 999,
    discounted_price: 1000,
    category_name: "Женская обувь",
    is_stock: false,
    description:
      "Эти броги сочетают в себе классическое очарование и городской стиль с их сложными перфорациями, роскошной кожей и городскими акцентами.",
    trending: true,
    img: "/assets/images/products-images/image-kids-17.png",
  },
  {
    _id: uuid(),
    name: "Elite Reactor",
    original_price: 1299,
    discounted_price: 1199,
    category_name: "Женская обувь",
    is_stock: false,
    description:
      "Сочетая атлетическую функциональность с городской эстетикой, эти кроссовки предлагают исключительный комфорт, премиальные материалы и стильные дизайнерские элементы.",
    trending: false,
    img: "/assets/images/products-images/image-kids-18.png",
  },
  {
    _id: uuid(),
    name: "Catalyst Hyper",
    original_price: 199,
    discounted_price: 99,
    category_name: "Женская обувь",
    is_stock: false,
    description:
      "Эти премиальные кожаные кеды воплощают в себе городскую изысканность благодаря своему элегантному дизайну, высокому качеству изготовления и вниманию к деталям.",
    trending: true,
    img: "/assets/images/products-images/image-kids-19.png",
  },
  {
    _id: uuid(),
    name: "Fusion Element",
    original_price: 79,
    discounted_price: 69,
    category_name: "Детская обувь",
    is_stock: true,
    description:
      "Эти дерби воплощают в себе городскую изысканность благодаря своим чистым линиям, премиальной коже и современной интерпретации вечного силуэта.",
    trending: false,
    img: "/assets/images/products-images/image-kids-20.png",
  },
  {
    _id: uuid(),
    name: "Triumph Elite",
    original_price: 1499,
    discounted_price: 999,
    category_name: "Детская обувь",
    is_stock: false,
    description:
      "Эти городские джоггеры сочетают в себе спортивные элементы дизайна с роскошными материалами, создавая уникальный и стильный выбор обуви для городских исследователей.",
    trending: false,
    img: "/assets/images/products-images/image-kids-21.png",
  },
  {
    _id: uuid(),
    name: "Evolve Pro X",
    original_price: 699,
    discounted_price: 599,
    category_name: "Мужская обувь",
    is_stock: true,
    description:
      "Эти балетки изготовлены из мягкой премиальной кожи, имеют изящный городской силуэт и обеспечивают комфортную посадку, предлагая стильный и универсальный выбор для городских жителей.",
    trending: true,
    img: "/assets/images/products-images/image-men-1.png",
  },

  {
    _id: uuid(),
    name: "Innovate Optima",
    original_price: 299,
    discounted_price: 199,
    category_name: "Мужская обувь",
    is_stock: false,
    description:
      "Изготовленные из мягкой замши, эти кроссовки испускают городскую роскошь благодаря своему изысканному силуэту, вниманию к деталям и превосходному комфорту.",
    trending: true,
    img: "/assets/images/products-images/image-men-4.png",
  },
  {
    _id: uuid(),
    name: "Phoenix Fusion",
    original_price: 499,
    discounted_price: 399,
    category_name: "Мужская обувь",
    is_stock: true,
    description:
      "Спроектированные для городских исследователей, эти горные ботинки имеют прочную конструкцию, грубый протектор и городские акценты, обеспечивая стиль и функциональность.",
    trending: false,
    img: "/assets/images/products-images/image-men-5.png",
  },
];
