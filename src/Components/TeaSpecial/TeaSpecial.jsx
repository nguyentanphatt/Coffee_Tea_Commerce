import React from 'react'
import './TeaSpecial.css'
import tea_icon from '../../assets/frontend/tea_icon.png'
import special_tea from '../../assets/frontend/special_tea'
import Item from '../Item/Item'
const TeaSpecial = () => {
  return (
    <div className='tea_special'>
        <div className="tea_banner">
            <h1>SPECIAL IN LIGHT FAVOR</h1>
            <img src={tea_icon} alt="" />
        </div>
        <div className="special_item">
            {special_tea.map((item,index)=>{
                return <Item key={index} id={item.id} name={item.name} image={item.image} price={item.price} small_description={item.small_description}/>
            })}
        </div>
    </div>
  )
}

export default TeaSpecial