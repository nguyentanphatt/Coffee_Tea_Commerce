import React, { useState } from 'react'
import './Style/Selling.css'
import upload_img from '../assets/frontend/upload_area.svg'
const Selling = () => {

    const [category, setCategory] = useState("")
    const [selectedImage, setSelectedImage] = useState(null);
    const [formData, setFormData] = useState({
        sellEmail: "",
        sellName: "",
        name:"",
        price: "",
        category: "",
        quantity: "",
        image: null,
        description: "",
    })

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedImage(e.target.files[0]);
            setFormData({...formData, image: e.target.files[0]})
        }
    };

    const handleChangeValue = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        if (name === 'category') {
            setCategory(value);
        }
    }

    const handleSubmit = async() => {
        let responseImage;
        const imageFormData = new FormData()
        imageFormData.append('product', formData.image)
        try {
            responseImage = await fetch('http://localhost:4000/upload',{
                method: 'POST',
                headers:{
                    Accept: 'application/json'
                },
                body: imageFormData
            })
        } catch (error) {
            console.error("Error uploading image:", error);
            return;
        }

        const imageData = await responseImage.json()
        console.log(imageFormData);
        
        if(imageData.success){
            const sellingDetails = {
                ...formData,
                image: imageData.image_url,
                type: formData.type
            }
            try {
                const responseSelling = await fetch('http://localhost:4000/addsellingitem',{
                    method: 'POST',
                    headers:{
                        Accept: 'applocation/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(sellingDetails)
                })
                const data = await responseSelling.json()
                if(data.success){
                    console.log("Selling Added");
                    window.location.reload('/')
                } else{
                    console.log("Failed to add"); 
                }
            } catch (error) {
                console.error("Error adding product:", error);
            }
        } else {
            console.log("Fail to update");
            
        }
    };
  return (
    <div className="selling_container">
        <h1>Wanna to make profit? Give us more information!!</h1>
        <div className="selling_info">
            <input type="text" name="sellEmail" value={formData.sellEmail} onChange={handleChangeValue} id="" placeholder='Email'/>
            <input type="text" name="sellName" value={formData.sellName} onChange={handleChangeValue} id="" placeholder='Your name'/>
            <input type="text" name="name" value={formData.name} onChange={handleChangeValue} id="" placeholder='Item name'/>
            <input type="text" name="price" value={formData.price} onChange={handleChangeValue} id="" placeholder='Price'/>
            <input type="text" name="quantity" value={formData.quantity} onChange={handleChangeValue} id="" placeholder='Quantity'/>
        </div>
        <div className="selling_type">
            <p>Type:</p>
            <input type="radio" title='Coffee' name='category' value="coffee" onChange={handleChangeValue} checked={formData.category ==="coffee"}/>Coffee
            <input type="radio" title='Tea' name='category' value="tea" onChange={handleChangeValue} checked={formData.category ==="tea"}/>Tea
            <input type="radio" title='Bean and Seed' name='category' value="bean and seed" onChange={handleChangeValue} checked={formData.category ==="bean and seed"}/>Bean and Seed
        </div>
        <div className="selling_img">
                <p>Image:</p>
                <label htmlFor="file-input">
                    {selectedImage ? (
                        <img src={URL.createObjectURL(selectedImage)} alt="Selected" className='img_upload' />
                    ) : (
                        <img src={upload_img} alt="Upload" className='img_upload' />
                    )}
                </label>
                <input type="file" id="file-input" onChange={handleImageChange} />
            </div>
        <div className="selling_description">
            <p>Description:</p>
            <textarea name="description" value={formData.description} onChange={handleChangeValue} id="" cols="10"></textarea>
        </div>
        <button onClick={handleSubmit} className='selling_submit'>Submit</button>
    </div>
  )
}

export default Selling