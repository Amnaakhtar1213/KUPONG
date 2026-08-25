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
  }
];

export default fashionProducts;