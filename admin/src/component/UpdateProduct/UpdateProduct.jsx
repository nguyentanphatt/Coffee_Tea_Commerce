import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
const UpdateProduct = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const product = location.state.product;

    const [formData, setFormData] = useState({
        id: product.id,
        name: product.name,
        description: product.description,
        small_description: product.small_description || '',
        price: product.price,
        image: product.image,
        category: product.category,
        type: product.type,
        quantity: product.quantity,
        grind: product.grind || '',
        form: product.form || '',
        favor: product.favor || '',
    });
    const [newImage, setNewImage] = useState(null); 

    useEffect(() => {
        setFormData({ ...formData, category: product.category });
    }, [product.category]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewImage(file); 
            setFormData({ ...formData, image: URL.createObjectURL(file) });  // Preview the image
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const updateFormData = new FormData();

        // Append all other fields to FormData
        Object.keys(formData).forEach(key => {
            if (key !== 'image') {
                updateFormData.append(key, formData[key]);
            }
        });
        if (newImage) {
            updateFormData.append('image', newImage);
        } else {
            updateFormData.append('image', formData.image || '');
        }
        await fetch(`http://localhost:4000/updateproduct`, {
            method: 'POST',
            //headers: {
            //    'Content-Type': 'application/json',
            //},
            body: updateFormData,
        });
        navigate('/all-product');
    };

    return (
        <div className="p-6 bg-gray-50 rounded-lg max-w-4xl mx-auto ml-40">
            <h1 className="text-2xl font-bold mb-6 text-center">Update Product</h1>

            <div className="mb-4">
                <TextField
                    label="Item Name"
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
                {formData.category === 'coffee' && (
                    <RadioGroup row name="category" value={formData.category} onChange={handleInputChange}>
                        <FormControlLabel value="coffee" control={<Radio />} label="Coffee" />
                    </RadioGroup>
                )}
                {formData.category === 'tea' && (
                    <RadioGroup row name="category" value={formData.category} onChange={handleInputChange}>
                        <FormControlLabel value="tea" control={<Radio />} label="Tea" />
                    </RadioGroup>
                )}
                {formData.category === 'bean and seed' && (
                    <RadioGroup row name="category" value={formData.category} onChange={handleInputChange}>
                        <FormControlLabel value="bean and seed" control={<Radio />} label="Bean and Seed" />
                    </RadioGroup>
                )}
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
                        <FormControlLabel value="manual_drop" control={<Radio />} label="Manual Drop" />
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
                    <FormLabel>Favor</FormLabel>
                    <RadioGroup row name='favor' value={formData.favor} onChange={handleInputChange}>
                        <FormControlLabel value="light_favor" control={<Radio />} label="Light Favor" />
                        <FormControlLabel value="strong_favor" control={<Radio />} label="Strong Favor" />
                        <FormControlLabel value="special_leaf" control={<Radio />} label="Special Leaf" />
                    </RadioGroup>
                </FormControl>
            )}

            <div className="mb-4">
                <FormLabel>Image:</FormLabel>
                <div className="w-32 h-32 bg-gray-300 rounded-md mb-2">
                    {formData.image ? (
                        <img src={formData.image} className='w-full h-full object-cover rounded-md' />
                    ) : (
                        <div className="w-full h-full bg-gray-300 rounded-md"></div>
                    )}
                </div>
                <input type="file" name='image' onChange={handleImageChange} />
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
                    Update Product
                </button>
            </div>
        </div>
    );
}

export default UpdateProduct