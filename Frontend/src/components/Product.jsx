import React from 'react'
import Header from './cart_components/Header'
import Products from './cart_components/section/Products';
function Product() {
  return (
      // It is component that loads cart header and products from our context
    <div>

        <Header />
        <Products />
    </div>
  )
}

export default Product