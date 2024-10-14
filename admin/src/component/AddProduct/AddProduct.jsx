import React, { useState } from 'react'
import { TextField, Button, Radio, FormControl, FormLabel, RadioGroup, FormControlLabel } from '@mui/material';
const AddProduct = () => {

    const [category, setCategory] = useState('coffee')
    const [image, setImage] = useState(null)
    const [formData, setFormData] = useState({
      name: '',
      description: '',
      small_description: '',
      price: '',
      quantity: '',
      image: null,
      category: 'coffee',
      type: '',
      favor: '',
      grind: '',
      form: '' 
    })

    const handleChangeCategory = (e) =>{
      setFormData({
        ...formData,
        category: e.target.value,
    });
    }

    const handleImageChange = (e) =>{
      const file = e.target.files[0]
      if(file){
        setFormData({ ...formData, image: file });
        const reader = new FileReader()
        reader.onloadend = () => {
          setImage(reader.result)
        }
        reader.readAsDataURL(file)
      }
    }

    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
    }

    const handleSubmit = async () => {
      let responseImage;
      const imageFormData = new FormData();
      imageFormData.append('product', formData.image);
      try {
        responseImage = await fetch('http://localhost:4000/upload', {
            method: "POST",
            headers: {
              Accept: "application/json"
            },
            body: imageFormData
        });
      } catch (error) {
        console.error("Error uploading image:", error);
        return;
      }

      const imageData = await responseImage.json();

      if (imageData.success) {
        const descriptionWords = formData.description.split(' ').slice(0, 4).join(' ');
        const productDetails = {
          ...formData,
          small_description: descriptionWords,
          image: imageData.image_url,
        };
        try {
          const responseProduct = await fetch('http://localhost:4000/addproduct', {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(productDetails),
          });
        const data = await responseProduct.json();
        if (data.success) {
          alert("Product Added");
        } else {
          alert("Failed to add product");
        }
      } catch (error) {
        console.error("Error adding product:", error);
      }
      } else {
        alert("Failed to upload image");
      }
    }

  return (
    <div className="p-6 bg-gray-50 rounded-lg max-w-4xl mx-auto ml-40">
      <h1 className="text-2xl font-bold mb-6 text-center">Add product</h1>
      <div className="mb-4">
        <TextField
          label="Item name"
          variant="outlined"
          fullWidth
          className="mb-4"
          name='name'
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <TextField
          label="Quantity"
          variant="outlined"
          fullWidth
          name='quantity'
          value={formData.quantity}
          onChange={handleInputChange}
        />
        <TextField
          label="Price"
          variant="outlined"
          fullWidth
          name='price'
          value={formData.price}
          onChange={handleInputChange}
        />
      </div>
      <FormControl className="mb-4">
        <FormLabel>Category</FormLabel>
        <RadioGroup row value={formData.category} onChange={handleChangeCategory}> 
          <FormControlLabel value="coffee" control={<Radio />} label="Coffee" />
          <FormControlLabel value="tea" control={<Radio />} label="Tea" />
          <FormControlLabel value="bean and seed" control={<Radio />} label="Bean and Seed" />
        </RadioGroup>
      </FormControl>
      <FormControl className="mb-4">
        <FormLabel className='ml-10'>Type</FormLabel>
        <RadioGroup row className='ml-10' name='type' value={formData.type} onChange={handleInputChange}>
            {formData.category === 'coffee' &&(
                <>
                    <FormControlLabel value="regular" control={<Radio />} label="Regular" />
                    <FormControlLabel value="decaf" control={<Radio />} label="Decaf" />
                </>
            )}
            {formData.category === 'tea' && (
                <>
                    <FormControlLabel value="tea_bag" control={<Radio />} label="Tea Bag" />
                    <FormControlLabel value="powdered_tea" control={<Radio />} label="Powdered Tea" />
                </>
            )}
            {formData.category ==='bean and seed' &&(
                <>
                    <FormControlLabel value="coffee_bean" control={<Radio />} label="Coffee Bean" />
                    <FormControlLabel value="tea_seed" control={<Radio />} label="Tea Seed" /> 
                </>
            )}
        </RadioGroup>
      </FormControl>

      {formData.category === 'coffee' && (
            <FormControl className="mb-4">
                <FormLabel>Grind</FormLabel>
                <RadioGroup row name='grind' value={formData.grind} onChange={handleInputChange}>
                    <FormControlLabel value="espresso" control={<Radio />} label="Espresso" />
                    <FormControlLabel value="manual_drip" control={<Radio />} label="Manual Drip" />
                    <FormControlLabel value="auto_drip" control={<Radio />} label="Auto Drip" />
                </RadioGroup>
            </FormControl>
        )}
      {formData.category === 'tea' && (
            <FormControl className="mb-4">
                <FormLabel>Form</FormLabel>
                <RadioGroup row name='form' value={formData.form} onChange={handleInputChange}>
                    <FormControlLabel value="pound" control={<Radio />} label="Pound" />
                    <FormControlLabel value="bags" control={<Radio />} label="Bags" />
                    <FormControlLabel value="tin_can" control={<Radio />} label="Tin Can" />
            </RadioGroup>
      </FormControl>
      )}

      {formData.category === 'coffee' && (
            <FormControl className="mb-4">
                <FormLabel>Favor</FormLabel>
                <RadioGroup row name='favor' value={formData.favor} onChange={handleInputChange}>
                <FormControlLabel value="light_favor" control={<Radio />} label="Light Favor" />
                    <FormControlLabel value="strong_favor" control={<Radio />} label="Strong Favor" />
                    <FormControlLabel value="good_with_milk" control={<Radio />} label="Good With Milk" />
                </RadioGroup>
            </FormControl>
        )}
      {formData.category === 'tea' && (
            <FormControl className="mb-4">
                <FormLabel className='ml-20'>Favor</FormLabel>
                <RadioGroup row className='ml-20' name='favor' value={formData.favor} onChange={handleInputChange}>
                    <FormControlLabel value="light_favor" control={<Radio />} label="Light Favor" />
                    <FormControlLabel value="strong_favor" control={<Radio />} label="Strong Favor" />
                    <FormControlLabel value="special_leaf" control={<Radio />} label="Special Leaf" />
            </RadioGroup>
      </FormControl>
      )}

      <div className="mb-4">
        <FormLabel>Image:</FormLabel>
        <div className="w-32 h-32 bg-gray-300 rounded-md mb-2">
          {image ? (
            <img src={image} className='w-full h-full object-cover rounded-md'/>
          ) : (
            <div className="w-full h-full bg-gray-300 rounded-md"></div>
          )}
        </div>
        <input type="file" name='image' onChange={handleImageChange}/>
      </div>

      <div className="mb-6">
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          name='description'
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="text-center">
        <button
          className="bg-gray-800 text-white py-2 px-10 rounded-md hover:bg-gray-700"
          type="submit"
          onClick={handleSubmit}
        >
          ADD
        </button>
      </div>
    </div>
  )
}

export default AddProduct