import React, { useContext, useState } from 'react'
import black_star from '../../assets/frontend/black_star.png'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';
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
    <div className="product_display_container">
        <div className="product_display_img">
            <img src={product.image} alt="" />
            <div className="product_display_nextImg">
                <div className='product_display_next'></div>
                <div className='product_display_next'></div>
                <div className='product_display_next'></div>
                <div className='product_display_next'></div>
            </div>
        </div>
        <div className="product_display_info">
            <div className="product_display_title">
                <h1>{product.name}</h1>
                <p>{product.small_description}</p>
            </div>
            <div className='product_display_rating'>
                <div className="product_display_star">
                    <img src={black_star} alt="" />
                    <img src={black_star} alt="" />
                    <img src={black_star} alt="" />
                    <img src={black_star} alt="" />
                    <img src={black_star} alt="" />
                </div>
                <p>50+ reviews</p>
            </div>
            <div className="product_info_special">
                <h3>{type} {typeInfo}</h3>
                <h3>{special} {specialInfo}</h3>
            </div>
            <h1>${product.price}</h1>
            <div className="product_display_add">
                <button className='btn' onClick={()=>handleChangeNumber('-')}>-</button>
                <p style={{fontSize: '18px', fontWeight: '600', textAlign: 'center', width:'30px'}}>{count}</p>
                <button className='btn' onClick={()=>handleChangeNumber('+')}>+</button>
            </div>
            <button className='add_to_cart_btn' onClick={()=>{addToCart(product.id, count)}}>ADD TO CART</button>
        </div>
    </div>
  )
}

export default ProductDisplay