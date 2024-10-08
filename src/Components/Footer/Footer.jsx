import React from 'react'
import './Footer.css'
import facebook_icon from '../../assets/frontend/Facebook.png'
import insta_icon from '../../assets/frontend/Insta.png'
import twitter_icon from '../../assets/frontend/Twitter.png'
import youtube_icon from '../../assets/frontend/Youtube.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_info">
        <div className="footer_contac">
          <h3>Get To Know Us</h3>
          <p><Link style={{textDecoration: 'none',color: 'inherit'}} to='/aboutus'>About Us</Link></p>
          <p><Link style={{textDecoration: 'none',color: 'inherit'}} to='/contactus'>Contact Us</Link></p>
        </div>
        <div className="footer_help">
          <h3>Let Us Help  You</h3>
          <p><Link style={{textDecoration: 'none',color: 'inherit'}} to='/selling'>Selling Item </Link></p>
          <p><Link style={{textDecoration: 'none',color: 'inherit'}} to='/helpcenter'>Help Center </Link></p>
        </div>
        <div className="footer_contactInfo">
          <h3><Link style={{textDecoration: 'none',color: 'inherit'}} to='/contactus'>Our Contact</Link></h3>
          <p>Street: 16A Avalon St</p>
          <p>Phone: +809890890</p>
          <p>Email: coffeeLY@gmail.com</p>
        </div>
      </div>
      <div className="footer_social">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebook_icon} alt="" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src={insta_icon} alt="" />
        </a>
        <a href="https://x.com/?lang=vi" target="_blank" rel="noopener noreferrer">
          <img src={twitter_icon} alt="" />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <img src={youtube_icon} alt="" />
        </a>
      </div>
    </div>
  )
}

export default Footer