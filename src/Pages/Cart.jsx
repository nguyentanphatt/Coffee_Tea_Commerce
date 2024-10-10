import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from '../assets/frontend/remove_icon.png'
import './Style/Cart.css'
const Cart = () => {

    const {all_product, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext)

  return (
    <div className="cart_container">
        <h1>Cart Item</h1>
        <div className="cart_form">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Action</p>
        </div>
        <hr />
        {all_product.map((item)=>{
            if(cartItems[item.id]>0){
                return (
                    <div>
                        <div className='cart_format cart_form'>
                            <img src={item.image} alt="" className='cart_item_img' />
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <p className='cart_quantity'>{cartItems[item.id]}</p>
                            <p>${item.price*cartItems[item.id]}</p>
                            <img src={remove_icon} alt="" className='cart_remove_icon' onClick={()=>{removeFromCart(item.id)}}/>
                            <hr />
                        </div>
                    </div>
                )
            }
            else{
                return null
            }
        })}
        <hr />
        <div className="cart_down">
            <div className="cart_total">
                <div className="cart_total_info">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <div className="cart_total_info">
                    <p>Shipping Fee</p>
                    <p>0</p>
                </div>
                <hr />
                <div className="cart_total_info">
                    <p>Total</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <button className='checkout_btn'>Process To Checkout</button>
            </div>
            
            <div className="cart_promo">
                <input type="text" name="" id="" placeholder='Promo Code'/>
                <button>Check</button>
            </div>
        </div>
    </div>
  )
}

export default Cart