import React from 'react'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'
import {albumItem} from '../data/List'

const animationVariant = {
  initial:{
    scale:.8,
    opacity:0
  },
  start:{
    scale:1,
    opacity:1
  },
  transition:{
    duration:.6, 
    delay:1.4
  },
}
const HomeAlbum = () => {
  return (
    <section id='homeAlbum'>
      <motion.div  
        className='albumBoxFullOrange boxRow center'
        initial={'initial'} 
        whileInView={'start'} 
        variants={animationVariant}
        viewport={{ once: true }}
      >
        <div className='albumBoxFullOrangeLeft left'>
            <img src={albumItem[0].img} alt={albumItem[0].name} className='albumBoxFullOrangeLeftImg'/>
            <img src={albumItem[0].svg} alt={albumItem[0].name} className='albumBoxFullOrangeLeftSvg'/>
        </div>
        <div className='albumBoxFullOrangeRight boxColumn gap_2 left'>
            <h1 className='header_title'>{albumItem[0].name}</h1>
            <p className='header_body'>{albumItem[0].desc}</p>
            <Link to={'/Product/'+albumItem[0].name} state={{ name:albumItem[0].name, desc:albumItem[0].desc, img:albumItem[0].img, pid:albumItem[0] }} className='btn_black selfLeft' >SEE PRODUCT</Link>
        </div>
      </motion.div>

      <motion.div 
        className='albumBoxFullGray boxRow'
        initial={'initial'} 
        whileInView={'start'} 
        variants={animationVariant}
        viewport={{ once: true }}
      >
        <div className='albumBoxFullGrayLeft gap_2'>
            <h1 className='text_title'>{albumItem[1].name}</h1>
            <Link to={'/Product/'+albumItem[1].name} state={{ name:albumItem[1].name, desc:albumItem[1].desc, img:albumItem[1].img, pid:albumItem[1] }}  className='btn_transparent selfLeft' >SEE PRODUCT</Link>
        </div>
        <div className='albumBoxFullGeayRightImg boxColumn gap_2'>
            <img src={albumItem[1].img} alt={albumItem[1].name} className='albumBoxFullOrangeRightImg'/>
        </div>
      </motion.div>

      <div className='albumBoxHulf boxRow'>
        <motion.div 
          className='albumBoxHulfLeft albumBoxHulfWidth'
          initial={'initial'} 
          whileInView={'start'} 
          variants={animationVariant}
          viewport={{ once: true }}
        >
            <img src={albumItem[2].img} alt={albumItem[2].name} className='full'/>
        </motion.div>
        <motion.div 
          className='albumBoxHulfRight albumBoxHulfWidth boxColumn gap_2'
          initial={'initial'} 
          whileInView={'start'} 
          variants={animationVariant}
          viewport={{ once: true }}
        >
            <h1 className='text_title'>{albumItem[2].name}</h1>
            <Link to={'/Product/'+albumItem[2].name} state={{ name:albumItem[2].name, desc:albumItem[2].desc, img:albumItem[2].img, pid:albumItem[2] }} className='btn_transparent selfLeft' >SEE PRODUCT</Link>
        </motion.div>
    </div>
    </section>
  )
}

export default HomeAlbum
