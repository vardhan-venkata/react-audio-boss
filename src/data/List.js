import img_headphone from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import img_speaker from '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import img_earphone from '../assets/shared/desktop/image-category-thumbnail-earphones.png'

import img_speaker_album from '../assets/home/desktop/image-speaker-zx9.png'
import img_pattern_circles_lg from '../assets/home/desktop/pattern-circles-lg.svg'
import img_speaker2 from '../assets/home/desktop/image-speaker-zx7.png'
import img_earPhone from '../assets/home/desktop/image-earphones-yx1.jpg'

import HEADPHONES1 from '../assets/cart/image-xx59-headphones.jpg'
import HEADPHONES2 from '../assets/cart/image-xx99-mark-one-headphones.jpg'
import HEADPHONES3 from '../assets/cart/image-xx99-mark-two-headphones.jpg'

import SPEAKER1 from '../assets/cart/SPEAKER1.jpg'
import SPEAKER2 from '../assets/cart/SPEAKER2.jpg'

import EARPHONES1 from '../assets/cart/EARPHONES.jpg'



export const catItem = [
    {id:1, name:'HEADPHONE', img:img_headphone, navigate:'/HeadPhones'},
    {id:2, name:'SPEAKERS', img:img_speaker, navigate:'/Speakers'},
    {id:3, name:'EARPHONES', img:img_earphone, navigate:'/EarPhones'},
]

export const albumItem = [
    {id:4, name:'ZX9 SPEAKER', img:img_speaker_album, navigate:'/Product', svg:img_pattern_circles_lg, desc:'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.'},
    {id:5, name:'ZX7 SPEAKER', img:img_speaker2, navigate:'/Product', svg:'', desc:''},
    {id:6, name:'YX1 EARPHONES', img:img_earPhone, navigate:'/Product', svg:'', desc:''},
]

export const product_headphone = [
    {id:7, delay:.1, name:'XX59 HEADPHONES', img:HEADPHONES1,isNew:false, desc:'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.'},
    {id:8, delay:.3, name:'XX99 MARK I HEADPHONES', img:HEADPHONES2,isNew:false, desc:'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.'},
    {id:9, delay:.5, name:'XX99 MARK II HEADPHONES', img:HEADPHONES3, isNew:true, desc:'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'},
]

export const product_speaker = [
    {id:10, name:'ZX7 SPEAKER', img:SPEAKER1, isNew:false, desc:'Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.'},
    {id:11, name:'ZX9 SPEAKER', img:SPEAKER2, isNew:true, desc:'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.'},
]

export const product_earphone = [
    {id:12, name:'YX1 WIRELESS EARPHONES', img:EARPHONES1, isNew:true, desc:'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.'},
]

export const inBoxArray = [
    {id:12, x:'1', desc:'Headphone unit'},
    {id:13, x:'2', desc:'Replacement earcups'},
    {id:14, x:'1', desc:'User manual'},
    {id:15, x:'1', desc:'3.5mm 5m audio cable'},
]