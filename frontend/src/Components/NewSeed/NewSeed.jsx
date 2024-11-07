import React from 'react'
import './NewSeed.css'
import seed_icon from '../../assets/frontend/seed_icon.png'
//import new_bean from '../../assets/frontend/new_bean'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'
import { useState, useContext, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
const NewSeed = () => {
  const {all_product} = useContext(ShopContext)
  const [filterProduct, setFilterProduct] = useState([])

  useEffect(()=>{
    const new_bean = all_product.filter(product => product.category==='bean and seed').slice(0,6)
    setFilterProduct(new_bean)
  },[all_product])
  return (
    <Box className='bean_special'>
        <Box className="bean_banner">
            <Typography
              variant='h3'
              sx={{
                color: '#fff',
                fontWeight: '600',
                textTransform: 'uppercase',
                ml: 3,
                textShadow: '3px 3px 5px rgba(0, 0, 0, 0.6)',
                fontSize: {
                  lg: '3rem',
                  md: '2rem',
                  sm: '1.5rem',
                  xs: '1rem'
                }
              }}
            >NEW BEAN FOR YOU</Typography>
            <img src={seed_icon} alt="" />
        </Box>
        <Box className="special_item">
            {filterProduct.map((item,index)=>{
                return <Item key={index} id={item.id} name={item.name} image={item.image} price={item.price} small_description={item.small_description}/>
            })}
        </Box>
    </Box>
  )
}

export default NewSeed