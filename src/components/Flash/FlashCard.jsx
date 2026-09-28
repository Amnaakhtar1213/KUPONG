import React from "react";
import { Link } from "react-router-dom";

const FlashSaleCard = ({ product, setCart }) => {

  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  const handleAddToCart = () => {
    const kupongCart =
      JSON.parse(localStorage.getItem("kupongCart")) || [];

    const alreadyInCart = kupongCart.some(
      (cartItem) => cartItem.id === product.id
    );

    if (!alreadyInCart) {
      const updatedCart = [
        ...kupongCart,
        {
          ...product,
          quantity: 1,
        },
      ];

      localStorage.setItem(
        "kupongCart",
        JSON.stringify(updatedCart)
      );

      setCart(updatedCart);
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition duration-300">

      {/* Image */}
      <Link to={`/products/${product.id}`}>
        <div className="relative h-48 bg-gray-100 overflow-hidden">

          {/* Discount */}
          <span className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {discount}% OFF
          </span>

          {/* Flash Sale */}
          <span className="absolute top-2 right-2 z-10 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
            ⚡ FLASH SALE
          </span>

          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-3">

        <Link to={`/products/${product.id}`}>
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 min-h-[40px] hover:text-orange-500">
            {product.title}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <span className="text-yellow-500 text-sm">
            ★
          </span>

          <span className="text-sm font-medium">
            {product.rating}
          </span>

          <span className="text-xs text-gray-400">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="mt-2">

          <div className="flex items-center gap-2">

            <span className="text-lg font-bold text-gray-900">
              ₩{product.price.toLocaleString()}
            </span>

            <span className="text-xs text-gray-400 line-through">
              ₩{product.oldPrice.toLocaleString()}
            </span>

          </div>

          <p className="text-xs text-red-500 font-medium mt-1">
            Save ₩
            {(product.oldPrice - product.price).toLocaleString()}
          </p>

        </div>

        {/* Delivery */}
        <p className="text-xs text-gray-500 mt-2">
          🚚 {product.arrival}
        </p>

        {/* Add Cart */}
        <button
          onClick={handleAddToCart}
          className="w-full mt-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg text-sm transition"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default FlashSaleCard;
