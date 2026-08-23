
import CategoryNav from "../Home/CategoryNav" 
import Header from "../Home/Header"
import Hero from "../Home/Hero"
import ProCardGrid from "../Home/ProCardGrid"

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <CategoryNav />
      <Hero />
      <ProCardGrid />
    </div>
  )
}

export default Home
