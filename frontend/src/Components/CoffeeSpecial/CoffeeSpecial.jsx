import React from 'react'
import './CoffeeSpecial.css'
import coffee_icon from '../../assets/frontend/coffee_icon.png'
//import special_coffee from '../../assets/frontend/special_coffee'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'
import { useState, useContext, useEffect } from 'react'
const CoffeeSpecial = () => {

  const {all_product} = useContext(ShopContext)
  const [filterProduct, setFilterProduct] = useState([])

  useEffect(()=>{
    const special_coffee = all_product.filter(product => product.category==='coffee').slice(0,6)
    setFilterProduct(special_coffee)
  },[all_product])
  return (
    <div className='coffee_special'>
        <div className="coffee_banner">
            <h1>SPECIAL IN LIGHT FAVOR</h1>
            <img src={coffee_icon} alt="" />
        </div>
        <div className="special_item">
            {filterProduct.map((item,index)=>{
                return <Item key={index} id={item.id} name={item.name} image={item.image} price={item.price} small_description={item.small_description}/>
            })}
        </div>
    </div>
  )
}

export default CoffeeSpecial