import React from 'react'
import CartGrid from '../Cart/CartGrid'

const Cart = ({cart, setCart, order, setOrder}) => {
  return (
    <div>
      <CartGrid cart={cart} setCart={setCart} order={order} setOrder={setOrder} />
    </div>
  )
}

export default Cart
