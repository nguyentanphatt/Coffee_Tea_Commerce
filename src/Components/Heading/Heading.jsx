import React from 'react'
import logo from '../../assets/frontend/logo.png'
import search_img from '../../assets/frontend/search.png'
import cart from '../../assets/frontend/cart.png'
import { Link } from 'react-router-dom'
import './Heading.css'
const Heading = () => {
  return (
    <div className='heading'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className='search'>
        <input type="text" name="" id="" placeholder='Search Item' />
        <img src={search_img} alt="" />
      </div>
      <div className='item_cart'>
        <Link to='/login'><button className='btn'>Login with us</button></Link>
        <img src={cart} alt="" />
        <div className="cart_count">0</div>
      </div>
    </div>
  )
}

export default Heading