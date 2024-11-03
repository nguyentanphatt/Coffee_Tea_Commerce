import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from '../assets/frontend/remove_icon.png'
import visa from '../assets/frontend/visa.png'
import master_card from '../assets/frontend/master_card.png'
import card_pay from '../assets/frontend/card.png'
import success from '../assets/frontend/success.png'
import './Style/Cart.css'
import { useNavigate } from "react-router-dom";
import { Box, Typography, Divider, Button, TextField, Modal, Radio } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
const Cart = () => {

    const {all_product, cartItems, removeFromCart, getTotalCartAmount, removeAllFromCart} = useContext(ShopContext)
    const [promoCode, setPromoCode] = useState('')
    const [checkPromoCode, setCheckPromoCode] = useState(false)
    const [promoMessage, setPromoMessage] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const [openSubModal, setOpenSubModal] = useState(false)
    const [card, setCard] = useState('visa')
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

    const handleOpenModal = () => {
      setOpenModal(true)
    }

    const handleCloseModal = () => {
      setOpenModal(false)
    }

    const handleSubOpenModal = () => {
      setOpenSubModal(true)
      removeAllFromCart()
    }

    const handleSubCloseModal = () => {
      setOpenSubModal(false)
      setOpenModal(false)
      navigate('/')
    }

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
                  onClick={handleOpenModal}
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
        <Modal
          open={openModal}
          onClose={handleCloseModal}
        >
          <Box 
            sx={{
              width: 600,
              height: 400,
              backgroundColor: '#fff',
              transform: 'translate(-50%, -50%)',
              top: '50%',
              left: '50%',
              position: 'absolute',
              borderRadius: 5,

          }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 2
              }}
            >
              <Typography
                variant='h5'
                color='#3d3434'
                ml={3}
                fontWeight={600}
              >Payment</Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                mr: 2
              }}
            >
              <img src={visa} alt="" style={{width: 38, height: 38, marginRight: 5}}/>
              <img src={master_card} alt="" style={{width: 40, height: 40, marginRight: 5}}/>
              <img src={card_pay} alt="" style={{width: 40, height: 40}}/>
            </Box>
            </Box>
            <Box
              sx={{
                width: '90%',
                alignContent: 'center',
                ml: 4,
                mt: 2,
                border: '1px solid black',
                display: 'flex',
                alignItems: 'center',
                borderRadius: 2,
              }}
            >
              <img src={visa} alt="" style={{width: 38, height: 38, marginLeft: 10}} />
              <Typography
                sx={{
                  ml: 5,
                }}
              >*********3456</Typography>
              <Radio 
                sx={{marginLeft: 35}} 
                value="visa" 
                onChange={()=>setCard("visa")} 
                checked={card==='visa'}/>
            </Box>

            <Box
              sx={{
                width: '90%',
                alignContent: 'center',
                ml: 4,
                mt: 2,
                border: '1px solid black',
                display: 'flex',
                alignItems: 'center',
                borderRadius: 2,
              }}
            >
              <img src={master_card} alt="" style={{width: 38, height: 38, marginLeft: 10}} />
              <Typography
                sx={{
                  ml: 5,
                }}
              >*********5789</Typography>
              <Radio 
                sx={{marginLeft: 35}} 
                value="master_card" 
                onChange={()=>setCard('master_card')} 
                checked={card==='master_card'}/>
            </Box>
            <Box mt={2}>
            <Typography
                variant='h5'
                color='#3d3434'
                ml={3}
                fontWeight={600}
              >Delivery</Typography>
              <Textarea 
                placeholder='Write your address here'
                sx={{
                  width: '90%',
                  ml: 4,
                  mt: 2,
                  height: '80px'
                }}
              />
            </Box>
            <Box sx={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
            <Button 
              onClick={handleSubOpenModal}
              color='primary' 
              variant='contained'
              size='large'
              sx={{
                mt: 2
              }}
            >CheckOut</Button>
            </Box>
          </Box>

        </Modal>
        <Modal
          open={openSubModal}
          onClose={handleSubCloseModal}
        >
          <Box
            sx={{
              width: 400,
              height: 400,
              backgroundColor: '#fff',
              transform: 'translate(-50%, -50%)',
              top: '50%',
              left: '50%',
              position: 'absolute',
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <img src={success} alt="" style={{width: 100, height: 100, marginBottom: 10}}/>
            <Typography variant='h5' fontWeight={700} color='#00cd00'>YOUR ORDER IS CONFIRMED</Typography>
            <Button 
              onClick={handleSubCloseModal}
              color='primary' 
              variant='contained'
              size='large'
              sx={{
                mt: 4
              }}
            >Go Back</Button>
          </Box>
        </Modal>
    </Box>
  )
}

export default Cart