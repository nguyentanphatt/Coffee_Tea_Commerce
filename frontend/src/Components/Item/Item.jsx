import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
const Item = (props) => {
  return (
    <Card sx={{
      width: {
        lg: 277,
        md: 277,
        sm: 200,
        xs: 120
      },
      height: {
        lg: 430,
        md: 430,
        sm: 300,
        xs: 220
      },
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
            width: {
              lg: '100%',
              md: '100%',
              sm: '100%',
              xs: '100%'
            },
            height: {
              lg: 300,
              md: 300,
              sm: 200,
              xs: 120
            },
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
            bottom: {
              lg: 95,
              md: 95,
              sm: 80,
              xs: 60
            },
            fontSize: {
              lg: '1.25rem',
              md: '1.25rem',
              sm: '0.9rem',
              xs: '0.8rem'
            }
          }}
        >
          {props.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ 
          mb: {
            lg: 3,
            md: 3,
            sm: 1,
            xs: 0
          },
          mt: {
            lg: 0,
            md: 0,
            sm: 0,
            xs: 3
          },
          fontSize: {
            lg: '14px',
            md: '14px',
            sm: '12px',
            xs: '10px'
          } 
        }}>
          {props.small_description}
        </Typography>
        <Typography variant="body1" 
          sx={{
            fontWeight: 600,
            fontSize: {
              lg: '16px',
              md: '16px',
              sm: '14px',
              xs: '12px'
            },
            mt:{
              lg: 0,
              md: 0,
              sm: 0,
              xs: 0
            }
          }}
        >
          ${props.price}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Item