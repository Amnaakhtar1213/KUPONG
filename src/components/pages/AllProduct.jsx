import React from 'react'

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


const AllProduct = () => {

  // Combine datasets that belong to the same category

  const AllBeautyProducts = [
    ...BeautyCare,
    ...beautyProductsData
  ]

  const AllMensProducts = [
    ...MenData,
    ...mensCollectionData
  ]


  return (

    <div className="w-full px-4 md:px-8 lg:px-12 py-6 mt-30">

      {/* PAGE HEADING */}

      <div className="mb-10">

        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          All Products
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Discover our products
        </p>

      </div>


      {/* =========================
          COATS - ONLY 5
      ========================= */}

      <section className="mb-12">

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-5">
          Coats
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

          {CoatData.slice(0, 5).map((product) => (

            <CoatCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </section>


      {/* =========================
          BEAUTY - ONLY 5 TOTAL
      ========================= */}

      <section className="mb-12">

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-5">
          Beauty
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

          {AllBeautyProducts.slice(0, 5).map((product) => (

            <SkinCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </section>


      {/* =========================
          HOODIES - ONLY 5
      ========================= */}

      <section className="mb-12">

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-5">
          Hoodies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

          {HoodiesData.slice(0, 5).map((product) => (

            <HoodiesCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </section>


      {/* =========================
          KIDS - ONLY 5
      ========================= */}

      <section className="mb-12">

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-5">
          Kids Clothing
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

          {KidsClothData.slice(0, 5).map((product) => (

            <KidsCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </section>


      {/* =========================
          MEN - ONLY 5 TOTAL
      ========================= */}

      <section className="mb-12">

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-5">
          Men's Collection
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

          {AllMensProducts.slice(0, 5).map((product) => (

            <MensCollCards
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </section>


      {/* =========================
          SHOES - ONLY 5
      ========================= */}

      <section className="mb-12">

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-5">
          Shoes
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

          {ShoesData.slice(0, 5).map((product) => (

            <ShoesCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </section>


      {/* =========================
          TECHNOLOGY - ONLY 5
      ========================= */}

      <section className="mb-12">

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-5">
          Technology
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

          {TechData.slice(0, 5).map((product) => (

            <TechCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </section>


      {/* =========================
          WOMEN - ONLY 5
      ========================= */}

      <section className="mb-12">

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-5">
          Women's Collection
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

          {WomenData.slice(0, 5).map((product) => (

            <WomenCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </section>


      {/* =========================
          SWEATERS - ONLY 5
      ========================= */}

      <section className="mb-12">

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-5">
          Sweaters
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

          {SweaterData.slice(0, 5).map((product) => (

            <SweaterCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </section>

    </div>

  )
}


export default AllProduct