import React from 'react'
import logo from '../../assets/logo.png'
import notification from '../../assets/notification.png'
import email_icon from '../../assets/mail_icon.png'
const Header = () => {

  return (
    <div className='flex items-center justify-between border-4 h-32'>
        <div className='flex items-center'>
            <img src={logo} alt="" className='h-32 w-32 ml-10'/>
        </div>
        <div className='flex items-center'>
            <h1 className='font-bold text-3xl '>Welcome to Valimar Shop</h1>
        </div>
        <div className='flex items-center mr-10'>
          <img src={email_icon} alt="" className='h-10 w-10 ml-10'/>
          <img src={notification} alt="" className='h-10 w-10 ml-5'/>
        </div>
    </div>
  )
}

export default Header