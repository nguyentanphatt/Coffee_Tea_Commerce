import React from 'react'
import logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div className='flex items-center justify-between border-4 h-32'>
        <div className='flex items-center'>
            <img src={logo} alt="" className='h-32 w-32 ml-10'/>
        </div>
        <div className='flex items-center'>
            <h1 className='font-bold text-3xl '>Welcome to Valimar Shop</h1>
        </div>
       <div className='flex items-center'>
            <button className='bg-gray-700 text-white font-bold h-10 w-28 mr-10 text-lg
            rounded-md cursor-pointer'
            >Login</button>
       </div>
    </div>
  )
}

export default Header