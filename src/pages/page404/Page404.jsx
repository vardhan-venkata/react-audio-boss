import React from 'react'
import { Link } from 'react-router-dom'

import './page404.css'
import P404 from '../../assets/404/404.svg'
import rocket from '../../assets/404/rocket.svg'
import earth from '../../assets/404/earth.svg'
import moon from '../../assets/404/moon.svg'
import astronaut from '../../assets/404/astronaut.svg'

const Page404 = () => {
  return (
    <div className="bg-purple">
            <div className="central-body">
                <img className="image-404" src={P404} alt='404' width="300px"/>
                <Link to={'/'} className="btn-go-home" >GO BACK HOME</Link>
            </div>
            <div className="objects">
                <img className="object_rocket" src={rocket} alt='rocket' width="40px"/>
                <div className="earth-moon">
                    <img className="object_earth" src={earth} alt='earth' width="100px"/>
                    <img className="object_moon" src={moon} alt='moon' width="80px"/>
                </div>
                <div className="box_astronaut">
                    <img className="object_astronaut" src={astronaut} alt='astronaut' width="140px"/>
                </div>
            </div>
            <div className="glowing_stars">
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>

            </div>
    </div>
  )
}

export default Page404
