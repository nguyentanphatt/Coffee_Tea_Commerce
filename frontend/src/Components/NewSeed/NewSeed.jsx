import React from 'react'
import './NewSeed.css'
import seed_icon from '../../assets/frontend/seed_icon.png'
//import new_bean from '../../assets/frontend/new_bean'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'
import { useState, useContext, useEffect } from 'react'
const NewSeed = () => {
  const {all_product} = useContext(ShopContext)
  const [filterProduct, setFilterProduct] = useState([])

  useEffect(()=>{
    const new_bean = all_product.filter(product => product.category==='bean and seed').slice(0,6)
    setFilterProduct(new_bean)
  },[all_product])
  return (
    <div className='bean_special'>
        <div className="bean_banner">
            <h1>NEW BEAN FOR YOU</h1>
            <img src={seed_icon} alt="" />
        </div>
        <div className="special_item">
            {filterProduct.map((item,index)=>{
                return <Item key={index} id={item.id} name={item.name} image={item.image} price={item.price} small_description={item.small_description}/>
            })}
        </div>
    </div>
  )
}

export default NewSeed