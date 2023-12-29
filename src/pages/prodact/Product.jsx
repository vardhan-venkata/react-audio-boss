import React, { useState, useEffect } from 'react'

import Spinner from '../../component/spinner/Spinner'
import Nav from '../../component/Nav'
import ProductDetail from '../../component/ProductDetail'
import ProductFeatures from '../../component/ProductFeatures'
import ProductGallery from '../../component/ProductGallery'
import ProductYMLike from '../../component/ProductYMLike'
import CategoryCard from '../../component/CategoryCard'
import ProductBringing from '../../component/ProductBringing'
import Footer from '../../component/Footer'

const Product = () => {
  const [showData,setShowData] = useState(false)

  useEffect(()=>{
    setTimeout(() => {
      setShowData(true)
    }, 500);
  },[])

  return (
    showData ?
      <>
        <Nav />
        <div className='ml_25 mr_25'>
          <ProductDetail />
          <ProductFeatures />
          <ProductGallery />
          <ProductYMLike />
          <CategoryCard />
        </div>
        <div className='pl_5 pr_5'>
          <ProductBringing />
        </div>
        <Footer />
      </>
    :
      <Spinner />
  )
}

export default Product
