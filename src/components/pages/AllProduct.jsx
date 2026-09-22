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

const AllProduct = ({product}) => {

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

  
  return (
      <div className="w-full px-4 md:px-8 lg:px-12 py-6 mt-30">

      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          All Products
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Discover all products
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

        {AllProducts.map((product) => {

          if (CoatData.some((item) => item.id === product.id)) {
            return <CoatCard key={product.id} product={product} />;
          }

          if (BeautyCare.some((item) => item.id === product.id)) {
            return <SkinCard key={product.id} product={product} />;
          }

          if (HoodiesData.some((item) => item.id === product.id)) {
            return <HoodiesCard key={product.id} product={product} />;
          }

          if (KidsClothData.some((item) => item.id === product.id)) {
            return <KidsCard key={product.id} product={product} />;
          }

          if (TechData.some((item) => item.id === product.id)) {
            return <TechCard key={product.id} product={product} />;
          }

          if (WomenData.some((item) => item.id === product.id)) {
            return <WomenCard key={product.id} product={product} />;
          }

          if (MenData.some((item) => item.id === product.id)) {
            return <MensCollCards key={product.id} product={product} />;
          }

           if (ShoesData.some((item) => item.id === product.id)) {
            return <ShoesCard key={product.id} product={product} />;
          }

            if (SweaterData.some((item) => item.id === product.id)) {
            return <SweaterCard key={product.id} product={product} />;
          }

          return null;
        })}

      </div>
    </div>
  )
}

export default AllProduct
