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
                }}
            >{title}</Typography>
            <Typography
                variant='body1'
                sx={{
                    color: '#666',
                    mt: 4,
                    textAlign: 'center'
                }}
            >{content}</Typography>
        </Box>
    </Box>
  )
}

export default AboutContactDetail
