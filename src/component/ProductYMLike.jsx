import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import {product_headphone} from '../data/List'

function PCardList() {
    return(
      product_headphone.map((item)=>(
        <motion.div 
          className='pYMLCard boxColumn gap_1' 
          key={item.id}
          initial={{scale:.5, opacity:0}} 
          whileInView={{scale:1,  opacity:1}} 
          viewport={{ once: true }} 
          transition= {{delay: item.delay}}
        >
            <img src={item.img} alt={item.name} />
            <h2 className='w_100'>{item.name}</h2>
            <Link to={'/Product/'+item.name} state={{ name:item.name, desc:item.desc, img:item.img, pid:item.id }} className='btn_orange' >ADD TO CART</Link>
        </motion.div>
      ))
    )
}

const ProductYMLike = () => {
  return (
    <section id={'ProductYMLike'} className='gap_2 center boxColumn'>
      <motion.h1 
        initial={{opacity:0}} 
        whileInView={{opacity:1}}
        viewport={{ once: true }} 
        transition= {{duration:1}}
      >
        YOU MAY ALSO LIKE
      </motion.h1>
      <div className='boxRow w_100 gap_1'>
        <PCardList />
      </div>
    </section>
  )
}

export default ProductYMLike
