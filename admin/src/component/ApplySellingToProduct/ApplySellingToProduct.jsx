import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
const ApplySellingToProduct = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const selling = location.state.selling;
    const [formData, setFormData] = useState({
        id: selling.id,
        name: selling.name,
        description: selling.description,
        small_description: selling.small_description || '',
        price: selling.price,
        image: selling.image,
        category: selling.category,
        type: selling.type || '',
        quantity: selling.quantity,
        grind: selling.grind || '',
        form: selling.form || '',
        favor: selling.favor || '',
    });

    useEffect(() => {
        setFormData({ ...formData, category: selling.category });
    }, [selling.category]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    
    

    const handleSubmit = async() => {
        console.log("data",formData);
        const responseProduct = await fetch('http://localhost:4000/addproduct', {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        });
        const data = await responseProduct.json();
        if (data.success) {
            alert("Product Added");
            const responseDelete = await fetch('http://localhost:4000/deleteselling', {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({ id: formData.id, name: formData.name }),
            });
            const deleteData = await responseDelete.json();

            if (deleteData.success) {
                alert("Selling item removed successfully");
                navigate('/all-selling')
            } else {
                alert("Failed to remove selling item");
            }
        } else {
            alert("Failed to add product");
        }
    }

  return (
    <div className="p-6 bg-gray-50 rounded-lg max-w-4xl mx-auto ml-40">
            <h1 className="text-2xl font-bold mb-6 text-center">Approve Selling</h1>

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
                    <FormLabel>Favor</FormLabel>
                    <RadioGroup row name='favor' value={formData.favor} onChange={handleInputChange}>
                        <FormControlLabel value="light_favor" control={<Radio />} label="Light Favor" />
                        <FormControlLabel value="strong_favor" control={<Radio />} label="Strong Favor" />
                        <FormControlLabel value="special_leaf" control={<Radio />} label="Special Leaf" />
                    </RadioGroup>
                </FormControl>
            )} 

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
                    Apply to Product
                </button>
            </div>
        </div>
  )
}

export default ApplySellingToProduct