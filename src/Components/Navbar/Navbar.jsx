import React, { useState } from 'react'
import './Navbar.css'
import CategoryMenu from '../CategoryMenu/CategoryMenu'
import { Link } from 'react-router-dom'
const Navbar = () => {

  const [menu, setMenu] = useState(false)
  
  const handleShowMenu = () =>{
    setMenu(!menu)
  }
  const handleCloseMenu = () =>{
    setMenu(false)
  }
  return (
    <div className='navbar'>
      <ul className="nav_menu">
        <li><Link style={{textDecoration: 'none',color: 'inherit'}} to='/'>Home</Link></li>
        <li onClick={handleShowMenu}>Category</li>
        {menu && <CategoryMenu onClose={handleCloseMenu}/>}
        <li>News</li>
        <li>About Us</li>
      </ul>
    </div>
  )
}

export default Navbar