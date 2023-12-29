import React,{useState, useEffect} from 'react'

import Spinner from '../../component/spinner/Spinner'
import Nav from '../../component/Nav'
import HeaderBody from '../../component/HeaderBody';
import ProductCard from '../../component/ProductCard';
import CategoryCard from '../../component/CategoryCard'
import ProductBringing from '../../component/ProductBringing'
import Footer from '../../component/Footer'

const HeadPhone = () => {
  const [showData,setShowData] = useState(false)

  useEffect(()=>{
    setTimeout(() => {
      setShowData(true)
    }, 500);
  },[])

  return (
    showData ?
      <div>
        <Nav />
        <HeaderBody />
        <div className='pl_5 pr_5'>
          <ProductCard category_value='HEADPHONES'/>
          <CategoryCard />
          <ProductBringing />
        </div>
        <Footer />
      </div>
    :
      <Spinner />
  )
}

export default HeadPhone
