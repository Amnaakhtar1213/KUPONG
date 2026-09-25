const KidsBooksData = [
  // 📖 STORY BOOK
  {
    id: 13001,
    name: "The Very Hungry Caterpillar",
    title: "The Very Hungry Caterpillar",
    brand: "Penguin Random House",
    category: "books",
    subCategory: "story-books",
    age: "2-5 Years",
    price: 899,
    oldPrice: 1099,
    rating: 4.9,
    reviews: 532,
    stock: 24,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
    description:
      "A colorful children's picture story that follows a caterpillar through a week of eating and growing before becoming a butterfly.",
    features: [
      "Colorful illustrations",
      "Simple storytelling",
      "Early childhood reading",
      "Picture book"
    ]
  },

  // 🐻 PICTURE BOOK
  {
    id: 13002,
    name: "Brown Bear Picture Book",
    title: "Brown Bear, Brown Bear, What Do You See?",
    brand: "Macmillan Publishers",
    category: "books",
    subCategory: "picture-books",
    age: "2-5 Years",
    price: 799,
    oldPrice: 999,
    rating: 4.8,
    reviews: 421,
    stock: 18,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    description:
      "A colorful picture book that introduces young children to animals and colors through repetitive storytelling.",
    features: [
      "Animal characters",
      "Colorful illustrations",
      "Simple vocabulary",
      "Early learning"
    ]
  },

  // 🦁 ANIMAL BOOK
  {
    id: 13003,
    name: "My First Animal Encyclopedia",
    title: "My First Animal Encyclopedia",
    brand: "DK",
    category: "books",
    subCategory: "animal-books",
    age: "5-8 Years",
    price: 1499,
    oldPrice: 1799,
    rating: 4.9,
    reviews: 318,
    stock: 15,
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80",
    description:
      "A colorful children's encyclopedia introducing young readers to animals, habitats, and fascinating facts.",
    features: [
      "Animal facts",
      "Large photographs",
      "Educational content",
      "Beginner encyclopedia"
    ]
  },

  // 🚀 SCIENCE BOOK
  {
    id: 13004,
    name: "Science Encyclopedia for Kids",
    title: "The Usborne Science Encyclopedia",
    brand: "Usborne",
    category: "books",
    subCategory: "science-books",
    age: "7-12 Years",
    price: 1899,
    oldPrice: 2299,
    rating: 4.8,
    reviews: 267,
    stock: 12,
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    description:
      "An illustrated science reference book covering fascinating topics from the natural world, space, technology, and the human body.",
    features: [
      "Science facts",
      "Illustrations",
      "Educational reference",
      "Multiple science topics"
    ]
  },

  // 🧠 EDUCATIONAL BOOK
  {
    id: 13005,
    name: "Math Practice Book",
    title: "Big First Grade Math Workbook",
    brand: "School Zone",
    category: "books",
    subCategory: "educational",
    age: "5-7 Years",
    price: 999,
    oldPrice: 1199,
    rating: 4.7,
    reviews: 194,
    stock: 20,
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
    description:
      "A children's math workbook containing practice activities for numbers, addition, subtraction, shapes, and basic mathematical concepts.",
    features: [
      "Math exercises",
      "Number practice",
      "Shapes and counting",
      "School support"
    ]
  },

  // 🔤 ALPHABET BOOK
  {
    id: 13006,
    name: "ABC Learning Book",
    title: "My First ABC Alphabet Book",
    brand: "Scholastic",
    category: "books",
    subCategory: "alphabet",
    age: "2-5 Years",
    price: 699,
    oldPrice: 849,
    rating: 4.8,
    reviews: 236,
    stock: 28,
    image:
      "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=800&q=80",
    description:
      "A colorful alphabet book designed to help young children recognize letters and learn simple words.",
    features: [
      "A-Z alphabet",
      "Colorful pictures",
      "Simple words",
      "Early learning"
    ]
  },

  // 🔢 NUMBERS BOOK
  {
    id: 13007,
    name: "Numbers Learning Book",
    title: "My First Numbers & Counting Book",
    brand: "Highlights",
    category: "books",
    subCategory: "numbers",
    age: "3-6 Years",
    price: 749,
    oldPrice: 899,
    rating: 4.7,
    reviews: 172,
    stock: 22,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    description:
      "An interactive early-learning book that introduces numbers, counting, and simple mathematical concepts.",
    features: [
      "Number recognition",
      "Counting activities",
      "Colorful illustrations",
      "Early math learning"
    ]
  },

  // 🧩 ACTIVITY BOOK
  {
    id: 13008,
    name: "Kids Activity Book",
    title: "Ultimate Kids Activity Book",
    brand: "Highlights",
    category: "books",
    subCategory: "activity-books",
    age: "5-8 Years",
    price: 899,
    oldPrice: 1099,
    rating: 4.8,
    reviews: 287,
    stock: 25,
    image:
      "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&w=800&q=80",
    description:
      "A fun activity book packed with puzzles, mazes, games, drawing activities, and challenges for children.",
    features: [
      "Puzzles",
      "Mazes",
      "Games",
      "Drawing activities"
    ]
  },

  // 🎨 COLORING BOOK
  {
    id: 13009,
    name: "Kids Coloring Book",
    title: "Big Coloring Book for Kids",
    brand: "Crayola",
    category: "books",
    subCategory: "coloring-books",
    age: "4-8 Years",
    price: 699,
    oldPrice: 849,
    rating: 4.9,
    reviews: 354,
    stock: 32,
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    description:
      "A large coloring book featuring fun illustrations that encourage creativity and artistic expression.",
    features: [
      "Large coloring pages",
      "Fun illustrations",
      "Creative activity",
      "Suitable for crayons and pencils"
    ]
  },

  // 🏰 FAIRY TALES
  {
    id: 13010,
    name: "Fairy Tales Collection",
    title: "Classic Fairy Tales for Kids",
    brand: "Ladybird",
    category: "books",
    subCategory: "fairy-tales",
    age: "5-9 Years",
    price: 1199,
    oldPrice: 1399,
    rating: 4.8,
    reviews: 218,
    stock: 17,
    image:
      "https://images.unsplash.com/photo-1511108690759-009324a90311?auto=format&fit=crop&w=800&q=80",
    description:
      "A collection of classic fairy tales rewritten for young readers with colorful illustrations.",
    features: [
      "Classic stories",
      "Colorful illustrations",
      "Easy reading",
      "Multiple fairy tales"
    ]
  },

  // 🏴‍☠️ ADVENTURE BOOK
  {
    id: 13011,
    name: "Kids Adventure Story",
    title: "The Secret Adventure",
    brand: "Scholastic",
    category: "books",
    subCategory: "adventure",
    age: "7-10 Years",
    price: 999,
    oldPrice: 1199,
    rating: 4.7,
    reviews: 163,
    stock: 14,
    image:
      "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?auto=format&fit=crop&w=800&q=80",
    description:
      "An exciting adventure story designed for children who enjoy mystery, exploration, and imaginative storytelling.",
    features: [
      "Adventure story",
      "Mystery elements",
      "Easy-to-read chapters",
      "Imaginative storytelling"
    ]
  },

  // 🦸 COMIC BOOK
  {
    id: 13012,
    name: "Kids Superhero Comic",
    title: "Marvel Kids Superhero Comic",
    brand: "Marvel",
    category: "books",
    subCategory: "comics",
    age: "6-10 Years",
    price: 899,
    oldPrice: 1099,
    rating: 4.8,
    reviews: 291,
    stock: 19,
    image:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=800&q=80",
    description:
      "A colorful superhero comic created for young readers who enjoy action, heroes, and illustrated storytelling.",
    features: [
      "Superhero stories",
      "Color illustrations",
      "Easy reading",
      "Comic format"
    ]
  },

  // 📚 EARLY READER
  {
    id: 13013,
    name: "Early Reader Book",
    title: "First Little Readers",
    brand: "Scholastic",
    category: "books",
    subCategory: "early-readers",
    age: "4-6 Years",
    price: 1299,
    oldPrice: 1499,
    rating: 4.9,
    reviews: 346,
    stock: 21,
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80",
    description:
      "Simple beginner stories designed to help young children develop confidence with independent reading.",
    features: [
      "Simple vocabulary",
      "Short stories",
      "Large text",
      "Beginner reading"
    ]
  },

  // 🦖 DINOSAUR BOOK
  {
    id: 13014,
    name: "Dinosaur Encyclopedia",
    title: "Dinosaurs Encyclopedia for Kids",
    brand: "National Geographic Kids",
    category: "books",
    subCategory: "dinosaurs",
    age: "6-10 Years",
    price: 1599,
    oldPrice: 1899,
    rating: 4.9,
    reviews: 278,
    stock: 13,
    image:
      "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=800&q=80",
    description:
      "An illustrated dinosaur reference book introducing children to prehistoric creatures, fossils, and fascinating dinosaur facts.",
    features: [
      "Dinosaur facts",
      "Illustrations",
      "Fossil information",
      "Educational reference"
    ]
  },

  // 🌍 GEOGRAPHY BOOK
  {
    id: 13015,
    name: "World Atlas for Kids",
    title: "Children's Illustrated World Atlas",
    brand: "National Geographic Kids",
    category: "books",
    subCategory: "geography",
    age: "7-12 Years",
    price: 1799,
    oldPrice: 2099,
    rating: 4.8,
    reviews: 185,
    stock: 10,
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80",
    description:
      "An illustrated world atlas introducing children to countries, continents, landmarks, cultures, and geography.",
    features: [
      "World maps",
      "Country facts",
      "Geography learning",
      "Colorful illustrations"
    ]
  },

  // 🔬 EXPERIMENT BOOK
  {
    id: 13016,
    name: "Science Experiments Book",
    title: "101 Easy Science Experiments for Kids",
    brand: "Usborne",
    category: "books",
    subCategory: "experiments",
    age: "7-12 Years",
    price: 1399,
    oldPrice: 1699,
    rating: 4.8,
    reviews: 214,
    stock: 16,
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    description:
      "A hands-on science book containing simple experiments that help children explore everyday scientific ideas.",
    features: [
      "Simple experiments",
      "Science explanations",
      "Hands-on activities",
      "Educational learning"
    ]
  },

  // 🧠 PUZZLE BOOK
  {
    id: 13017,
    name: "Kids Puzzle Book",
    title: "Brain Games & Puzzles for Kids",
    brand: "Highlights",
    category: "books",
    subCategory: "puzzle-books",
    age: "6-10 Years",
    price: 799,
    oldPrice: 949,
    rating: 4.7,
    reviews: 153,
    stock: 27,
    image:
      "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&w=800&q=80",
    description:
      "A collection of age-appropriate puzzles, brain games, riddles, and logic activities for children.",
    features: [
      "Logic puzzles",
      "Brain games",
      "Riddles",
      "Problem-solving activities"
    ]
  },

  // 📰 KIDS MAGAZINE
  {
    id: 13018,
    name: "National Geographic Kids",
    title: "National Geographic Kids Magazine",
    brand: "National Geographic",
    category: "magazines",
    subCategory: "kids-magazines",
    age: "6-12 Years",
    price: 699,
    oldPrice: 799,
    rating: 4.9,
    reviews: 432,
    stock: 30,
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
    description:
      "A children's magazine featuring animals, science, nature, geography, interesting facts, games, and educational stories.",
    features: [
      "Animal stories",
      "Science facts",
      "Nature",
      "Games and activities"
    ]
  },

  // 🧪 SCIENCE MAGAZINE
  {
    id: 13019,
    name: "Kids Science Magazine",
    title: "Science & Discovery Kids Magazine",
    brand: "Scholastic",
    category: "magazines",
    subCategory: "science-magazines",
    age: "7-12 Years",
    price: 599,
    oldPrice: 699,
    rating: 4.7,
    reviews: 128,
    stock: 25,
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80",
    description:
      "A fun educational magazine introducing children to science, experiments, inventions, technology, and the natural world.",
    features: [
      "Science articles",
      "Experiments",
      "Technology topics",
      "Educational activities"
    ]
  },

  // 🧑‍🚀 SPACE BOOK
  {
    id: 13020,
    name: "Space Encyclopedia",
    title: "Space Encyclopedia for Young Readers",
    brand: "DK",
    category: "books",
    subCategory: "space-books",
    age: "6-10 Years",
    price: 1699,
    oldPrice: 1999,
    rating: 4.9,
    reviews: 241,
    stock: 11,
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
    description:
      "An illustrated space book introducing children to planets, stars, astronauts, rockets, galaxies, and the universe.",
    features: [
      "Planets",
      "Stars and galaxies",
      "Astronauts",
      "Space exploration"
    ]
  }
];

export default KidsBooksData;