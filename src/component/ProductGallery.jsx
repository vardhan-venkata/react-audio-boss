import React from 'react'
import {motion} from 'framer-motion'
import EARPHONES1 from '../assets/cart/EARPHONES.jpg'
import HEADPHONES3 from '../assets/cart/image-xx99-mark-two-headphones.jpg'
import SPEAKER2 from '../assets/cart/SPEAKER2.jpg'

const list = [
  {id:1, img:EARPHONES1},
  {id:2, img:HEADPHONES3},
  {id:3, img:SPEAKER2},
]
const ProductGallery = () => {
  return (
    <section id={'productGallery'}>
      {
        list.map((item,key)=>(
          <motion.img 
            key={item.id}
            initial={{opacity:0}} 
            whileInView={{opacity:1}} 
            viewport={{ once: true }} 
            transition= {{delay:key/4}}
            src={item.img} 
            alt={item.img} 
            className={`pgImg pgItem${item.id}`}
          />    
        ))
      }
    </section>
  )
}

export default ProductGallery
