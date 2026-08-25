
import BeautyGrid from "../Home/BeautyGrid"
import CategoryCardGrid from "../Home/CategoryCardGrid"
import CategoryNav from "../Home/CategoryNav" 
import ClothGrid from "../Home/ClothGrid"
import FeatureGrid from "../Home/FeatureGrid"
import Header from "../Home/Header"
import Hero from "../Home/Hero"
import KitchenGrid from "../Home/KitchenGrid"
import MenGrid from "../Home/MenGrid"
import ProCardGrid from "../Home/ProCardGrid"
import PromoBanner from "../Home/PromoBanner"
import TechGrid from "../Home/TechGrid"
import WomenGrid from "../Home/WomenGrid"


const Home = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <CategoryNav />
      <Hero />
      <ProCardGrid />
      <CategoryCardGrid />
      <FeatureGrid />
      <PromoBanner />
      <KitchenGrid />
      <ClothGrid />
      <TechGrid />
      <MenGrid />
      <WomenGrid />
      <BeautyGrid />
    </div>
  )
}

export default Home
