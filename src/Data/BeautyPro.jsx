const beautyProducts = [
  {
    id: 1,
    title: "Anua Heartleaf 77% Soothing Toner",
    brand: "Anua",
    category: "Toner",
    price: 3299,
    oldPrice: 3999,
    discount: "18%",
    rating: 4.8,
    reviews: 342,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/retail/images/2026/05/11/17/8/76b45570-2b0b-4ba4-94d3-9f927de03918.png",
    description: "A gentle heartleaf toner designed to soothe the skin and provide lightweight hydration.",
    skinType: "All Skin Types"
  },

 

  {
    id: 3,
    title: "Anua Heartleaf Quercetinol Pore Deep Cleansing Foam",
    brand: "Anua",
    category: "Double Cleanser",
    price: 2999,
    oldPrice: 3599,
    discount: "17%",
    rating: 4.7,
    reviews: 187,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/retail/images/2026/04/16/12/3/08da885a-28ca-44dc-aade-29061652c3a8.png",
    description: "A gentle daily cleanser that removes impurities and excess oil while leaving skin comfortable.",
    skinType: "Combination Skin"
  },

  {
    id: 4,
    title: "Anua Niacinamide 10% + TXA 4% Serum",
    brand: "Anua",
    category: "Serum",
    price: 3999,
    oldPrice: 4799,
    discount: "17%",
    rating: 4.8,
    reviews: 264,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/5053/fac6a53b87523bc9c1da56ae104f83b4870cb0dba63c0b75cf82b5d15395.png",
    description: "Lightweight serum formulated to support a brighter and more even-looking complexion.",
    skinType: "All Skin Types"
  },

  {
    id: 5,
    title: "Anua Heartleaf 70% Daily Lotion",
    brand: "Anua",
    category: "Moisturizer",
    price: 3599,
    oldPrice: 4299,
    discount: "16%",
    rating: 4.7,
    reviews: 126,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/1e04/60b074162a884bc82afaad44dd98d628fa197a9169791f209d10973cb1d1.png",
    description: "Lightweight daily moisturizer that provides comfortable hydration without a heavy finish.",
    skinType: "Normal to Combination"
  },

  {
    id: 6,
    title: "Anua Heartleaf Silky Moisture Sun Cream SPF50+",
    brand: "Anua",
    category: "Sunscreen",
    price: 4299,
    oldPrice: 4999,
    discount: "14%",
    rating: 4.8,
    reviews: 198,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/retail/images/9730a40b-5197-4adc-bcf6-b0191adb63e012252571245978626527.png",
    description: "Lightweight daily sunscreen designed to provide high sun protection with a comfortable finish.",
    skinType: "All Skin Types"
  },
   {
    id: 2,
    title: "Anua Heartleaf 77% Toner Pads",
    brand: "Anua",
    category: "Toner Pads",
    price: 3799,
    oldPrice: 4499,
    discount: "16%",
    rating: 4.8,
    reviews: 218,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/7b9e/c9cd4e4697b9f5749cf064c614d9a6fe75087e96c01f491e9a7cf41cf08d.jpg",
    description: "Pre-soaked heartleaf toner pads that gently refresh, hydrate, and calm the skin.",
    skinType: "Sensitive Skin"
  },

 
  {
    id: 9,
    title: "SKIN1004 Madagascar Centella Ampoule",
    brand: "SKIN1004",
    category: "Serum",
    price: 3899,
    oldPrice: 4599,
    discount: "15%",
    rating: 4.9,
    reviews: 389,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/2f2c/7663ae6ad5b854023dac1b2d2d02dfdd853e354055361193e6ee9f99bb0c.jpg",
    description: "Minimalist centella ampoule that delivers lightweight hydration and soothing care.",
    skinType: "Sensitive Skin"
  },

  {
    id: 10,
    title: "SKIN1004 Madagascar Centella Light Cleansing Oil",
    brand: "SKIN1004",
    category: "Double Cleanser",
    price: 3999,
    oldPrice: 4799,
    discount: "17%",
    rating: 4.8,
    reviews: 213,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/2390/ced3f0fca8f9d3986f477d45ca71b5410b7ceaf212a3a77f4b6bbc176793.png",
    description: "Light cleansing oil that helps dissolve makeup, sunscreen, and daily impurities.",
    skinType: "All Skin Types"
  },

  {
    id: 11,
    title: "Beauty of Joseon Ginseng Essence Water",
    brand: "Beauty of Joseon",
    category: "Toner",
    price: 3299,
    oldPrice: 3899,
    discount: "15%",
    rating: 4.8,
    reviews: 317,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/8d3c/8ea102d50c38b01bacd47c393ea3d5bb570e1860955b2779c20177f4b721.jpg",
    description: "Hydrating essence toner inspired by traditional Korean skincare ingredients.",
    skinType: "All Skin Types"
  },

  {
    id: 12,
    title: "Beauty of Joseon Green Plum Refreshing Cleanser",
    brand: "Beauty of Joseon",
    category: "Double Cleanser",
    price: 2899,
    oldPrice: 3499,
    discount: "17%",
    rating: 4.7,
    reviews: 245,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/7c30/fafd5bf5e858236751e7d036bd69f736e105afe3f38b3c71952469e34768.jpg",
    description: "Gentle low-irritation cleanser that removes impurities while maintaining skin comfort.",
    skinType: "All Skin Types"
  },

  {
    id: 13,
    title: "Beauty of Joseon Glow Serum Propolis + Niacinamide",
    brand: "Beauty of Joseon",
    category: "Serum",
    price: 3599,
    oldPrice: 4299,
    discount: "16%",
    rating: 4.9,
    reviews: 421,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/retail/images/1211172096515310-0b8a647f-5181-419c-a221-d57aa6228e45.jpg",
    description: "Lightweight glow serum formulated with propolis and niacinamide for a fresh-looking complexion.",
    skinType: "Combination Skin"
  },

  {
    id: 14,
    title: "Beauty of Joseon Relief Sun SPF50+",
    brand: "Beauty of Joseon",
    category: "Sunscreen",
    price: 3499,
    oldPrice: 4199,
    discount: "17%",
    rating: 4.9,
    reviews: 532,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/retail/images/1381107650503117-3a99ea7a-f3d8-4151-b2f5-396565c7559c.jpg",
    description: "Lightweight daily sunscreen with a comfortable moisturizing finish.",
    skinType: "All Skin Types"
  },

  {
    id: 15,
    title: "Beauty of Joseon Dynasty Cream",
    brand: "Beauty of Joseon",
    category: "Moisturizer",
    price: 3999,
    oldPrice: 4699,
    discount: "15%",
    rating: 4.8,
    reviews: 287,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/retail/images/475887851228326-6369fcb5-82bd-411b-9bb5-59f746d4d2b3.jpg",
    description: "Rich yet comfortable cream designed to nourish and moisturize dry-looking skin.",
    skinType: "Normal to Dry"
  },

  {
    id: 16,
    title: "MIXSOON Bean Essence",
    brand: "MIXSOON",
    category: "Serum",
    price: 4299,
    oldPrice: 4999,
    discount: "14%",
    rating: 4.8,
    reviews: 268,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/ca44/daf75f3352ba8e3d593190e078b5afee54ea63300d9fb55a510baf4b9489.jpg",
    description: "Nourishing essence with a smooth texture designed for hydrated and healthy-looking skin.",
    skinType: "All Skin Types"
  },

  {
    id: 17,
    title: "MIXSOON Centella Asiatica Toner",
    brand: "MIXSOON",
    category: "Toner",
    price: 3199,
    oldPrice: 3799,
    discount: "16%",
    rating: 4.7,
    reviews: 143,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/05b3/4ed49782ed2f45dad91c825d059be57d9839d51e97afebb8840d924379f6.jpg",
    description: "Lightweight centella toner designed to refresh and soothe the skin.",
    skinType: "Sensitive Skin"
  },

  {
    id: 18,
    title: "MIXSOON Centella Cleansing Foam",
    brand: "MIXSOON",
    category: "Double Cleanser",
    price: 2799,
    oldPrice: 3399,
    discount: "18%",
    rating: 4.6,
    reviews: 118,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/588f/be484296cf76dcaf047b275f474dee34bd62afd14ce7f470b438b163708a.jpg",
    description: "Soft foaming cleanser designed to remove daily impurities while keeping skin comfortable.",
    skinType: "All Skin Types"
  },

  {
    id: 19,
    title: "MIXSOON Bean Cream",
    brand: "MIXSOON",
    category: "Moisturizer",
    price: 4199,
    oldPrice: 4999,
    discount: "16%",
    rating: 4.8,
    reviews: 156,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/40f7/c258a1982a8a1b82edafdaf440ef946926e82011a25ee8c5dcb45905541c.jpg",
    description: "Moisturizing cream with a nourishing texture for soft and hydrated-looking skin.",
    skinType: "Normal to Dry"
  },

  {
    id: 20,
    title: "MIXSOON Centella Hand Cream",
    brand: "MIXSOON",
    category: "Hand Cream",
    price: 1899,
    oldPrice: 2299,
    discount: "17%",
    rating: 4.7,
    reviews: 92,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/d74f/8e63c393fd2a08d1b30c84bcec812e6256f912df2666ab5fa74945e674b2.jpg",
    description: "Soft hand cream designed to moisturize dry hands and leave them feeling smooth and comfortable.",
    skinType: "All Skin Types"
  },
   {
    id: 7,
    title: "SKIN1004 Madagascar Centella Toning Toner",
    brand: "SKIN1004",
    category: "Toner",
    price: 3399,
    oldPrice: 3999,
    discount: "15%",
    rating: 4.8,
    reviews: 231,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/d9b7/484ed8a715ef5f01466283d7def97e6a4f879900ac613f0c0f4048ed97cc.jpg",
    description: "Gentle centella-based toner designed to hydrate and refresh sensitive-looking skin.",
    skinType: "Sensitive Skin"
  },

  {
    id: 8,
    title: "SKIN1004 Madagascar Centella Probio-Cica Enrich Cream",
    brand: "SKIN1004",
    category: "Moisturizer",
    price: 4499,
    oldPrice: 5299,
    discount: "15%",
    rating: 4.9,
    reviews: 174,
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/fb4e/3531f9fff451e68b90ad2ce8b2682084eacea3c9fd795fe56935b049a4f4.png",
    description: "Rich moisturizing cream designed to support a comfortable and hydrated skin barrier.",
    skinType: "Dry to Sensitive"
  },

];

export default beautyProducts;