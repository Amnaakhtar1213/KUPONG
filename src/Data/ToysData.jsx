const ToysData = [
  {
    id: 11001,
    name: "Classic Building Blocks",
    title: "Classic Building Blocks Set",
    brand: "LEGO",
    category: "toys",
    subCategory: "building",
    age: "4+ Years",
    price: 2499,
    oldPrice: 2999,
    rating: 4.8,
    reviews: 324,
    stock: 18,
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
    description:
      "A colorful building block set designed to encourage creativity, imagination, and hands-on construction. Kids can create buildings, vehicles, animals, and their own unique designs.",
    features: [
      "Colorful building blocks",
      "Creative construction play",
      "Reusable storage box",
      "Suitable for ages 4+"
    ]
  },

  {
    id: 11002,
    name: "Remote Control Racing Car",
    title: "Remote Control Racing Car",
    brand: "Hot Wheels",
    category: "toys",
    subCategory: "remote-control",
    age: "6+ Years",
    price: 3299,
    oldPrice: 3999,
    rating: 4.6,
    reviews: 187,
    stock: 12,
    image:
      "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=800&q=80",
    description:
      "A fun remote-control racing car for kids who enjoy speed, racing, and imaginative driving games.",
    features: [
      "Remote controlled",
      "Racing design",
      "Easy-to-use controller",
      "Indoor and outdoor play"
    ]
  },

  {
    id: 11003,
    name: "Teddy Bear Plush Toy",
    title: "Soft Teddy Bear Plush Toy",
    brand: "Teddy Mountain",
    category: "toys",
    subCategory: "plush",
    age: "3+ Years",
    price: 1899,
    oldPrice: 2299,
    rating: 4.7,
    reviews: 241,
    stock: 25,
    image:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=800&q=80",
    description:
      "A soft and cuddly teddy bear made for children who love plush companions and imaginative role play.",
    features: [
      "Soft plush material",
      "Cute teddy design",
      "Lightweight",
      "Great gift for kids"
    ]
  },

  {
    id: 11004,
    name: "Magnetic Building Tiles",
    title: "Magnetic Building Tiles Set",
    brand: "Magformers",
    category: "toys",
    subCategory: "building",
    age: "3+ Years",
    price: 4299,
    oldPrice: 4999,
    rating: 4.9,
    reviews: 156,
    stock: 9,
    image:
      "https://images.unsplash.com/photo-1599623560574-39d485900c95?auto=format&fit=crop&w=800&q=80",
    description:
      "Colorful magnetic construction tiles that allow children to build different shapes and structures while developing spatial thinking.",
    features: [
      "Magnetic construction pieces",
      "Colorful geometric shapes",
      "Encourages creativity",
      "STEM learning activity"
    ]
  },

  {
    id: 11005,
    name: "Wooden Puzzle Set",
    title: "Cute Animal Puzzle Set",
    brand: "Melissa & Doug",
    category: "toys",
    subCategory: "puzzles",
    age: "3+ Years",
    price: 1599,
    oldPrice: 1999,
    rating: 4.7,
    reviews: 198,
    stock: 20,
    image:
      "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2025/10/27/17/2/6c3bf94e-6612-4bdc-8da5-8126cf5fb5b2.jpg",
    description:
      "A colorful wooden puzzle designed to introduce children to animals while developing problem-solving and matching skills.",
    features: [
      "Wooden puzzle pieces",
      "Animal designs",
      "Educational play",
      "Develops problem-solving skills"
    ]
  },

  {
    id: 11006,
    name: "Toy Kitchen Set",
    title: "Kids Pretend Play Train Set",
    brand: "Fisher-Price",
    category: "toys",
    subCategory: "pretend-play",
    age: "3+ Years",
    price: 5499,
    oldPrice: 6499,
    rating: 4.6,
    reviews: 143,
    stock: 7,
    image:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
    description:
      "A colorful pretend-play kitchen set that lets children enjoy imaginative cooking and role-playing activities.",
    features: [
      "Pretend cooking accessories",
      "Colorful kitchen design",
      "Role-play activity",
      "Encourages imagination"
    ]
  },

  {
    id: 11007,
    name: "Dinosaur Figure Set",
    title: "Shapes Game Figure Set",
    brand: "Jurassic World",
    category: "toys",
    subCategory: "figures",
    age: "4+ Years",
    price: 2799,
    oldPrice: 3299,
    rating: 4.8,
    reviews: 276,
    stock: 14,
    image:
      "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&w=800&q=80",
    description:
      "A dinosaur figure collection for imaginative prehistoric adventures and storytelling games.",
    features: [
      "Multiple dinosaur figures",
      "Detailed designs",
      "Adventure play",
      "Storytelling activity"
    ]
  },

  {
    id: 11008,
    name: "Toy Doctor Kit",
    title: "Kids makeUp Pretend Play Kit",
    brand: "Fisher-Price",
    category: "toys",
    subCategory: "pretend-play",
    age: "3+ Years",
    price: 2199,
    oldPrice: 2699,
    rating: 4.5,
    reviews: 119,
    stock: 16,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
    description:
      "A pretend doctor kit that allows children to role-play as doctors and learn about simple healthcare tools.",
    features: [
      "Pretend medical accessories",
      "Doctor role play",
      "Encourages communication",
      "Educational pretend play"
    ]
  },

  {
    id: 11009,
    name: "Coloring Art Set",
    title: "Kids Creative Art & Coloring Set",
    brand: "Crayola",
    category: "toys",
    subCategory: "arts",
    age: "4+ Years",
    price: 1999,
    oldPrice: 2499,
    rating: 4.8,
    reviews: 302,
    stock: 30,
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    description:
      "A creative art set containing colorful supplies for drawing, coloring, and artistic activities.",
    features: [
      "Coloring supplies",
      "Creative drawing activities",
      "Bright colors",
      "Encourages artistic expression"
    ]
  },

  {
    id: 11010,
    name: "Kids Musical Keyboard",
    title: "Electronic Kids Musical Lightening Sword",
    brand: "VTech",
    category: "toys",
    subCategory: "musical",
    age: "3+ Years",
    price: 3899,
    oldPrice: 4499,
    rating: 4.6,
    reviews: 134,
    stock: 10,
    image:
      "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/c4de/6abfc0607f09cd07fbd80f1a7603a2c3cfc10ef27ab4e04f87df0ebe9d62.jpg",
    description:
      "A colorful children's keyboard designed to introduce kids to music through sounds, keys, and simple melodies.",
    features: [
      "Interactive keys",
      "Musical sounds",
      "Beginner-friendly design",
      "Encourages musical exploration"
    ]
  },

  {
    id: 11011,
    name: "Toy Bus",
    title: "Electric Toy Bus",
    brand: "Thomas & Friends",
    category: "toys",
    subCategory: "vehicles",
    age: "3+ Years",
    price: 3599,
    oldPrice: 4299,
    rating: 4.7,
    reviews: 167,
    stock: 11,
    image:
      "https://static.coupangcdn.com/image/component_62_asset/component_62_asset_874871e0-6a4c-49e7-955c-ccf367d8bcbc.png",
    description:
      "A fun toy train set for children who enjoy vehicles, tracks, and imaginative transportation adventures.",
    features: [
      "Toy train",
      "Track pieces",
      "Vehicle play",
      "Imaginative storytelling"
    ]
  },

  {
    id: 11012,
    name: "Toys Game Set",
    title: "Kids Game Playing ",
    brand: "Spalding",
    category: "toys",
    subCategory: "sports",
    age: "5+ Years",
    price: 2999,
    oldPrice: 3499,
    rating: 4.5,
    reviews: 98,
    stock: 8,
    image:
      "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/839c/bdc2223eb54ffc25990cf24eebb567a3dc41b8e4cdf0ca931bb297788222.jpg",
    description:
      "A mini basketball set designed for children to practice throwing, aiming, and basic basketball skills.",
    features: [
      "Mini basketball hoop",
      "Kids-sized ball",
      "Indoor play",
      "Active physical play"
    ]
  },
  {
    id: 11013,
    name: "Kids Musical Keyboard",
    title: "Blue Slime Jar",
    brand: "VTech",
    category: "toys",
    subCategory: "musical",
    age: "3+ Years",
    price: 3899,
    oldPrice: 4499,
    rating: 4.6,
    reviews: 134,
    stock: 10,
    image:
      "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/5e8e/0b89dc46332b94d48771314bf784ea1efde58a882226f1a4c492554073c0.jpg",
    description:
      "A colorful children's keyboard designed to introduce kids to music through sounds, keys, and simple melodies.",
    features: [
      "Interactive keys",
      "Musical sounds",
      "Beginner-friendly design",
      "Encourages musical exploration"
    ]
  },

  {
    id: 11014,
    name: "Toy Train Set",
    title: "Electric Bear Mermaid",
    brand: "Thomas & Friends",
    category: "toys",
    subCategory: "vehicles",
    age: "3+ Years",
    price: 3599,
    oldPrice: 4299,
    rating: 4.7,
    reviews: 167,
    stock: 11,
    image:
      "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/image_audit/stage/manual/86ee5e099d91c679cccbc1f2af206cb6108bf662c1fe50029a88d6eb8e7d_1789710532073.jpg",
    description:
      "A fun toy train set for children who enjoy vehicles, tracks, and imaginative transportation adventures.",
    features: [
      "Toy train",
      "Track pieces",
      "Vehicle play",
      "Imaginative storytelling"
    ]
  },

  {
    id: 11015,
    name: "Basketball Hoop Set",
    title: "Kids Mini Toy Cyber Truck",
    brand: "Spalding",
    category: "toys",
    subCategory: "sports",
    age: "5+ Years",
    price: 2999,
    oldPrice: 3499,
    rating: 4.5,
    reviews: 98,
    stock: 8,
    image:
      "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2025/09/29/18/2/e830e3ab-98ef-48fa-8e5e-5e118688fe51.jpg",
    description:
      "A mini basketball set designed for children to practice throwing, aiming, and basic basketball skills.",
    features: [
      "Mini basketball hoop",
      "Kids-sized ball",
      "Indoor play",
      "Active physical play"
    ]
  }
];

export default ToysData;