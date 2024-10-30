import React from 'react'
import { useParams } from 'react-router-dom'
import help_content from '../../assets/frontend/helpDetail'
import './HelpDetail.css'
import { Box, Typography } from '@mui/material'
const HelpDetail = () => {

    const {title} = useParams()
    const content = help_content[title];
  return (
    <Box className="helpcenter_detail_container">
        <Typography
          variant="h3"
          sx={{
            color: "#3d3434",
            fontWeight: "bold",
            mt: 5,
            mb: 5,
            textAlign: "center",
          }}
        >{title.replace("_"," ").toUpperCase()}</Typography>
        {content.map((item, index)=>(
            <Box 
              key={index}
              sx={{
                ml: 10,
                pt: 5
              }}
            >
                <Typography
                  variant='h5'
                  sx={{
                    color: 'red'
                  }}
                >{item.section}</Typography>
                <Typography
                  variant='body1'
                >{item.content}</Typography>
            </Box>
        ))}
    </Box>
  )
}

export default HelpDetail