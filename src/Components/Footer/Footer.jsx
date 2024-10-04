import React from 'react'
import './Footer.css'
import facebook_icon from '../../assets/frontend/Facebook.png'
import insta_icon from '../../assets/frontend/Insta.png'
import twitter_icon from '../../assets/frontend/Twitter.png'
import youtube_icon from '../../assets/frontend/Youtube.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_info">
        <div className="footer_contac">
          <h3>Get To Know Us</h3>
          <p>About Us</p>
          <p>Contact</p>
        </div>
        <div className="footer_help">
          <h3>Let Us Help  You</h3>
          <p>Sell Item</p>
          <p>Help Center</p>
        </div>
        <div className="footer_contactInfo">
          <h3>Our Contact</h3>
          <p>Street: 16A Avalon St</p>
          <p>Phone: +809890890</p>
          <p>Email: coffeeLY@gmail.com</p>
        </div>
      </div>
      <div className="footer_social">
        <img src={facebook_icon} alt="" />
        <img src={insta_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
    </div>
  )
}

export default Footer