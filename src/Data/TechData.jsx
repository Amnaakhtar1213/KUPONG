const TechData = [
  // LAPTOPS
  {
    id: 501,
    name: "Apple MacBook Air M5",
    title: "MacBook Air 13-inch M5",
    category: "Tech",
    type: "Laptop",
    brand: "Apple",
    price: 289999,
    oldPrice: 309999,
    rating: 4.9,
    reviews: 342,
    points: 289,
    size: "13.6-inch",
    color: "Midnight",
    processor: "Apple M5",
    ram: "16GB",
    storage: "512GB SSD",
    display: "Liquid Retina",
    battery: "All-day battery",
    operatingSystem: "macOS",
    tag: "New",
    arrival: "2-4 Days",
    description:
      "A thin and lightweight laptop designed for everyday productivity, development, study, and creative work.",
    features: [
      "Apple M5 chip",
      "16GB unified memory",
      "512GB SSD",
      "13.6-inch Liquid Retina display",
      "MagSafe charging"
    ],
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=90"
  },

  {
    id: 502,
    name: "Dell XPS 13",
    title: "Dell XPS 13 Premium Laptop",
    category: "Tech",
    type: "Laptop",
    brand: "Dell",
    price: 259999,
    oldPrice: 279999,
    rating: 4.8,
    reviews: 218,
    points: 259,
    size: "13.4-inch",
    color: "Silver",
    processor: "Intel Core Ultra",
    ram: "16GB",
    storage: "512GB SSD",
    display: "2.5K Touch",
    battery: "14+ Hours",
    operatingSystem: "Windows 11",
    tag: "Popular",
    arrival: "2-4 Days",
    description:
      "A compact premium Windows laptop with a high-resolution display and portable design.",
    features: [
      "13.4-inch display",
      "Intel Core Ultra",
      "16GB RAM",
      "512GB SSD",
      "Windows 11"
    ],
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1000&q=90"
  },

  {
    id: 503,
    name: "Samsung Galaxy Book6 Ultra",
    title: "Galaxy Book6 Ultra Performance Laptop",
    category: "Tech",
    type: "Laptop",
    brand: "Samsung",
    price: 349999,
    oldPrice: 379999,
    rating: 4.8,
    reviews: 174,
    points: 349,
    size: "16-inch",
    color: "Graphite",
    processor: "Intel Core Ultra",
    ram: "32GB",
    storage: "1TB SSD",
    display: "AMOLED",
    battery: "Long Battery",
    operatingSystem: "Windows 11",
    tag: "Premium",
    arrival: "3-5 Days",
    description:
      "A powerful premium laptop designed for demanding productivity, creative work, and multitasking.",
    features: [
      "16-inch AMOLED display",
      "32GB RAM",
      "1TB SSD",
      "Dedicated graphics",
      "Windows 11"
    ],
    image:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1000&q=90"
  },

  {
    id: 504,
    name: "Lenovo LOQ Gaming Laptop",
    title: "LOQ Gaming Laptop RTX Series",
    category: "Tech",
    type: "Gaming Laptop",
    brand: "Lenovo",
    price: 239999,
    oldPrice: 259999,
    rating: 4.7,
    reviews: 196,
    points: 239,
    size: "15.6-inch",
    color: "Storm Grey",
    processor: "Intel Core i7",
    ram: "16GB",
    storage: "1TB SSD",
    display: "144Hz",
    battery: "Fast Charging",
    operatingSystem: "Windows 11",
    tag: "Gaming",
    arrival: "3-5 Days",
    description:
      "A performance-focused gaming laptop with a high-refresh-rate display and dedicated graphics.",
    features: [
      "15.6-inch 144Hz display",
      "16GB RAM",
      "1TB SSD",
      "RTX graphics",
      "Gaming cooling system"
    ],
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1000&q=90"
  },

  // SMARTPHONES
  {
    id: 505,
    name: "Apple iPhone 17 Pro",
    title: "iPhone 17 Pro 256GB",
    category: "Tech",
    type: "Smartphone",
    brand: "Apple",
    price: 379999,
    oldPrice: 399999,
    rating: 4.9,
    reviews: 521,
    points: 379,
    size: "6.3-inch",
    color: "Titanium",
    processor: "A19 Pro",
    ram: "12GB",
    storage: "256GB",
    display: "Super Retina XDR",
    battery: "All-day",
    operatingSystem: "iOS",
    tag: "Flagship",
    arrival: "2-4 Days",
    description:
      "A premium smartphone with a high-performance processor, advanced cameras, and a bright high-resolution display.",
    features: [
      "6.3-inch OLED display",
      "A19 Pro chip",
      "Pro camera system",
      "Face ID",
      "USB-C"
    ],
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1000&q=90"
  },

  {
    id: 506,
    name: "Samsung Galaxy S26 Ultra",
    title: "Galaxy S26 Ultra 256GB",
    category: "Tech",
    type: "Smartphone",
    brand: "Samsung",
    price: 349999,
    oldPrice: 379999,
    rating: 4.9,
    reviews: 438,
    points: 349,
    size: "6.9-inch",
    color: "Titanium Black",
    processor: "Snapdragon flagship",
    ram: "12GB",
    storage: "256GB",
    display: "Dynamic AMOLED 2X",
    battery: "5000mAh",
    operatingSystem: "Android",
    tag: "Best Seller",
    arrival: "2-4 Days",
    description:
      "A flagship Android smartphone featuring a large AMOLED display, advanced camera system, and S Pen support.",
    features: [
      "6.9-inch AMOLED display",
      "Advanced camera system",
      "S Pen support",
      "5000mAh battery",
      "Fast charging"
    ],
    image:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=1000&q=90"
  },

  {
    id: 507,
    name: "Google Pixel 10 Pro",
    title: "Pixel 10 Pro AI Smartphone",
    category: "Tech",
    type: "Smartphone",
    brand: "Google",
    price: 299999,
    oldPrice: 324999,
    rating: 4.8,
    reviews: 287,
    points: 299,
    size: "6.3-inch",
    color: "Obsidian",
    processor: "Google Tensor",
    ram: "16GB",
    storage: "256GB",
    display: "OLED",
    battery: "All-day",
    operatingSystem: "Android",
    tag: "AI Phone",
    arrival: "3-5 Days",
    description:
      "A premium Android phone focused on photography, AI features, and a clean software experience.",
    features: [
      "OLED display",
      "AI-powered features",
      "Pro camera system",
      "256GB storage",
      "Wireless charging"
    ],
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1000&q=90"
  },

  {
    id: 508,
    name: "OnePlus 13",
    title: "OnePlus 13 5G Smartphone",
    category: "Tech",
    type: "Smartphone",
    brand: "OnePlus",
    price: 189999,
    oldPrice: 209999,
    rating: 4.7,
    reviews: 231,
    points: 189,
    size: "6.82-inch",
    color: "Black",
    processor: "Snapdragon 8 Elite",
    ram: "16GB",
    storage: "512GB",
    display: "120Hz AMOLED",
    battery: "6000mAh",
    operatingSystem: "Android",
    tag: "Value Pick",
    arrival: "2-4 Days",
    description:
      "A high-performance Android smartphone with a smooth high-refresh-rate display and large battery.",
    features: [
      "120Hz AMOLED",
      "16GB RAM",
      "512GB storage",
      "6000mAh battery",
      "5G connectivity"
    ],
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=90"
  },

  // TABLETS
  {
    id: 509,
    name: "Apple iPad Pro 13",
    title: "iPad Pro 13-inch M5",
    category: "Tech",
    type: "Tablet",
    brand: "Apple",
    price: 319999,
    oldPrice: 339999,
    rating: 4.9,
    reviews: 298,
    points: 319,
    size: "13-inch",
    color: "Space Black",
    processor: "Apple M5",
    ram: "16GB",
    storage: "256GB",
    display: "Ultra Retina XDR",
    battery: "10 Hours",
    operatingSystem: "iPadOS",
    tag: "Premium",
    arrival: "2-4 Days",
    description:
      "A powerful professional tablet suitable for creative work, study, entertainment, and multitasking.",
    features: [
      "13-inch display",
      "Apple M5 chip",
      "256GB storage",
      "Apple Pencil support",
      "USB-C"
    ],
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1000&q=90"
  },

  {
    id: 510,
    name: "Samsung Galaxy Tab S11",
    title: "Galaxy Tab S11 Android Tablet",
    category: "Tech",
    type: "Tablet",
    brand: "Samsung",
    price: 199999,
    oldPrice: 219999,
    rating: 4.8,
    reviews: 214,
    points: 199,
    size: "11-inch",
    color: "Silver",
    processor: "MediaTek Dimensity",
    ram: "12GB",
    storage: "256GB",
    display: "AMOLED 120Hz",
    battery: "Large Battery",
    operatingSystem: "Android",
    tag: "Popular",
    arrival: "2-4 Days",
    description:
      "A premium Android tablet with an AMOLED display, high refresh rate, and S Pen support.",
    features: [
      "11-inch AMOLED",
      "120Hz refresh rate",
      "S Pen support",
      "256GB storage",
      "Android"
    ],
    image:
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=1000&q=90"
  },

  {
    id: 511,
    name: "iPad Air 11",
    title: "iPad Air 11-inch M4",
    category: "Tech",
    type: "Tablet",
    brand: "Apple",
    price: 179999,
    oldPrice: 194999,
    rating: 4.8,
    reviews: 187,
    points: 179,
    size: "11-inch",
    color: "Blue",
    processor: "Apple M4",
    ram: "8GB",
    storage: "128GB",
    display: "Liquid Retina",
    battery: "10 Hours",
    operatingSystem: "iPadOS",
    tag: "Student Pick",
    arrival: "2-4 Days",
    description:
      "A lightweight tablet suited for studying, note-taking, entertainment, and everyday productivity.",
    features: [
      "M4 chip",
      "11-inch Liquid Retina",
      "128GB storage",
      "Apple Pencil support",
      "USB-C"
    ],
    image:
      "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=1000&q=90"
  },

  {
    id: 512,
    name: "OnePlus Pad 3",
    title: "OnePlus Pad 3 Android Tablet",
    category: "Tech",
    type: "Tablet",
    brand: "OnePlus",
    price: 129999,
    oldPrice: 144999,
    rating: 4.7,
    reviews: 143,
    points: 129,
    size: "13.2-inch",
    color: "Storm Blue",
    processor: "Snapdragon 8 Elite",
    ram: "12GB",
    storage: "256GB",
    display: "144Hz",
    battery: "Large Battery",
    operatingSystem: "Android",
    tag: "Trending",
    arrival: "3-5 Days",
    description:
      "A large-screen Android tablet designed for entertainment, productivity, and multitasking.",
    features: [
      "13.2-inch display",
      "144Hz refresh rate",
      "12GB RAM",
      "256GB storage",
      "Fast charging"
    ],
    image:
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1000&q=90"
  },

  // DESKTOP COMPUTERS
  {
    id: 513,
    name: "Apple iMac M4",
    title: "iMac 24-inch M4 Desktop",
    category: "Tech",
    type: "Desktop Computer",
    brand: "Apple",
    price: 299999,
    oldPrice: 324999,
    rating: 4.9,
    reviews: 176,
    points: 299,
    size: "24-inch",
    color: "Silver",
    processor: "Apple M4",
    ram: "16GB",
    storage: "256GB SSD",
    display: "4.5K Retina",
    operatingSystem: "macOS",
    tag: "Premium",
    arrival: "3-5 Days",
    description:
      "An all-in-one desktop combining a high-resolution display with Apple's M4 performance.",
    features: [
      "24-inch 4.5K Retina",
      "Apple M4 chip",
      "16GB memory",
      "256GB SSD",
      "All-in-one design"
    ],
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1000&q=90"
  },

  {
    id: 514,
    name: "Dell Tower Plus",
    title: "Dell Tower Plus Performance Desktop",
    category: "Tech",
    type: "Desktop Computer",
    brand: "Dell",
    price: 229999,
    oldPrice: 249999,
    rating: 4.7,
    reviews: 121,
    points: 229,
    size: "Desktop",
    color: "Black",
    processor: "Intel Core Ultra 7",
    ram: "32GB",
    storage: "1TB SSD",
    display: "Not Included",
    operatingSystem: "Windows 11",
    tag: "Performance",
    arrival: "3-5 Days",
    description:
      "A powerful desktop computer suitable for productivity, development, creative work, and gaming.",
    features: [
      "Intel Core Ultra 7",
      "32GB RAM",
      "1TB SSD",
      "Dedicated graphics option",
      "Multiple ports"
    ],
    image:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1000&q=90"
  },

  {
    id: 515,
    name: "KUPONG Creator PC",
    title: "KUPONG Creator Desktop PC",
    category: "Tech",
    type: "Desktop Computer",
    brand: "KUPONG",
    price: 199999,
    oldPrice: 224999,
    rating: 4.6,
    reviews: 89,
    points: 199,
    size: "ATX",
    color: "Black",
    processor: "Intel Core i7",
    ram: "32GB",
    storage: "1TB NVMe SSD",
    display: "Not Included",
    operatingSystem: "Windows 11",
    tag: "Creator",
    arrival: "4-6 Days",
    description:
      "A fictional KUPONG desktop configuration designed for coding, editing, design, and demanding everyday tasks.",
    features: [
      "32GB RAM",
      "1TB NVMe SSD",
      "Dedicated graphics",
      "RGB cooling",
      "Windows 11"
    ],
    image:
      "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=1000&q=90"
  },

  // MONITORS
  {
    id: 516,
    name: "Samsung Odyssey OLED G6",
    title: "Odyssey OLED Gaming Monitor",
    category: "Tech",
    type: "Monitor",
    brand: "Samsung",
    price: 149999,
    oldPrice: 169999,
    rating: 4.8,
    reviews: 132,
    points: 149,
    size: "27-inch",
    color: "Black",
    refreshRate: "240Hz",
    resolution: "QHD",
    display: "OLED",
    responseTime: "0.03ms",
    tag: "Gaming",
    arrival: "3-5 Days",
    description:
      "A high-refresh-rate OLED monitor designed for gaming and smooth visual performance.",
    features: [
      "27-inch OLED",
      "QHD resolution",
      "240Hz refresh rate",
      "0.03ms response time",
      "Gaming features"
    ],
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1000&q=90"
  },

  {
    id: 517,
    name: "Dell UltraSharp 27",
    title: "Dell UltraSharp 27-inch Monitor",
    category: "Tech",
    type: "Monitor",
    brand: "Dell",
    price: 99999,
    oldPrice: 114999,
    rating: 4.7,
    reviews: 117,
    points: 99,
    size: "27-inch",
    color: "Silver",
    refreshRate: "60Hz",
    resolution: "4K",
    display: "IPS",
    responseTime: "5ms",
    tag: "Work",
    arrival: "3-5 Days",
    description:
      "A sharp 4K productivity monitor designed for office work, coding, design, and multitasking.",
    features: [
      "27-inch 4K",
      "IPS panel",
      "USB-C connectivity",
      "Adjustable stand",
      "Wide viewing angles"
    ],
    image:
      "https://images.unsplash.com/photo-1527443195645-1133f7f28990?auto=format&fit=crop&w=1000&q=90"
  },

  // ACCESSORIES
  {
    id: 518,
    name: "Apple AirPods Pro",
    title: "AirPods Pro Wireless Earbuds",
    category: "Tech",
    type: "Earbuds",
    brand: "Apple",
    price: 69999,
    oldPrice: 74999,
    rating: 4.8,
    reviews: 412,
    points: 69,
    color: "White",
    battery: "Long Battery",
    connectivity: "Bluetooth",
    tag: "Best Seller",
    arrival: "2-4 Days",
    description:
      "Premium wireless earbuds with active noise cancellation and a compact charging case.",
    features: [
      "Active Noise Cancellation",
      "Transparency mode",
      "Wireless charging case",
      "Bluetooth",
      "Touch controls"
    ],
    image:
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1000&q=90"
  },

  {
    id: 519,
    name: "Samsung Galaxy Watch",
    title: "Galaxy Watch Smartwatch",
    category: "Tech",
    type: "Smartwatch",
    brand: "Samsung",
    price: 59999,
    oldPrice: 69999,
    rating: 4.7,
    reviews: 248,
    points: 59,
    size: "44mm",
    color: "Graphite",
    battery: "Multi-day",
    connectivity: "Bluetooth",
    operatingSystem: "Wear OS",
    tag: "Popular",
    arrival: "2-4 Days",
    description:
      "A modern smartwatch combining notifications, fitness tracking, apps, and everyday convenience.",
    features: [
      "AMOLED display",
      "Fitness tracking",
      "Heart-rate monitoring",
      "GPS",
      "Wear OS"
    ],
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=90"
  },

  {
    id: 520,
    name: "Logitech MX Keys",
    title: "MX Keys Wireless Keyboard",
    category: "Tech",
    type: "Keyboard",
    brand: "Logitech",
    price: 24999,
    oldPrice: 28999,
    rating: 4.8,
    reviews: 321,
    points: 24,
    color: "Graphite",
    connectivity: "Bluetooth",
    battery: "Rechargeable",
    tag: "Work",
    arrival: "2-4 Days",
    description:
      "A premium wireless keyboard designed for comfortable typing, coding, office work, and multitasking.",
    features: [
      "Wireless connection",
      "Backlit keys",
      "USB-C charging",
      "Multi-device support",
      "Comfortable low-profile keys"
    ],
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1000&q=90"
  }
];

export default TechData;
