import React from 'react'
import {motion} from 'framer-motion'
import {inBoxArray} from '../data/List'

function InTheBox() {
    return(
        inBoxArray.map(item=>(
            <p className='gap_1 w_100 opacity_75' key={item.id}>
                <span className='text_orange'>{item.x}x</span>
                <span>{item.desc}</span>
            </p>
        ))
    )
}

const ProductFeatures = () => {
  return (
    <section id={'productFeatures'} className='boxRow'>
      <motion.div 
        className='pfLeft left boxColumn pr_5 gap_1'
        initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        viewport={{ once: true }}
        transition={{duration:1,}}
      >
        <h1 className='w_100'>FEATURES</h1>
        <p className='w_100 opacity_75'>
            <span>These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.</span>
            <br/>
            <span>These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.</span>
        </p>
      </motion.div>

      <motion.div 
        className='pfRight boxColumn gap_1 selfTop'        
        initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        viewport={{ once: true }}
        transition={{duration:1,}}
      >
        <h1 className='w_100'>IN THE BOX</h1>
        <InTheBox />
      </motion.div>
    </section>
  )
}

export default ProductFeatures
