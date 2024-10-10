import React from 'react'
import './Style/HelpCenter.css'
import { Link } from 'react-router-dom'
const HelpCenter = () => {
  return (
    <div className="helpcenter_container">
      <h1>Help Center</h1>
      <div className="helpcenter_content">
        <p><Link style={{textDecoration: 'none',color: 'inherit'}} to={`/helpcenter/copyright_policy`}>Copyright && Policy</Link></p>
        <p>About everything you should be know about Copyright && Policy</p>
      </div>
      <div className="helpcenter_content">
        <p><Link style={{textDecoration: 'none',color: 'inherit'}} to={`/helpcenter/safety_card`}>Safety Card</Link></p>
        <p>About everything you should be know about Safety Card</p>
      </div>
      <div className="helpcenter_content">
        <p><Link style={{textDecoration: 'none',color: 'inherit'}} to={`/helpcenter/shipping`}>Shipping</Link></p>
        <p>About everything you should be know about Shipping</p>
      </div>
      <div className="helpcenter_content">
        <p><Link style={{textDecoration: 'none',color: 'inherit'}} to={`/helpcenter/selling_rule`}>Selling Rule</Link></p>
        <p>About everything you should be know about Selling Rule</p>
      </div>
      <div className="helpcenter_content">
        <p><Link style={{textDecoration: 'none',color: 'inherit'}} to={`/helpcenter/your_satisfaction`}>Your Satisfaction</Link></p>
        <p>About everything you should be know about Your satisfaction</p>
      </div>
    </div>
  )
}

export default HelpCenter