import React from 'react'
import './Style/ContactUs.css'
import face_dark from '../assets/frontend/face_dark.png'
import x_dark from '../assets/frontend/x_dark.png'
import you_dark from '../assets/frontend/you.png'
import insta_dark from '../assets/frontend/insta_dark.png'
import contact_img from '../assets/frontend/contact_us.jpg'
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography, TextField, Button } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
const ContactUs = () => {
  return (
    <Box className="contactus_container">
        <Typography
          variant='h3'
          sx={{
              color: '#3d3434',
              fontWeight: 'bold',
              mt: 5,
              mb: 5
          }}
        >Contact Us</Typography>
        <Box className="contactus_form">
          <Box className="contactus_ourContact">
            <List
              sx={{
                width: '60%',
                ml: 10
              }}
            >
              <Typography
                variant='h5'
                sx={{
                  color: '#3d3434',
                  fontWeight: 'bold',
                  ml: 15
              }}
              >
                Our Contact
              </Typography>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText primary="Location" secondary="16A Avalon St, Heimal Captital"/>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText primary="Phone" secondary="+809809809"/>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Email" secondary="CoffeeLY@gmail.com"/>
              </ListItem>
            </List>
            <Box className="contactImg">
              <img src={contact_img} alt="" />
            </Box>
          </Box>
          <Box sx={{ml: 10, mt: 5}}>
            <Typography
              variant='h5'
              sx={{
                color: '#3d3434',
                fontWeight: 'bold',
                mb: 5
            }}
            >If you want to get more news. Give us your email contact
            </Typography>
            <Box className='contactus_inputEmail'>
              <TextField 
                required 
                variant='outlined'
                label='Your Email'
                sx={{
                  width: '50%',
                  mr: 3,
                  '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#3d3434',
                                borderWidth: '2px',
                            },
                            '&:hover fieldset': {
                                borderColor: '#3d3434',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#3d3434',
                            },
                        },
                }}
                />
              <Button
                variant='contained'
                size='large'
                sx={{
                  backgroundColor: '#3d3434',
                  fontWeight: '600'
                }}
              >
                Send
              </Button>
            </Box>
          </Box>
          <Box sx={{ml: 10}}>
            <Typography
              variant='h5'
              sx={{
                color: '#3d3434',
                fontWeight: 'bold',
                mb: 5,
                mt: 5
              }}
            >You can contact us through our social
            </Typography>
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
          </Box> 
        </Box>
    </Box>
  )
}

export default ContactUs