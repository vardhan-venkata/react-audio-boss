import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'

const nav_list = [
  {id:1, name:"HOME", navigate:"/"},
  {id:2, name:"HEADPHONES", navigate:"/HeadPhones"},
  {id:3, name:"SPEAKERS", navigate:"/Speakers"},
  {id:4, name:"EARPHONES", navigate:"/EarPhones"},
]

const NavLinks = ({animation}) => {
  return(
    nav_list.map((item,key)=>(
      animation ?
        <motion.li 
          key={item.id}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{delay:key / 5}}
        >
          <Link animate={{scale:1.2}} to={item.navigate} state={{ pageName: item.name }} preventScrollReset={false} className='nav_a'>
            {item.name}
          </Link>
        </motion.li>
      :
        <motion.li key={item.id}>
          <Link animate={{scale:1.2}} to={item.navigate} state={{ pageName: item.name }} preventScrollReset={false} className='nav_a'>
            {item.name}
          </Link>
        </motion.li>
    ))
  )
}

export default NavLinks