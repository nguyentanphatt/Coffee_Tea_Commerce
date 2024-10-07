import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
      
        <p className='item_name'>{props.name}</p>
        <p className='item_description'>{props.small_description}</p>
        <p className='item_price'>${props.price}</p>
    </div>
  )
}

export default Item