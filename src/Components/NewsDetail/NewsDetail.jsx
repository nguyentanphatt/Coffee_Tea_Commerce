import React from 'react'
import './NewsDetail.css'
const NewsDetail = (props) => {
  return (
    <div className='newsDetail'>
        <img src={props.image} alt="" />
        <h1>{props.title}</h1>
        <p>{props.small_detail}</p>
        <button>View more</button>
    </div>
  )
}

export default NewsDetail