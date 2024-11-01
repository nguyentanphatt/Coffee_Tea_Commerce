import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from '../assets/frontend/remove_icon.png'
import './Style/Cart.css'
import { useNavigate } from "react-router-dom";
import { Box, Typography, Divider, Button, TextField } from '@mui/material';
const Cart = () => {

    const {all_product, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext)
    const [promoCode, setPromoCode] = useState('')
    const [checkPromoCode, setCheckPromoCode] = useState(false)
    const [promoMessage, setPromoMessage] = useState('')
    const navigate = useNavigate()

    const validPromoCode = {
      sale20: 0.20,
      sale30: 0.30,
      sale50: 0.50
    };

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch("http://localhost:4000/getuserdata", {
              method: "GET",
              headers: {
                "auth-token": localStorage.getItem("auth-token"),
              },
            });
            const data = await response.json();
            if (data.success) {
              console.log("OK");
            } else {
              alert("Please login to use");
              navigate("/login");
            }
          } catch (error) {
            console.error(error);
          }
        };
        fetchUserData();
    }, [navigate]);
  
    const hasItemsInCart = all_product.some(item => cartItems[item.id] > 0);
    
    const handlePromoCode = () => {
      if(validPromoCode[promoCode.toLowerCase()] !== undefined){
        setCheckPromoCode(true)
        setPromoMessage("Promo Code is Valid");
      } else {
        setCheckPromoCode(false)
        setPromoMessage("Promo Code is Invalid");
      }
    }

    const totalAmount = getTotalCartAmount()
    const discount = checkPromoCode ? validPromoCode[promoCode.toLowerCase()] : 0
    const discountedTotal = totalAmount - (totalAmount*discount)

  return (
    <Box className="cart_container">
        <Typography
          variant="h3"
          sx={{
            color: "#3d3434",
            fontWeight: "bold",
            mb: 5,
            textAlign: "center",
          }}
        >Cart Item</Typography>
        <Box className="cart_form">
            <Typography color='#3d3434' fontWeight={600}>Product</Typography>
            <Typography color='#3d3434' fontWeight={600}>Title</Typography>
            <Typography color='#3d3434' fontWeight={600}>Price</Typography>
            <Typography color='#3d3434' fontWeight={600}>Quantity</Typography>
            <Typography color='#3d3434' fontWeight={600}>Total</Typography>
            <Typography color='#3d3434' fontWeight={600}>Action</Typography>
        </Box>
        {hasItemsInCart && <Divider sx={{borderColor:'#3d3434', borderWidth: 2}}/>}
        {all_product.map((item)=>{
            if(cartItems[item.id]>0){
                return (
                    <Box>
                        <Box className='cart_format cart_form'>
                            <img src={item.image} alt="" className='cart_item_img' />
                            <Typography>{item.name}</Typography>
                            <Typography>{item.price}</Typography>
                            <Typography className='cart_quantity'>{cartItems[item.id]}</Typography>
                            <Typography>${item.price*cartItems[item.id]}</Typography>
                            <img src={remove_icon} alt="" className='cart_remove_icon' onClick={()=>{removeFromCart(item.id)}}/>
                        </Box>
                    </Box>
                )
            }
            else{
                return null
            }
        })}
        {hasItemsInCart && <Divider sx={{borderColor:'#3d3434', borderWidth: 2}}/>}
        <Box className="cart_down">
            <Box className="cart_total">
                <Box className="cart_total_info">
                    <Typography fontSize={16} color='#3d3434' fontWeight={600}>Subtotal</Typography>
                    <Typography fontSize={16} color='#3d3434' fontWeight={600}>${getTotalCartAmount()}</Typography>
                </Box>
                <Box className="cart_total_info">
                    <Typography fontSize={16} color='#3d3434' fontWeight={600}>Shipping Fee</Typography>
                    <Typography fontSize={16} color='#3d3434' fontWeight={600}>0</Typography>
                </Box>
                {checkPromoCode && (
                  <Box className="cart_total_info">
                    <Typography fontSize={16} color='#3d3434' fontWeight={600}>Promo Code ({promoCode.toUpperCase()})</Typography>
                    <Typography fontSize={16} color='#3d3434' fontWeight={600} mb={3}>{(discount * 100).toFixed(0)}%</Typography>
                  </Box>
                )}
                <Divider sx={{borderColor:'#3d3434', borderWidth: 2, mb: 2}}/>
                <Box className="cart_total_info">
                    <Typography fontSize={16} color='#3d3434' fontWeight={600}>Total</Typography>
                    <Typography fontSize={16} color='#3d3434' fontWeight={600} mb={3}>${discountedTotal.toFixed(2)}</Typography>
                </Box>
                <Button
                  size='large'
                  sx={{
                    backgroundColor: '#3d3434',
                    color: '#fff',
                    fontWeight: '600',
                    ml: '170px',
                    '&:hover':{
                      backgroundColor: 'lightgray',
                      color: '#3d3434'
                    }
                  }}

                >Process To Checkout</Button>
            </Box>
            
            <Box width={'50%'}>
                {/* <input type="text" name="" id="" placeholder='Promo Code'/> */}
                <TextField 
                  type='text' 
                  name='promocode' 
                  id='promocode'
                  size='small'
                  variant='outlined'
                  label='Promo Code'
                  value={promoCode}
                  onChange={(e) => (
                    setPromoCode(e.target.value),
                    setCheckPromoCode(false),
                    setPromoMessage(null)
                  )}
                  sx={{
                    width: '50%',
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#5d5d5d',
                          borderWidth: '2px',
                        },
                        '&:hover fieldset': {
                          borderColor: '#3D3434',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#3D3434',
                        },
                      },
                  }}
                />
                <Button
                  variant='contained'
                  size='large'
                  onClick={handlePromoCode}
                  sx={{
                    ml: 2,
                    height: '40px',
                    background: '#3d3434',
                    fontWeight: '600',
                    '&:hover':{
                      backgroundColor: 'lightgray',
                      color: '#3d3434'
                    }
                  }}
                >Check</Button>
                {promoMessage !== 'null' ?  (
                  <Typography
                    variant="body2"
                    sx={{
                      color: checkPromoCode ? 'green' : 'red',
                      mt: 1,
                      fontWeight: 'bold'
                    }}
                  >
                    {promoMessage}
                </Typography>
                )
                :
                (<></>)
              }
            </Box>
        </Box>
    </Box>
  )
}

export default Cart