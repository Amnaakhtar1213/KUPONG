import React from 'react'
import CartGrid from '../Cart/CartGrid'

const Cart = ({cart, setCart}) => {
  return (
    <div>
      <CartGrid cart={cart} setCart={setCart} />
    </div>
  )
}

export default Cart
