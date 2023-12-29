
import React,{ useState} from 'react';
import './index.css'
import { useCart } from '../context/CartCotext'
import {Link} from 'react-router-dom'
import NavLinks from './NavLinks'
import { motion, AnimatePresence } from 'framer-motion'

import logo from '../assets/logo/logo.svg'
import drawerLogo from '../assets/drawer.svg'
import cartLogo from '../assets/logo/card.svg'

const Nav = () => {
  const { cartItems, totalCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <AnimatePresence>
      {
        mobileOpen && (
          <motion.div className='navDrawer boxRow'>
            <motion.div 
              key={'Drawer'}
              className='navDrawerLeft boxColumn top gap_1'
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              exit={{ width: -100, opacity:0 }}
            >
              <div className='borderB_2 center p_1'>
                <img src={logo} alt={'Logo'} />
              </div>
              <NavLinks animation={'run'}/>
            </motion.div>
            <motion.div className='navDrawerRight' onClick={handleDrawerToggle}/>
          </motion.div>
        )
      }
    </AnimatePresence>
  );

  return (
    <nav className='boxRow space_between'>
      <div className='nav_logo'>
        <img src={logo} alt={'Logo'} />
      </div>
      <ul className='boxRow gap_3 nav_cardLink'>
        <NavLinks />
      </ul>
      <div className='nav_cardDrawer left p_1' onClick={handleDrawerToggle}>
        <img src={drawerLogo} alt={'Drawer'} />
      </div>
      <Link key={totalCount} to={'/Cart'} state={{ pageName: 'CART' }} className='nav_cardIcon right' style={window.location.hash==='#/Product/:name' ? {animation: 'rotate_Animation .2s linear 2 alternate'}:{animation: 'none'}}>
        <img src={cartLogo} alt={'Cart'} />
        {
          cartItems.length > 0 &&
            <div className='center'>
              <p className='text_small'>{cartItems.length}</p>
            </div>
        }
      </Link>
      
      {/* ---- Show Drawer */}
      {
        drawer
      }
    </nav>
  )
}

export default Nav
