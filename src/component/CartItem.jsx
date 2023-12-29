import React,{useState} from 'react'
import { useCart } from '../context/CartCotext'
import { motion, AnimatePresence } from 'framer-motion'

function CartList() {
    const {cartItems, totalPrice, onRemove, toggleCartItemQuanitity} = useCart();
    const [delAnimVal,setDelAnimVal] = useState()

    const handlerDecBtn = (id) => {
        toggleCartItemQuanitity(id, "dec");
    }

    const handlerIncBtn = (id) => {
        toggleCartItemQuanitity(id, "inc");
    }

    const handlerDeleteBox = (item ,key) => {
        setDelAnimVal(key)
        setTimeout(() => {
            onRemove(item)  
        }, 300);
    }

    const animateVariant = {
        initial: {
            opacity:0, x:-50
        },
        start: {
            opacity:1, x:0
        },
        end: {
            opacity:0, x:-100,
            transition:{
                delay:0,
                duration:.2,
                x:{duration:.4}
            }
        }
    }

    return(
        cartItems.length > 0?
            <AnimatePresence>
                {
                    cartItems.map((item,key)=>(
                        delAnimVal !== item.id && 
                        <motion.div 
                            className='CICart boxRow w_100 gap_3' 
                            key={item.id}
                            initial='initial'
                            animate='start'
                            exit='end' 
                            variants={animateVariant}
                            transition={{
                                duration:.6, 
                                delay:key/3 
                            }}
                        >
                            <img src={item.img} alt={item.name} className='CICImg' />
                            <div className='boxColumn gap_1'>
                                {
                                    item.isNew && <p className='text_orange_overLine w_100'>NEW PRODUCT</p>
                                }
                                <h3 className='w_100'>{item.name}</h3>
                                <p className='opacity_50'>{item.desc}</p>
                                <div className='boxRow gap_2 left w_100 fleWrap'>
                                    <div className='boxRow bgGray'>
                                        <button className='p_1' onClick={()=>handlerDecBtn(item.pid)}>-</button>
                                        <button className='p_1'>{item.count}</button>
                                        <button className='p_1' onClick={()=>handlerIncBtn(item.pid)}>+</button>
                                    </div>
                                    <h4 className=''>${item.price * item.count}</h4>
                                    <button className='btn_red center' onClick={() => handlerDeleteBox(item, item.id)}>x</button>
                                </div>
                            </div>
                        </motion.div>
                        
                    ))
                }
                <h2 className='center pt_2 pb_2 w_100'>
                    total price: ${totalPrice}
                </h2>
            </AnimatePresence>
        :
            <div className='center p_5'>
                <h1 className='text_h1 w_100'>Cart Empty</h1>
            </div>
    )
} 

const CartItem = () => {
  return (
    <section id="cartItem" >
      <CartList />
    </section>
  )
}

export default CartItem
