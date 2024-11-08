import React from 'react'
import './NewsDetail.css'
import { Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material'
const NewsDetail = (props) => {
  return (
    <Card
      sx={{
        maxWidth: {
          lg: '600px',
          md: '500px',
          sm: '400px',
          xs: '300px'
        },
      }}
    >
      <CardMedia 
        component="img"
        image={props.image}
        sx={{
          height: '150'
        }} 
      />
      <CardContent>
        <Typography
          variant='h4'
          sx={{
            color: '#3D3434',
            fontSize:{
              lg: '34px',
              md: '34px',
              sm: '26px',
              xs: '20px'
            }
          }}
        >
        {props.title}
        </Typography>
        <Typography
          variant='body2'
          mt={2}              
          sx={{
            fontSize:{
              lg:'14px',
              md: '14px',
              sm: '12px',
              xs: '10px'
            }
          }}
        >
        {props.small_detail}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='medium'
          sx={{
            width: {
              lg: '120px',
              md: '120px',
              sm: '100px',
              xs: '80px'
            },
            fontSize:{
              lg: '16px',
              md: '16px',
              sm: '12px',
              xs: '10px'
            },
            '&:hover':{
              backgroundColor: '#3D3434',
              color: '#fff',
            }
          }}
        >View more</Button>
        <Button
          size='medium'
          sx={{
            width: {
              lg: '120px',
              md: '120px',
              sm: '100px',
              xs: '80px'
            },
            fontSize:{
              lg: '16px',
              md: '16px',
              sm: '12px',
              xs: '10px'
            },
            '&:hover':{
              backgroundColor: '#3D3434',
              color: '#fff',
            }
          }}
        >Share</Button>
      </CardActions>
        {/* <img src={props.image} alt="" />
        <h1>{props.title}</h1>
        <p>{props.small_detail}</p>
        <button>View more</button> */}
    </Card>
  )
}

export default NewsDetail