import React from 'react'
import CartCard from './CartCard'
import CartSummery from './CartSummery'
import Cart from '../pages/Cart'


const CartGrid = ({ cart, setCart}) => {
  const totalItems = cart.reduce((score, product) => {
    return score + product.quantity;
  },0)
  return (
  <div className="mx-auto min-h-screen bg-gray-50 px-4 py-8 md:px-8 lg:px-40 mt-50 md:mt-20">
     <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 md:px-8 lg:px-10">
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
            CART Items
          </h1>
          <p className="text-sm text-gray-500 md:text-base">
            {totalItems} items in your cart
          </p>
        </div>
      </div>
  <div className="grid grid-cols-1 gap-6 mt-10 lg:grid-cols-3">
  <div className="mt-10 flex min-w-0 flex-col gap-4 px-4 lg:col-span-2 lg:mt-0">
    {cart.map((product) => (
      <CartCard key={product.id} product={product} setCart={setCart} cart={cart} />
    ))}
  </div>

  <div className="lg:col-span-1">
    <CartSummery cart={cart}/>
  </div>
</div>
</div>
  )
}
export default CartGrid

