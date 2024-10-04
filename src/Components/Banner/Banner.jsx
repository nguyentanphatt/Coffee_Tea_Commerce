import React from 'react'
import banner_img from '../../assets/frontend/main_banner.webp'
import './Banner.css'
const Banner = () => {
  return (
    <div className='banner'>
        <div className='banner-left'>
            <h1>BEST COFFEE IN THE WORLD</h1>
            <p>Get now to sale up to 20%</p>
            <button>Get it now!!</button>
        </div>
        <div className="banner-right">
            <img src={banner_img} alt="" />
        </div>
    </div>
  )
}

export default Banner