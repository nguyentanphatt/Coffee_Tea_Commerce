import React from 'react'
import banner_img from '../../assets/frontend/main_banner.webp'
import { Button, Typography, Box } from '@mui/material'
import './Banner.css'
const Banner = () => {
  return (
    <Box className='banner'>
        <Box className='banner-left'>
            <Typography
              variant='h3'
              sx={{
                color: '#fff',
                mb: 2,
                fontWeight: '600',
                fontSize:{
                  lg: '3rem',
                  md: '2.5rem',
                  sm: '1.5rem',
                  xs: '1rem'
                }
              }}
            >BEST COFFEE IN THE WORLD</Typography>
            <Typography
              variant='h6'
              sx={{
                mb: {
                  lg: 2,
                  md: 2,
                  sm: 1,
                  xs: 1
                },
                color: '#fff',
                fontSize:{
                  lg: '1.5rem',
                  md: '1rem',
                  sm: '0.8rem',
                  xs: '0.6rem'
                }
              }}
            >Get now to sale up to 20%</Typography>
            <Button
              variant='contained'
              size='large'
              sx={{
                fontSize: {
                  lg: 16,
                  md: 16,
                  sm: 10,
                  xs: 8

                },
                fontWeight: '600',
                width: {
                  lg: '180px',
                  md: '180px',
                  sm: '120px',
                  xs: '100px'
                },
                backgroundColor: '#342B2B',
                '&:hover':{
                  backgroundColor: 'gray',
                  color: '#342B2B',
                  
                },
                
              }}
            >Get it now!!</Button>
        </Box>
        <Box className="banner-right">
            <img src={banner_img} alt="" />
        </Box>
    </Box>
  )
}

export default Banner