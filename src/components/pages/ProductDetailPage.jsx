import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import CoatData from '../../Data/Coats'
import BeautyCare from '../../Data/BeautyCare'
import beautyProductsData from '../../Data/Beauty'
import HoodiesData from '../../Data/HoodieData'
import KidsClothData from '../../Data/Kids'
import MenData from '../../Data/MensShirtsData'
import ShoesData from '../../Data/Shoes'
import SweaterData from '../../Data/Sweaters'
import TechData from '../../Data/TechData'
import WomenData from '../../Data/WomenCollData'
import mensCollectionData from '../../Data/MenData'

import HoodiesCard from '../HoodiesCard'
import KidsCard from '../KidsCard'
import MensCollCards from '../MensCollCards'
import ShoesCard from '../ShoesCard'
import SkinCard from '../SkinCard'
import SweaterCard from '../SweaterCard'
import TechCard from '../TechCard'
import WomenCard from '../Home/WomenCard'
import CoatCard from '../CoatCard'

const ProductDetailPage = ({setCart}) => {

   const AllProducts = [
    ...CoatData,
    ...BeautyCare,
    ...beautyProductsData,
    ...HoodiesData,
    ...KidsClothData,
    ...MenData,
    ...ShoesData,
    ...TechData,
    ...WomenData,
    ...mensCollectionData,
    ...SweaterData
  ]

  const { id } = useParams();

  const product = AllProducts.find((item) => item.id === Number(id));

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const kupongSavedProducts = JSON.parse(localStorage.getItem("kupongSavedProducts")) || []
    const alreadySaved = kupongSavedProducts.some((savedProduct) => savedProduct.id === product.id)
    setSaved(alreadySaved)
  }, [product.id])

  const handleSaved = () => {
  const kupongSavedProducts =
    JSON.parse(localStorage.getItem("kupongSavedProducts")) || [];

  const alreadySaved = kupongSavedProducts.some(
    (savedProduct) => savedProduct.id === product.id
  );

  if (alreadySaved) {
    const updatedSavedProducts = kupongSavedProducts.filter(
      (savedProduct) => savedProduct.id !== product.id
    );

    localStorage.setItem(
      "kupongSavedProducts",
      JSON.stringify(updatedSavedProducts)
    );

    setSaved(false);
  } else {
    kupongSavedProducts.push(product);

    localStorage.setItem(
      "kupongSavedProducts",
      JSON.stringify(kupongSavedProducts)
    );

    setSaved(true);
  }
};

  const handleAddToCart = () => {
  const kupongCart =
    JSON.parse(localStorage.getItem("kupongCart")) || []

  const isAlreadyCart = kupongCart.some(
    (cartItem) => cartItem.id === product.id
  )

  if (!isAlreadyCart) {
    kupongCart.push({
      ...product,
      quantity: 1
    })

    localStorage.setItem(
      "kupongCart",
      JSON.stringify(kupongCart)
    )
    setCart(kupongCart)
  }
}

  const [selectedImage, setSelectedImage] = useState(product?.image);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          Product not found
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 mt-30">

      {/* Main Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div>

          {/* Large Image */}
          <div className="h-137.5 bg-gray-100 rounded-xl overflow-hidden">
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Related Images */}
          <div className="grid grid-cols-6 gap-3 mt-5">

            <div
              onClick={() => setSelectedImage(product.image)}
              className="h-24 border-2 border-gray-300 rounded-lg overflow-hidden cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="h-24 bg-gray-100 rounded-lg"></div>
            <div className="h-24 bg-gray-100 rounded-lg"></div>
            <div className="h-24 bg-gray-100 rounded-lg"></div>
            <div className="h-24 bg-gray-100 rounded-lg"></div>
            <div className="h-24 bg-gray-100 rounded-lg"></div>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="py-2">

          {/* Tag */}
          {product.tag && (
            <span className="inline-block bg-black text-white text-xs px-3 py-1 rounded-full mb-4">
              {product.tag}
            </span>
          )}

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900">
            {product.title}
          </h1>

          {/* Type */}
          <p className="text-sm text-gray-500 mt-2">
            {product.type}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-4">
            <span className="text-yellow-500 text-lg">
              ★
            </span>

            <span className="font-semibold">
              {product.rating}
            </span>

            <span className="text-gray-400">
              ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mt-6">

            <span className="text-3xl font-bold text-gray-900">
              ${product.price}
            </span>

            {product.oldPrice && (
              <span className="text-lg text-gray-400 line-through">
                ${product.oldPrice}
              </span>
            )}

          </div>

          {/* Points */}
          <p className="text-green-600 font-medium mt-2">
            +{product.points} points
          </p>

          <hr className="my-6" />

          {/* Product Information */}
          <div className="space-y-3 text-sm">

            <div className="flex">
              <span className="w-28 text-gray-500">Brand</span>
              <span className="font-medium">{product.brand}</span>
            </div>

            <div className="flex">
              <span className="w-28 text-gray-500">Size</span>
              <span className="font-medium">{product.size}</span>
            </div>

            <div className="flex">
              <span className="w-28 text-gray-500">Color</span>
              <span className="font-medium">{product.color}</span>
            </div>

            <div className="flex">
              <span className="w-28 text-gray-500">Material</span>
              <span className="font-medium">{product.material}</span>
            </div>

            <div className="flex">
              <span className="w-28 text-gray-500">Fit</span>
              <span className="font-medium">{product.fit}</span>
            </div>

            <div className="flex">
              <span className="w-28 text-gray-500">Delivery</span>
              <span className="font-medium text-green-600">
                {product.arrival}
              </span>
            </div>

          </div>

          <hr className="my-6" />

          {/* Description */}
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Description
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-8">

            {/* Heart */}
            <button
              onClick={handleSaved}
              className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100"
            >
              <i
                className={`fa-solid fa-heart text-xl ${
                  saved ? "text-red-700" : "text-gray-400"
                }`}
              ></i>
            </button>

            {/* Add Cart */}
           <Link to="/cart">
  <button
    onClick={handleAddToCart}
    className="px-4 py-1 h-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
  >
    Add to Cart
  </button>
</Link>
           

          </div>

        </div>
      </div>


      {/* FEATURES */}
      <div className="mt-14 border-t pt-8">

        <h2 className="text-2xl font-bold text-gray-900 mb-5">
          Product Features
        </h2>

        <ul className="space-y-2 text-gray-600">

          {product.features?.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              {feature}
            </li>
          ))}

        </ul>

      </div>

    </div>
  );
};

export default ProductDetailPage;