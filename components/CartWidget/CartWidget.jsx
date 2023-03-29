import React from 'react'
import cart from './assets/cart.svg'

const CartWidget = () => {
  return (
    <div>
        <img style={{height:"100px", width:"100px", }}src={cart} alt="cart-widget"/>
        0
    </div>
  )
}

export default CartWidget