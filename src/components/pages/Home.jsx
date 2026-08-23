
import CategoryCardGrid from "../Home/CategoryCardGrid"
import CategoryNav from "../Home/CategoryNav" 
import Header from "../Home/Header"
import Hero from "../Home/Hero"
import ProCardGrid from "../Home/ProCardGrid"

const Home = () => {
  return (
    <div className="bg-gray-100 p-8 md:p-20">
      <Header />
      <CategoryNav />
      <Hero />
      <ProCardGrid />
      <CategoryCardGrid />
    </div>
  )
}

export default Home
