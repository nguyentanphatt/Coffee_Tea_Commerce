import React from 'react'
import { useParams } from 'react-router-dom'
import help_content from '../../assets/frontend/helpDetail'
import './HelpDetail.css'
const HelpDetail = () => {

    const {title} = useParams()
    const content = help_content[title];
  return (
    <div className="helpcenter_detail_container">
        <h1>{title.replace("_"," ").toUpperCase()}</h1>
        {content.map((item, index)=>(
            <div key={index} className='helpcenter_datail_section'>
                <h3>{item.section}</h3>
                <p>{item.content}</p>
            </div>
        ))}
    </div>
  )
}

export default HelpDetail