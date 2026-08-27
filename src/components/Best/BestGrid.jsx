
import bestSellerData from '../../Data/Best'
import BestCard from './BestCard'

const BestGrid = () => {
  return (
       <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-5 mt-30 justify-items-center p-20 gap-4">
      {
      bestSellerData.map((product) => {
        return <BestCard key={product.id} product={product} />
      })
    }
      </div>
    
  )
} 
export default BestGrid