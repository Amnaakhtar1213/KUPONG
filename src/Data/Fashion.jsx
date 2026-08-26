const fashionProducts = [
  {
    id: 1,
    title: "Women's Oversized Cotton T-Shirt",
    category: "Women Clothing",
    price: 1899,
    oldPrice: 2499,
    discount: "24%",
    rating: 4.7,
    reviews: 128,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/3842/a4c1b6267f223b4957cce0dce90da87156c7c94291f68543bba133d757c0.jpeg",
    description: "Soft oversized cotton t-shirt with a relaxed fit, perfect for casual everyday wear.",
    colors: ["White", "Black", "Beige"],
    sizes: ["S", "M", "L", "XL"]
  },

  {
    id: 2,
    title: "Women's Elegant Floral Summer Dress",
    category: "Women Clothing",
    price: 3499,
    oldPrice: 4599,
    discount: "24%",
    rating: 4.8,
    reviews: 96,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/c0e7/abaa9a9b0673d526cc850d6922e7c8fe864ca7ca42feff614485a17ad42c.jpg",
    description: "Beautiful floral summer dress with a comfortable fit and elegant feminine design.",
    colors: ["Pink", "Blue", "White"],
    sizes: ["S", "M", "L"]
  },

  {
    id: 3,
    title: "Women's High-Waist Wide Leg Jeans",
    category: "Women Pants",
    price: 3299,
    oldPrice: 3999,
    discount: "18%",
    rating: 4.6,
    reviews: 174,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/ca3b/a31908f8ca9b4acb9320577a250be6d043d6e2fb0a8245686e5912d77e87.png",
    description: "Trendy high-waist wide-leg jeans designed for a stylish and comfortable fit.",
    colors: ["Blue", "Light Blue", "Black"],
    sizes: ["26", "28", "30", "32"]
  },

  {
    id: 4,
    title: "Women's Classic Wool Coat",
    category: "Women Coats",
    price: 6999,
    oldPrice: 8499,
    discount: "18%",
    rating: 4.8,
    reviews: 82,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/e188/4325bd2dc13b4a5553be4e813d77f6ef28c7866bec6fab84a98db0c58942.jpeg",
    description: "Classic wool coat with a sophisticated design, ideal for winter and formal outfits.",
    colors: ["Camel", "Black", "Grey"],
    sizes: ["S", "M", "L", "XL"]
  },

  {
    id: 5,
    title: "Women's Faux Fur Winter Coat",
    category: "Women Coats",
    price: 7999,
    oldPrice: 9999,
    discount: "20%",
    rating: 4.9,
    reviews: 64,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/0385/64331ce1df9442c008e2bc933d7b190269afe76cb2bba5f3b4c98a5aafa1.jpg",
    description: "Luxurious faux fur coat providing warmth and a fashionable winter look.",
    colors: ["Cream", "Brown", "Black"],
    sizes: ["S", "M", "L"]
  },

  {
    id: 6,
    title: "Women's Ribbed Knit Sweater",
    category: "Women Clothing",
    price: 2899,
    oldPrice: 3499,
    discount: "17%",
    rating: 4.6,
    reviews: 113,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/image_audit/stage/manual/b247421a1c355b8c21f4a3dec3cf4d059cd3562bff813aba5cb8602efbe0_1785372785279.jpeg",
    description: "Warm ribbed knit sweater with a comfortable stretch and modern winter style.",
    colors: ["Cream", "Brown", "Grey"],
    sizes: ["S", "M", "L", "XL"]
  },

  {
    id: 7,
    title: "Men's Regular Fit Cotton T-Shirt",
    category: "Men Clothing",
    price: 1799,
    oldPrice: 2299,
    discount: "22%",
    rating: 4.7,
    reviews: 215,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/0afe/126b3afe8e64cc19dac0b9d4f139fb3060e8c53520f65acda3443e387c1a.png",
    description: "Comfortable regular-fit cotton t-shirt suitable for everyday casual outfits.",
    colors: ["Black", "White", "Navy"],
    sizes: ["M", "L", "XL", "XXL"]
  },

  {
    id: 8,
    title: "Men's Casual Denim Jacket",
    category: "Men Jackets",
    price: 4299,
    oldPrice: 5299,
    discount: "19%",
    rating: 4.8,
    reviews: 138,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/3c9e/0728ceaba3b2caee59466c98fea3e46efcddade60578725506c5b1fa766c.jpg",
    description: "Classic denim jacket with a timeless design that works perfectly with casual outfits.",
    colors: ["Blue", "Dark Blue", "Black"],
    sizes: ["M", "L", "XL", "XXL"]
  },

  {
    id: 9,
    title: "Men's Slim Fit Chino Pants",
    category: "Men Pants",
    price: 2999,
    oldPrice: 3699,
    discount: "19%",
    rating: 4.6,
    reviews: 156,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/4aec/aaec6ac16946d4d7b2eeb834c0545f02c9bcc981c71501fdbd3682439ae5.png",
    description: "Modern slim-fit chino pants made from comfortable stretch cotton fabric.",
    colors: ["Khaki", "Black", "Navy"],
    sizes: ["30", "32", "34", "36"]
  },

  {
    id: 10,
    title: "Men's Formal Dress Shirt",
    category: "Men Shirts",
    price: 2499,
    oldPrice: 3199,
    discount: "22%",
    rating: 4.7,
    reviews: 189,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/rs_quotation_api/qk7fivfk/f184495ebb62442b9aa4f9544491288d.jpg",
    description: "Elegant formal shirt with a clean fit, suitable for office and formal occasions.",
    colors: ["White", "Light Blue", "Black"],
    sizes: ["M", "L", "XL", "XXL"]
  },

  {
    id: 11,
    title: "Men's Premium Wool Overcoat",
    category: "Men Coats",
    price: 7499,
    oldPrice: 8999,
    discount: "17%",
    rating: 4.9,
    reviews: 72,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/cb7a/4706ca97760ef9e589f6c5a963ad7c81686bd35c256a821b0f9da3058fe0.png",
    description: "Premium wool overcoat designed to provide warmth with a sophisticated appearance.",
    colors: ["Black", "Charcoal", "Camel"],
    sizes: ["M", "L", "XL", "XXL"]
  },

  {
    id: 12,
    title: "Men's Faux Fur Collar Winter Jacket",
    category: "Men Jackets",
    price: 5999,
    oldPrice: 7299,
    discount: "18%",
    rating: 4.8,
    reviews: 91,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/19224373279712-6b234981-814b-4975-91e0-814e480a2c30.jpg",
    description: "Warm winter jacket featuring a soft faux fur collar and durable outer fabric.",
    colors: ["Black", "Brown", "Olive"],
    sizes: ["M", "L", "XL", "XXL"]
  },

  {
    id: 13,
    title: "Unisex Oversized Hoodie",
    category: "Hoodies",
    price: 2999,
    oldPrice: 3799,
    discount: "21%",
    rating: 4.8,
    reviews: 241,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/1dc1/b8c6b32e6d39a5cf0d74620b2b0b66a5b1f411d83bec01fa8b92c4cb3aef.jpg",
    description: "Cozy oversized hoodie made from soft fleece fabric for everyday comfort.",
    colors: ["Black", "Grey", "Cream"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },

  {
    id: 14,
    title: "Classic Straight-Leg Denim Jeans",
    category: "Unisex Pants",
    price: 3199,
    oldPrice: 3999,
    discount: "20%",
    rating: 4.7,
    reviews: 203,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/9564/c3a359162a9ee9ce24c59de39ef544574d8c62c9280ad9db074439ece734.png",
    description: "Classic straight-leg denim jeans designed for everyday casual styling.",
    colors: ["Blue", "Dark Blue", "Black"],
    sizes: ["28", "30", "32", "34", "36"]
  },

  {
    id: 15,
    title: "Women's Casual Denim Skirt",
    category: "Women Skirts",
    price: 2699,
    oldPrice: 3299,
    discount: "18%",
    rating: 4.5,
    reviews: 87,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/4fd9/b07c3702c5b9a01a36e4c4fd185608c14a59f319ce0adb2efaa141309fdc.jpg",
    description: "Stylish denim skirt with a versatile design for casual everyday outfits.",
    colors: ["Blue", "Black"],
    sizes: ["S", "M", "L", "XL"]
  },

  {
    id: 16,
    title: "Women's Elegant Blazer",
    category: "Women Blazers",
    price: 4999,
    oldPrice: 5999,
    discount: "17%",
    rating: 4.8,
    reviews: 103,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/4aa8/bb18c3ecd155d195de033116b69133a7e14443e4b4cf387dd125627fd5b7.png",
    description: "Elegant tailored blazer perfect for office wear, meetings, and smart casual outfits.",
    colors: ["Black", "Beige", "Grey"],
    sizes: ["S", "M", "L", "XL"]
  },

  {
    id: 17,
    title: "Men's Casual Cargo Pants",
    category: "Men Pants",
    price: 2899,
    oldPrice: 3599,
    discount: "19%",
    rating: 4.6,
    reviews: 142,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/540b/a66c4120d7be0654c9c2d6af9af491e6651f232744d0c3be5a2352ba08a6.jpeg",
    description: "Comfortable cargo pants with multiple pockets and a relaxed modern fit.",
    colors: ["Black", "Olive", "Beige"],
    sizes: ["30", "32", "34", "36"]
  },

  {
    id: 18,
    title: "Women's Trench Coat",
    category: "Women Coats",
    price: 6499,
    oldPrice: 7999,
    discount: "19%",
    rating: 4.8,
    reviews: 76,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/b475/db909e74c11658715566ab73b08e94d5454f19af96601927899164e0c52c.jpg",
    description: "Classic long trench coat with a stylish silhouette for elegant seasonal outfits.",
    colors: ["Beige", "Black", "Brown"],
    sizes: ["S", "M", "L"]
  },

  {
    id: 19,
    title: "Men's Knitted Crewneck Sweater",
    category: "Men Clothing",
    price: 3299,
    oldPrice: 3999,
    discount: "18%",
    rating: 4.7,
    reviews: 119,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/c1ba/f38bfe3e8cfa7c308df65af9bc92bf5a59e5400207136e6e348ae9f59dc8.jpg",
    description: "Soft knitted crewneck sweater designed for comfortable and stylish winter layering.",
    colors: ["Grey", "Navy", "Brown"],
    sizes: ["M", "L", "XL", "XXL"]
  },

  {
    id: 20,
    title: "Premium Faux Fur Long Coat",
    category: "Fur Coats",
    price: 8999,
    oldPrice: 10999,
    discount: "18%",
    rating: 4.9,
    reviews: 58,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/167f/7635d2056790839cfabbefc629fb0001bff2878fe96f9aa36eafb0ab0468.jpeg",
    description: "Luxurious long faux fur coat with a premium appearance and cozy winter warmth.",
    colors: ["Cream", "Brown", "Black"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 21,
    title: "Elegant Casual Cotton Blouse for Women",
    category: "Women's Clothing",
    image:
      "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/cd64/fba55736d789b2bc89004872943810e6020f8fe7a57597ef7aa3a18ca747.jpg",
    rating: 4.8,
    reviews: 312,
    price: 18900,
    oldPrice: 25900,
    discount: 27,
    description:
      "A lightweight cotton blouse with an elegant silhouette, perfect for everyday wear, office outfits, and casual occasions.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Beige", "Blue", "Pink"],
    material: "100% Cotton",
    fit: "Regular Fit",
    season: "All Season",
  },

  {
    id: 22,
    title: "High-Waisted Straight Leg Casual Jeans",
    category: "Women's Clothing",
    image:
      "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/02eb/38c4a800722bff20aca50c20995e17fe9675a4c1d3fa0c885564f2533f67.png",
    rating: 4.7,
    reviews: 387,
    price: 24900,
    oldPrice: 32900,
    discount: 24,
    description:
      "Comfortable high-waisted jeans featuring a classic straight-leg silhouette and versatile design for everyday styling.",
    sizes: ["26", "28", "30", "32", "34", "36"],
    colors: ["Blue", "Light Blue", "Black"],
    material: "Stretch Denim",
    fit: "Straight Fit",
    season: "All Season",
  },

  {
    id: 23,
    title: "Floral Midi Dress with Elegant Relaxed Silhouette",
    category: "Women's Clothing",
    image:
      "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/image_audit/stage/manual/66ac105e6822fd12fa5b0814b21a1468ecde36abe6c893ee0aeceb513688_1760664029921.JPG",
    rating: 4.9,
    reviews: 428,
    price: 29900,
    oldPrice: 39900,
    discount: 25,
    description:
      "A feminine floral midi dress featuring a comfortable silhouette, making it suitable for casual outings, gatherings, and special occasions.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Floral Pink", "Floral Blue", "Cream"],
    material: "Polyester Blend",
    fit: "Relaxed Fit",
    season: "Spring / Summer",
  },
  {
    id: 24,
    title: "Minimal Leather Crossbody Shoulder Bag",
    category: "Women's Accessories",
    image:
      "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/ec73/ada5464a49ea26e81d0b9d269f842ab46f3730a43ccee7d78717eb7faf75.jpg",
    rating: 4.8,
    reviews: 265,
    price: 27900,
    oldPrice: 36900,
    discount: 24,
    description:
      "A compact and stylish crossbody bag with a clean minimalist design and enough space for everyday essentials.",
    colors: ["Black", "Brown", "Beige"],
    material: "Faux Leather",
    style: "Crossbody",
    compartments: "Multiple Compartments",
  },

  {
    id: 25,
    title: "Classic Lightweight Women's Sneakers",
    category: "Women's Footwear",
    image:
      "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/d131/ebe062010030183e4e2d033b0053b4f04d36165d5659585978509585f42e.jpg",
    rating: 4.7,
    reviews: 341,
    price: 32900,
    oldPrice: 42900,
    discount: 23,
    description:
      "Lightweight everyday sneakers designed for comfort with a versatile style that works with casual and sporty outfits.",
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["White", "Black", "Beige"],
    material: "Mesh & Rubber",
    fit: "Standard Fit",
    season: "All Season",
  },

  {
    id: 26,
    title: "Soft Knit Oversized Cardigan for Women",
    category: "Women's Clothing",
    image:
      "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/e98f/b062cb240671f5fd8f6a075960499f222f46d445db6a0bd9fd083b29f047.png",
    rating: 4.6,
    reviews: 194,
    price: 26900,
    oldPrice: 35900,
    discount: 25,
    description:
      "A soft knitted cardigan with an oversized silhouette that adds warmth and effortless style to everyday outfits.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Cream", "Gray", "Brown", "Black"],
    material: "Acrylic Knit",
    fit: "Oversized Fit",
    season: "Fall / Winter",
  },
   {
    id: 27,
    title: "Classic Regular Fit Cotton Casual Shirt",
    category: "Men's Clothing",
    image:
      "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/ad96/4ea6645a9adfd46ea49d5af4be83bdd468f6b5460925c2adb5f08c5b254f.jpg",
    rating: 4.8,
    reviews: 284,
    price: 18900,
    oldPrice: 25900,
    discount: 27,
    description:
      "A versatile cotton casual shirt with a clean design and comfortable regular fit, perfect for everyday wear and casual outings.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Blue", "Black"],
    material: "100% Cotton",
    fit: "Regular Fit",
    season: "All Season",
  },

  {
    id: 28,
    title: "Slim Fit Stretch Denim Jeans",
    category: "Men's Clothing",
    image:
      "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/e448/0f0d8efb2054806baa560c88e7c9ad6e9cc8b69db77ac1acbb5c194f0e8d.png",
    rating: 4.7,
    reviews: 346,
    price: 24900,
    oldPrice: 32900,
    discount: 24,
    description:
      "Modern slim-fit denim jeans made with stretch fabric for comfortable movement and an everyday stylish look.",
    sizes: ["30", "32", "34", "36", "38", "40"],
    colors: ["Dark Blue", "Black", "Light Blue"],
    material: "Stretch Denim",
    fit: "Slim Fit",
    season: "All Season",
  },

  {
    id: 29,
    title: "Lightweight Hooded Casual Sweatshirt",
    category: "Men's Clothing",
    image:
      "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/8a24/2ad7018eff69dd55c0c9bf541d511da815f4981fd252141c02504403aed9.png",
    rating: 4.6,
    reviews: 198,
    price: 22900,
    oldPrice: 29900,
    discount: 23,
    description:
      "A comfortable hooded sweatshirt with a soft interior and relaxed design, ideal for casual days and cool weather.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Gray", "Black", "Navy"],
    material: "Cotton Blend",
    fit: "Relaxed Fit",
    season: "Fall / Winter",
  },

  {
    id: 30,
    title: "Premium Minimalist Leather Casual Sneakers",
    category: "Men's Footwear",
    image:
      "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/d12c/99c998283605eb41fc1b7f402df141d3d471f8e3f1392ffe4ebdb961015c.png",
    rating: 4.9,
    reviews: 421,
    price: 34900,
    oldPrice: 45900,
    discount: 24,
    description:
      "Minimalist casual sneakers featuring a clean silhouette, comfortable sole, and versatile design for everyday outfits.",
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: ["White", "Black", "Brown"],
    material: "Leather",
    fit: "Standard Fit",
    season: "All Season",
  },

  {
    id: 31,
    title: "Classic Water-Resistant Everyday Wrist Watch",
    category: "Men's Accessories",
    image:
      "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/a878/41c26dc3cc425d739f0683d32081e3239025f90cda42e5ea2be173d891b9.png",
    rating: 4.7,
    reviews: 173,
    price: 29900,
    oldPrice: 39900,
    discount: 25,
    description:
      "A timeless everyday wrist watch featuring a clean dial, durable strap, and versatile design suitable for casual and formal occasions.",
    colors: ["Black", "Brown", "Silver"],
    material: "Stainless Steel & Leather",
    movement: "Quartz",
    waterResistance: "Water Resistant",
  },
  {
    id: 32,
    title: "Best Summer t-shirt with black strips",
    category: "Men's Clothing",
    image:
      "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/6e8f/fd225f2bc792b64b89702bc7fc2ea8515df9b5a46964e0989f1cfe892795.jpeg",
    rating: 4.8,
    reviews: 239,
    price: 38900,
    oldPrice: 52900,
    discount: 26,
    description:
      "A modern bomber jacket with a lightweight construction and clean silhouette, designed for casual everyday styling.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Olive", "Navy"],
    material: "Polyester Blend",
    fit: "Regular Fit",
    season: "Fall / Winter",
  },
    {
    id: 33,
    title: "Casual shirt for summer",
    category: "Men's Clothing",
    image:
      "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/image_audit/advertiser/1782820908390/4f682ebc-c17e-4f2d-9e29-324b9dec825e.jpeg",
    rating: 4.8,
    reviews: 239,
    price: 38900,
    oldPrice: 52900,
    discount: 26,
    description:
      "A modern bomber jacket with a lightweight construction and clean silhouette, designed for casual everyday styling.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Olive", "Navy"],
    material: "Polyester Blend",
    fit: "Regular Fit",
    season: "Fall / Winter",
  },
  {
    id: 34,
    title: "Premium Casual Bomber Jacket with Zip Closure",
    category: "Men's Clothing",
    image:
      "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/bc88/e925d80540a8cc2a4e72fa938dd3c7ca96ae31fb208265c8bf7478680d05.jpg",
    rating: 4.8,
    reviews: 239,
    price: 38900,
    oldPrice: 52900,
    discount: 26,
    description:
      "A modern bomber jacket with a lightweight construction and clean silhouette, designed for casual everyday styling.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Olive", "Navy"],
    material: "Polyester Blend",
    fit: "Regular Fit",
    season: "Fall / Winter",
  },
  
    {
    id: 35,
    title: "Premium Casual Black shrit",
    category: "Men's Clothing",
    image:
      "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/3186/a31436b094e0fd1a4d1776cbfd185f6e6e8c00edbd602c5086f783e93ccc.jpg",
    rating: 4.8,
    reviews: 239,
    price: 38900,
    oldPrice: 52900,
    discount: 26,
    description:
      "A modern bomber jacket with a lightweight construction and clean silhouette, designed for casual everyday styling.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Olive", "Navy"],
    material: "Polyester Blend",
    fit: "Regular Fit",
    season: "Fall / Winter",
  },
  
  

  
   
];

export default fashionProducts;