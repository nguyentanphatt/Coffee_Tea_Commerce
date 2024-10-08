import React, { useState } from 'react'
import './Style/Selling.css'
import upload_img from '../assets/frontend/upload_area.svg'
const Selling = () => {

    const [type, setType] = useState("")

  return (
    <div className="selling_container">
        <h1>Wanna to make profit? Give us more information!!</h1>
        <div className="selling_info">
            <input type="text" name="" id="" placeholder='Email'/>
            <input type="text" name="" id="" placeholder='Your name'/>
            <input type="date" name="" id="" placeholder='Your birthday'/>
            <input type="text" name="" id="" placeholder='Price'/>
        </div>
        <div className="selling_type">
            <p>Type:</p>
            <input type="radio" title='Coffee' value="coffee" onChange={()=>setType("coffee")} checked={type==="coffee"}/>Coffee
            <input type="radio" title='Tea' value="tea" onChange={()=>setType("tea")} checked={type==="tea"}/>Tea
            <input type="radio" title='Bean and Seed' value="bean and seed" onChange={()=>setType("bean and seed")} checked={type==="bean and seed"}/>Bean and Seed
        </div>
        <div className="selling_img">
            <p>Image:</p>
            <label htmlFor="file-input">
                <img src={upload_img} alt="" className='img_upload' />
            </label>
            <input type="file" name="" id="" hidden />
        </div>
        <div className="selling_description">
            <p>Description:</p>
            <textarea name="" id="" cols="10"></textarea>
        </div>
    </div>
  )
}

export default Selling