import React from 'react'
import './TeaSpecial.css'
import tea_icon from '../../assets/frontend/tea_icon.png'
//import special_tea from '../../assets/frontend/special_tea'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'
import { useState, useContext, useEffect } from 'react'
const TeaSpecial = () => {
  const {all_product} = useContext(ShopContext)
  const [filterProduct, setFilterProduct] = useState([])

  useEffect(()=>{
    const special_tea = all_product.filter(product => product.category==='tea').slice(0,6)
    setFilterProduct(special_tea)
  },[all_product])
  return (
    <div className='tea_special'>
        <div className="tea_banner">
            <h1>TEA LEAF GOOD FOR HEALTH</h1>
            <img src={tea_icon} alt="" />
        </div>
        <div className="special_item">
            {filterProduct.map((item,index)=>{
                return <Item key={index} id={item.id} name={item.name} image={item.image} price={item.price} small_description={item.small_description}/>
            })}
        </div>
    </div>
  )
}

export default TeaSpecial