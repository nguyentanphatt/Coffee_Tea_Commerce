import React from 'react'
import './NewsDetail.css'
import { Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material'
const NewsDetail = (props) => {
  return (
    <Card
      sx={{
        maxWidth: '600px'
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
          }}
        >
        {props.title}
        </Typography>
        <Typography
          variant='body2'
          mt={2}

        >
        {props.small_detail}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='medium'
          sx={{
            width: '120px',
            '&:hover':{
              backgroundColor: '#3D3434',
              color: '#fff',
            }
          }}
        >View more</Button>
        <Button
          size='medium'
          sx={{
            width: '120px',
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