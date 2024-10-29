import React from 'react'
import './TeaSpecial.css'
import tea_icon from '../../assets/frontend/tea_icon.png'
//import special_tea from '../../assets/frontend/special_tea'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'
import { useState, useContext, useEffect } from 'react'
import { Box, Typography} from '@mui/material'
const TeaSpecial = () => {
  const {all_product} = useContext(ShopContext)
  const [filterProduct, setFilterProduct] = useState([])

  useEffect(()=>{
    const special_tea = all_product.filter(product => product.category==='tea').slice(0,6)
    setFilterProduct(special_tea)
  },[all_product])
  return (
    <Box className='tea_special'>
        <Box className="tea_banner">
            <Typography
              variant='h3'
              sx={{
                color: '#333333',
                fontWeight: '600',
                textTransform: 'uppercase',
                ml: 3,
                textShadow: '3px 3px 5px rgba(100, 100, 100, 0.6)',
              }}
            >TEA LEAF GOOD FOR HEALTH</Typography>
            <img src={tea_icon} alt="" />
        </Box>
        <Box className="special_item">
            {filterProduct.map((item,index)=>{
                return <Item key={index} id={item.id} name={item.name} image={item.image} price={item.price} small_description={item.small_description}/>
            })}
        </Box>
    </Box>
  )
}

export default TeaSpecial