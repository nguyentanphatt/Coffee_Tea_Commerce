import React from 'react'
import './AboutContactDetail.css'
import { Box, Typography } from '@mui/material'
const AboutContactDetail = ({image, title, content, isReversed}) => {
    return (
    <Box  className={`aboutContactcontainer ${isReversed ? 'reversed' : ''}`}>
        <img src={image} alt="" />
        <Box className="aboutContact_text">
            <Typography
                variant='h4'
                sx={{
                    color: '#3d3434',
                    fontWeight: '600',
                    textAlign: 'center',
                    fontSize:{
                        lg: '34px',
                        md:'30px',
                        sm: '24px',
                        xs: '18px'
                    }
                }}
            >{title}</Typography>
            <Typography
                variant='body1'
                sx={{
                    color: '#666',
                    mt: {
                        lg: 4,
                        md: 4,
                        sm: 2,
                        xs: 0
                    },
                    fontSize: {
                        lg: '16px',
                        md: '14px',
                        sm: '12px',
                        xs: '9px'
                    }
                }}
            >{content}</Typography>
        </Box>
    </Box>
  )
}

export default AboutContactDetail
