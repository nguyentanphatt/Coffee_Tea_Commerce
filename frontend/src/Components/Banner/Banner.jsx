import React from 'react'
import banner_img from '../../assets/frontend/main_banner.webp'
import { Button, Typography } from '@mui/material'
import './Banner.css'
const Banner = () => {
  return (
    <div className='banner'>
        <div className='banner-left'>
            <Typography
              variant='h3'
              sx={{
                color: '#fff',
                mb: 2,
                fontWeight: '600'
              }}
            >BEST COFFEE IN THE WORLD</Typography>
            <Typography
              variant='h6'
              sx={{
                mb: 2,
                color: '#fff'
              }}
            >Get now to sale up to 20%</Typography>
            <Button
              variant='contained'
              size='large'
              sx={{
                fontSize: 16,
                fontWeight: '600',
                width: '180px',
                backgroundColor: '#342B2B',
                '&:hover':{
                  backgroundColor: 'gray',
                  color: '#342B2B'
                }
              }}
            >Get it now!!</Button>
        </div>
        <div className="banner-right">
            <img src={banner_img} alt="" />
        </div>
    </div>
  )
}

export default Banner