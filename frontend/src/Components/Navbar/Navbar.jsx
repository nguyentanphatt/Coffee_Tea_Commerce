/* import React, { useState } from 'react'
import './Navbar.css'
import CategoryMenu from '../CategoryMenu/CategoryMenu'
import { Link } from 'react-router-dom'
import { Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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
  );
}

export default Navbar */
import React, { useState } from 'react';
import './Navbar.css';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import { Link } from 'react-router-dom';
import { Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleShowMenu = () => {
    setMenu(!menu);
  };

  const handleCloseMenu = () => {
    setMenu(false);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box className="navbar-container">
      {/* Desktop Navbar */}
      <Box className="navbar" sx={{ display: { xs: 'none', md: 'flex' } }}>
        <ul className="nav_menu">
          <li><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">HOME</Link></li>
          <li onClick={handleShowMenu}>CATEGORY</li>
          {menu && <CategoryMenu onClose={handleCloseMenu} />}
          <li><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/news">NEWS</Link></li>
          <li><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/aboutus">ABOUT US</Link></li>
        </ul>
      </Box>

      {/* Mobile Menu Icon */}
      <IconButton 
        sx={{ display: { xs: 'block', md: 'none' }, color: '#fff' }} 
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer for Mobile Menu */}
      <Drawer 
        anchor='left' 
        open={drawerOpen} 
        onClose={handleDrawerToggle}
        PaperProps={{ style: { width: '250px' } }}
      >
        <List>
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>HOME</Link></ListItemText>
          </ListItem>
          <ListItem button onClick={() => { handleShowMenu(); handleDrawerToggle(); }}>
            <ListItemText>CATEGORY</ListItemText>
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText><Link to="/news" style={{ textDecoration: 'none', color: 'inherit' }}>NEWS</Link></ListItemText>
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText><Link to="/aboutus" style={{ textDecoration: 'none', color: 'inherit' }}>ABOUT US</Link></ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

export default Navbar;