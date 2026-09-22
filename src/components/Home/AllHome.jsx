import React from 'react'
import { useNavigate } from 'react-router-dom'
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

const AllHome = () => {
  const navigate = useNavigate()
  
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
    <div className="w-full px-4 md:px-8 lg:px-12">
      <div className="">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
          Top Trending Products
        </h1>
      </div>

          <div onClick={() => navigate(`/products/${product.id}`)} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">

        {AllProducts.map((product) => {

          if (CoatData.slice(0,10).some((item) => item.id === product.id)) {
            return <CoatCard key={product.id} product={product} />;
          }

          if (BeautyCare.slice(0,10).some((item) => item.id === product.id)) {
            return <SkinCard key={product.id} product={product} />;
          }

          if (HoodiesData.slice(0,5).some((item) => item.id === product.id)) {
            return <HoodiesCard key={product.id} product={product} />;
          }

          if (KidsClothData.slice(0,10).some((item) => item.id === product.id)) {
            return <KidsCard key={product.id} product={product} />;
          }

          if (TechData.slice(0,5).some((item) => item.id === product.id)) {
            return <TechCard key={product.id} product={product} />;
          }

          if (WomenData.slice(0,5).some((item) => item.id === product.id)) {
            return <WomenCard key={product.id} product={product} />;
          }

          if (MenData.slice(0,5).some((item) => item.id === product.id)) {
            return <MensCollCards key={product.id} product={product} />;
          }

           if (ShoesData.slice(0,10).some((item) => item.id === product.id)) {
            return <ShoesCard key={product.id} product={product} />;
          }

            if (SweaterData.slice(0,10).some((item) => item.id === product.id)) {
            return <SweaterCard key={product.id} product={product} />;
          }

          return null;
        })}

      </div>
    </div>
  )
}

export default AllHome
