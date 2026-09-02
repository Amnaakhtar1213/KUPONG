

const KitchenSec = ({product}) => {
  return (
    <div className="hover:shadow hover:shadow-gray-400 rounded-xl">
    <div className="relative w-97 md:w-69">
      <img src={product.image} className="w-full h-full rounded-t-xl"/>
      <i className="absolute bottom-2 right-2 text-gray-300 fa-solid fa-heart"></i>
    </div>
    <div className="p-2">
      <h1 className="text-xl font-semibold text-center">{product.title}</h1>
      <p className="text-[#ff8200] mt-2">up to 30% off</p>
      <p className="text-green-700 mt-2">Gurantee arrival tomorrow</p>
      <h2 className="text-red-700 font-bold text-xl text-center">{product.price} won</h2>
    </div>
    </div>
  )
}

export default KitchenSec
