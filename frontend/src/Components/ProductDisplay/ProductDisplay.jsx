import React, { useContext, useState } from 'react'
import black_star from '../../assets/frontend/black_star.png'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';
import { Box, Typography, Button, Rating} from '@mui/material'
const ProductDisplay = (props) => {

    const {product} = props; 
    const {addToCart} = useContext(ShopContext)
    const [count, setCount] = useState(1)

    const specialType = () =>{
        switch(product.category){
            case 'coffee':
                return{
                    type:'Type:',
                    typeInfo: product.type,
                    special: 'Grind:',
                    specialInfo: product.grind
                };
            case 'tea':
                return{
                    type:'Type:',
                    typeInfo: product.type,
                    special: 'Forms:',
                    specialInfo: product.form
                };
            case 'bean and seed':
                return{
                    type:'Type:',
                    typeInfo: product.type,
                    special: '',
                    specialInfo: ''
                };
            default:{
                return{
                    type:'',
                    typeInfo: '',
                    special: '',
                    specialInfo: ''
                }
            }
        }
    }

    const {type,typeInfo, special, specialInfo } = specialType()

    const handleChangeNumber = (value) => {
        if(value === "-"){
            setCount(prev => prev > 1 ? prev - 1 : 1)
        } else if(value === "+"){
            setCount(prev => prev + 1)
        }
    }
  return (
    <Box className="product_display_container">
        <Box className="product_display_img">
            <img src={product.image} alt="" />
            <Box className="product_display_nextImg">
                <div className='product_display_next'></div>
                <div className='product_display_next'></div>
                <div className='product_display_next'></div>
                <div className='product_display_next'></div>
            </Box>
        </Box>
        <Box className="product_display_info">
            <Box>
                <Typography
                    variant='h4'
                    color='#3d3434'
                    fontWeight={700}
                >{product.name}</Typography>
                <Typography
                    variant='body1'
                    mt={2}
                    mb={2}
                >{product.small_description}</Typography>
            </Box>
            <Box className='product_display_rating'>
                <Rating
                    value={5}
                    readOnly
                    sx={{ alignSelf: "center" }}
                />
                <Typography
                    variant='body1'
                    ml={1}
                >50+ reviews</Typography>
            </Box>
            <Box mt={2}>
                <Typography
                    variant='h6'
                    color='#3d3434'
                    mr={2}
                >{type} {typeInfo}</Typography>
                <Typography
                    variant='h6'
                    color='#3d3434'
                >{special} {specialInfo}</Typography>
            </Box>
            <Typography
                variant='h4'
                color='#3d3434'
                fontWeight={700}
                mt={2}
            >${product.price}</Typography>
            <Box className="product_display_add">
                <Button 
                    size='small'
                    onClick={()=>handleChangeNumber('-')}
                    sx={{
                        backgroundColor: '#3d3434',
                        color: '#fff',
                        fontSize: 16
                    }}
                >-</Button>
                <Typography style={{fontSize: '18px', fontWeight: '600', textAlign: 'center', width:'30px', color:'#3d3434'}}>{count}</Typography>
                <Button 
                    size='small'
                    onClick={()=>handleChangeNumber('+')}
                    sx={{
                        backgroundColor: '#3d3434',
                        color: '#fff',
                        fontSize: 16
                    }}                    
                >+</Button>
            </Box>
            <Button   
                onClick={()=>{addToCart(product.id, count)}}
                sx={{
                    backgroundColor: '#3d3434',
                    fontWeight: '600',
                    width: '100%',
                    height: 50,
                    color: '#fff',
                    fontSize: 20,
                    '&:hover':{
                        background: 'lightgray',
                        color: '#3d3434'
                    }
                }}
            >ADD TO CART</Button>
        </Box>
    </Box>
  )
}

export default ProductDisplay