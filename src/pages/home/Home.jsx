import React, { useState, useEffect } from 'react'

import Spinner from '../../component/spinner/Spinner'
import Nav from '../../component/Nav'
import HeaderBody from '../../component/HeaderBody'
import CategoryCard from '../../component/CategoryCard'
import HomeAlbum from '../../component/HomeAlbum'
import ProductBringing from '../../component/ProductBringing'
import Footer from '../../component/Footer'

const Home = () => {
  const [showData,setShowData] = useState(false)

  useEffect(()=>{
    setTimeout(() => {
      setShowData(true)
    }, 500);
  },[])
  
  return (
    showData ?
      <section id={'home'}>
        <Nav />
        <HeaderBody />
        <div className='pl_5 pr_5'>
          <CategoryCard />
          <HomeAlbum />
          <ProductBringing />
        </div>
        <Footer />
      </section>
    :
      <Spinner />
  )
}

export default Home
