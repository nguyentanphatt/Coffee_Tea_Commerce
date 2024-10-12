import React, { useState } from 'react'
import { TextField, Button, Radio, FormControl, FormLabel, RadioGroup, FormControlLabel } from '@mui/material';
const AddProduct = () => {

    const [category, setCategory] = useState('coffee')

    const handleChangeCategory = (e) =>{
        setCategory(e.target.value)
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
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <TextField
          label="Quantity"
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Price"
          variant="outlined"
          fullWidth
        />
      </div>
      <FormControl className="mb-4">
        <FormLabel>Category</FormLabel>
        <RadioGroup row value={category} onChange={handleChangeCategory}> 
          <FormControlLabel value="coffee" control={<Radio />} label="Coffee" />
          <FormControlLabel value="tea" control={<Radio />} label="Tea" />
          <FormControlLabel value="bean_seed" control={<Radio />} label="Bean and Seed" />
        </RadioGroup>

      </FormControl>
      <FormControl className="mb-4">
        <FormLabel className='ml-10'>Type</FormLabel>
        <RadioGroup row className='ml-10'>
            {category === 'coffee' &&(
                <>
                    <FormControlLabel value="regular" control={<Radio />} label="Regular" />
                    <FormControlLabel value="decaf" control={<Radio />} label="Decaf" />
                </>
            )}
            {category === 'tea' && (
                <>
                    <FormControlLabel value="tea_bag" control={<Radio />} label="Tea Bag" />
                    <FormControlLabel value="powdered_tea" control={<Radio />} label="Powdered Tea" />
                </>
            )}
            {category ==='bean_seed' &&(
                <>
                    <FormControlLabel value="coffee_bean" control={<Radio />} label="Coffee Bean" />
                    <FormControlLabel value="tea_seed" control={<Radio />} label="Tea Seed" /> 
                </>
            )}
        </RadioGroup>
      </FormControl>

      {category === 'coffee' && (
            <FormControl className="mb-4">
                <FormLabel>Grind</FormLabel>
                <RadioGroup row>
                    <FormControlLabel value="espresso" control={<Radio />} label="Espresso" />
                    <FormControlLabel value="manual_drop" control={<Radio />} label="Manual Drop" />
                    <FormControlLabel value="auto_drip" control={<Radio />} label="Auto Drip" />
                </RadioGroup>
            </FormControl>
        )}
      {category === 'tea' && (
            <FormControl className="mb-4">
                <FormLabel>Form</FormLabel>
                <RadioGroup row>
                    <FormControlLabel value="pound" control={<Radio />} label="Pound" />
                    <FormControlLabel value="bags" control={<Radio />} label="Bags" />
                    <FormControlLabel value="tin_can" control={<Radio />} label="Tin Can" />
            </RadioGroup>
      </FormControl>
      )}

      <div className="mb-4">
        <FormLabel>Image:</FormLabel>
        <div className="w-32 h-32 bg-gray-300 rounded-md mb-2"></div>
        <input type="file" />
      </div>

      <div className="mb-6">
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
        />
      </div>
      <div className="text-center">
        <button
          className="bg-gray-800 text-white py-2 px-10 rounded-md hover:bg-gray-700"
          type="submit"
        >
          ADD
        </button>
      </div>
    </div>
  )
}

export default AddProduct