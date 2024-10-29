import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
const Item = (props) => {
  return (
    <Card sx={{
      width: 277,
      height: 430,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      backgroundColor: 'white',
      transition: 'transform 0.3s',
      '&:hover': {
        boxShadow: 3,
      },
    }}>
      <Link to={`/product/${props.id}`}>
        <CardMedia
          component="img"
          image={props.image}
          sx={{
            width: 277,
            height: 300,
            objectFit: 'contain',
            transition: 'transform 0.6s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
      </Link>
      <CardContent sx={{ padding: 2 }}>
        <Typography variant="h6" component="p" 
          sx={{
            fontWeight: 500,
            position: 'absolute',
            bottom: 95
          }}
        >
          {props.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
          {props.small_description}
        </Typography>
        <Typography variant="body1" 
          sx={{
            fontWeight: 600,
          }}
        >
          ${props.price}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Item