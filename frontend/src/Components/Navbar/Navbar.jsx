import React, { useState } from 'react'
import './Navbar.css'
import CategoryMenu from '../CategoryMenu/CategoryMenu'
import { Link } from 'react-router-dom'
import {Box} from '@mui/material'
const Navbar = () => {

  const [menu, setMenu] = useState(false)
  
  const handleShowMenu = () =>{
    setMenu(!menu)
  }
  const handleCloseMenu = () =>{
    setMenu(false)
  }
  return (
    <Box className='navbar'>
      <ul className="nav_menu">
        <li><Link style={{textDecoration: 'none',color: 'inherit'}} to='/'>HOME</Link></li>
        <li onClick={handleShowMenu}>CATEGORY</li>
        {menu && <CategoryMenu onClose={handleCloseMenu}/>}
        <li><Link style={{textDecoration: 'none',color: 'inherit'}} to='/news'>NEWS</Link></li>
        <li><Link style={{textDecoration: 'none',color: 'inherit'}} to='/aboutus'>ABOUT US</Link></li>
      </ul> 
    </Box>
  )
}

export default Navbar