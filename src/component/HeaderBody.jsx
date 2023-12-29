import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'
import HeaderImg from '../assets/home/tablet/image-header.jpg'

const itemList = {
  name: 'XX99 MARK II HEADPHONES',
  desc: 'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast',
  img: HeaderImg
}

const variants = {
  initial:{
    opacity: 0,
    y: -50
  },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom }
  })
}


function MainPageHeader() {
  return(
    <div className='headerCard boxRow'>
      <div className='headerCard_text left boxColumn'>
        <motion.p custom={.2} animate="visible" initial='initial' variants={variants} className='header_p'>NEW PRODUCT</motion.p>
        <motion.h1 custom={.4} animate="visible" initial='initial' variants={variants} className='header_title'>{itemList.name}</motion.h1>
        <motion.p custom={.6} animate="visible" initial='initial' variants={variants} className='header_body'>{itemList.desc}</motion.p>
        <motion.div custom={.8} animate="visible" initial='initial' variants={variants} className={'selfLeft w_100'}>
          <Link to={'/Product/'+itemList.name} state={{ name:itemList.name, desc:itemList.desc, pid:2 }} className='btn_orange center' >SEE PRODUCT</Link>
        </motion.div>
      </div>
      <div className='headerCard_img center'>
        <motion.img custom={0} animate="visible" initial='initial' variants={variants} src={itemList.img} alt='HeadPhoneImage' />
      </div>
    </div>
  )
}

function ChildPageHeader({header}) {
  return(
    <div className='headerCardChild center'>
      <h1 className='header_title_child'>
        {header}
      </h1>
    </div>
  )
}

const HeaderBody = () => {
  let { state } = useLocation();
  return (
    window.location.hash? 
      state.pageName === 'HOME'?
          <MainPageHeader/>
        :
          <ChildPageHeader header={state.pageName}/>
      :
        <MainPageHeader/>
  )
}

export default HeaderBody
