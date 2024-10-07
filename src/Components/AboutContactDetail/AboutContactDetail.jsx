import React from 'react'
import './AboutContactDetail.css'
const AboutContactDetail = ({image, title, content, isReversed}) => {

    return (
    <div  className={`aboutContactcontainer ${isReversed ? 'reversed' : ''}`}>
        <img src={image} alt="" />
        <div className="aboutContact_text">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    </div>
  )
}

export default AboutContactDetail
