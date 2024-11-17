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
                mb: {
                  lg: 2, mg: 2, sm: 1, xs: 0
                },
                fontWeight: '600',
                fontSize:{
                  lg: '3rem',
                  md: '2.3rem',
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
                  xs: 0
                },
                color: '#fff',
                fontSize:{
                  lg: '1.5rem',
                  md: '1rem',
                  sm: '0.8rem',
                  xs: '0.62rem'
                }
              }}
            >Get now to sale up to 20%</Typography>
            <Button
              variant='contained'
              size='large'
              sx={{
                fontSize: {
                  lg: 16,
                  md: 12,
                  sm: 10,
                  xs: 8

                },
                fontWeight: '600',
                width: {
                  lg: '50%',
                  md: '60%',
                  sm: '60%',
                  xs: '80%'
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