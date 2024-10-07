import React from 'react'
import './Style/ContactUs.css'
import face_dark from '../assets/frontend/face_dark.png'
import x_dark from '../assets/frontend/x_dark.png'
import you_dark from '../assets/frontend/you.png'
import insta_dark from '../assets/frontend/insta_dark.png'
import contact_img from '../assets/frontend/contact_us.jpg'
const ContactUs = () => {



  return (
    <div className="contactus_container">
        <h1>Contact Us</h1>
        <div className="contactus_form">
          <div className="contactus_ourContact">
            <div className='ourContact'>
              <h3>Our Contact</h3>
              <p>Street: 16A Avalon St, Heimal Captital</p>
              <p>Phone: +809809809</p>
              <p>Email: CoffeeLY@gmail.com</p>
            </div>
            <div className="contactImg">
              <img src={contact_img} alt="" />
            </div>
          </div>
          <div className='contactus_email'>
            <h3>If you want to get more news. Give us your email contact</h3>
            <div className='contactus_inputEmail'>
              <input type="text" name="" id="" placeholder='Your Email' />
              <button>Send</button>
            </div>
          </div>
          <div className="contactus_social">
            <h3>You can contact us through our social</h3>
            <div className="social_img">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={face_dark} alt="" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src={x_dark} alt="" />
              </a>
               <a href="https://x.com/?lang=vi" target="_blank" rel="noopener noreferrer">
                <img src={you_dark} alt="" />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <img src={insta_dark} alt="" />
              </a>
            </div>
          </div> 
        </div>
    </div>
  )
}

export default ContactUs