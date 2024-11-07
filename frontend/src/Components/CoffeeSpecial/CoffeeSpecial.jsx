import React from 'react'
import './CoffeeSpecial.css'
import coffee_icon from '../../assets/frontend/coffee_icon.png'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'
import { Box, Typography, Grid2 } from '@mui/material'
import { useState, useContext, useEffect } from 'react'
const CoffeeSpecial = () => {

  const {all_product} = useContext(ShopContext)
  const [filterProduct, setFilterProduct] = useState([])

  useEffect(()=>{
    const special_coffee = all_product.filter(product => product.category==='coffee').slice(0,6)
    setFilterProduct(special_coffee)
  },[all_product])
  return (
    <Box className='coffee_special'>
        <Box className="coffee_banner">
            <Typography
              variant='h3'
              sx={{
                color: '#fff',
                fontWeight: '600',
                textTransform: 'uppercase',
                ml: 3,
                textShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
                fontSize: {
                  lg: '3rem',
                  md: '2rem',
                  sm: '1.5rem',
                  xs: '1rem'
                }
              }}
            >SPECIAL IN LIGHT FAVOR</Typography>
            <img src={coffee_icon} alt="" />
        </Box>
        <Box className="special_item">
            {filterProduct.map((item,index)=>{
                return <Item key={index} id={item.id} name={item.name} image={item.image} price={item.price} small_description={item.small_description}/>
            })}
        </Box>
    </Box>
  )
}

export default CoffeeSpecial