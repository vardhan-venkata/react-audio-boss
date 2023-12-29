import React from 'react'
import Nav from '../../component/Nav'
import HeaderBody from '../../component/HeaderBody';
import CartItem from '../../component/CartItem';
import Footer from '../../component/Footer'

const Cart = () => {
  return (
    <div>
      <Nav />
      <HeaderBody />
      <div className='pl_5 pr_5'>
        <CartItem />
      </div>
      <Footer />
    </div>
  )
}

export default Cart;