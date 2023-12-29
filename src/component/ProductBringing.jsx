import React from 'react'
import {motion} from 'framer-motion'
import bestGearImg from '../assets/shared/desktop/image-best-gear.jpg'

const ProductBringing = () => {
  return (
    <section id='productBringing' className='boxRow boxWrap'>
      <motion.div 
        className='pBLeft pr_5 gap_2'
        initial={{x: -100}}
        whileInView={{x: 0}}
        viewport={{ once: true }}
        transition={{duration:1,}}
      >
        <p className='text_h1'>
            BRINGING YOU THE <span className='text_orange'>BEST</span> AUDIO GEAR
        </p>
        <p className='opacity_50'>
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
        </p>
      </motion.div>
      <motion.div 
        className='pBRight'
        initial={{x: 100}}
        whileInView={{x: 0}}
        viewport={{ once: true }}
        transition={{duration:1,}}
      >
        <img className='pBRightImg' src={bestGearImg} alt='bestGearImg'/>
      </motion.div>
    </section>
  )
}

export default ProductBringing
