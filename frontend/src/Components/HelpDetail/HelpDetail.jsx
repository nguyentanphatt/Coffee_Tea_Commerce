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
            mt: {
              lg: 5,
              md: 4,
              sm: 3,
              xs: 2,
            },
            mb: {
              lg: 5,
              md: 5,
              sm: 3,
              xs: 1,
            },
            fontSize: {
              lg: "48px",
              md: "40px",
              sm: "35px",
              xs: "20px",
            },
            textAlign: "center",
          }}
        >{title.replace("_"," ").toUpperCase()}</Typography>
        {content.map((item, index)=>(
            <Box 
              key={index}
              sx={{
                ml: {
                  lg: 10,
                  md: 10,
                  sm: 8,
                  xs: 5
                },
                pt: {
                  lg: 5,
                  md: 4
                }
              }}
            >
                <Typography
                  variant='h5'
                  sx={{
                    color: 'red',
                    fontSize: {
                      lg: "24px",
                      md: "24px",
                      sm: "20px",
                      xs: "16px",
                    },
                  }}
                >{item.section}</Typography>
                <Typography
                  variant='body1'
                  sx={{
                    fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "12px" },
                  }}
                >{item.content}</Typography>
            </Box>
        ))}
    </Box>
  )
}

export default HelpDetail