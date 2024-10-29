import React from 'react'
import './Footer.css'
import facebook_icon from '../../assets/frontend/Facebook.png'
import insta_icon from '../../assets/frontend/Insta.png'
import twitter_icon from '../../assets/frontend/Twitter.png'
import youtube_icon from '../../assets/frontend/Youtube.png'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
const Footer = () => {
  return (
    <Box className='footer'>
      <Box className="footer_info">
        <Box className="footer_contac">
          <Typography
            variant='h4'
            sx={{
              mt: 5,
              fontWeight: '600'
            }}
          >Get To Know Us</Typography>
          <p><Link style={{textDecoration: 'none',color: 'inherit'}} to='/aboutus'>About Us</Link></p>
          <p><Link style={{textDecoration: 'none',color: 'inherit'}} to='/contactus'>Contact Us</Link></p>
        </Box>
        <Box className="footer_help">
          <Typography
            variant='h4'
            sx={{
              mt: 5,
              fontWeight: '600'
            }}
          >Let Us Help  You</Typography>
          <p><Link style={{textDecoration: 'none',color: 'inherit'}} to='/selling'>Selling Item </Link></p>
          <p><Link style={{textDecoration: 'none',color: 'inherit'}} to='/helpcenter'>Help Center </Link></p>
        </Box>
        <Box className="footer_contactInfo">
          <Typography
            variant='h4'
            sx={{
              mt: 5,
              fontWeight: '600'
            }}
          >Our Contact</Typography>
          <p>Location: 16A Avalon St</p>
          <p>Phone: +809890890</p>
          <p>Email: coffeeLY@gmail.com</p>
        </Box>
      </Box>
      <Box className="footer_social">
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
      </Box>
    </Box>
  )
}

export default Footer