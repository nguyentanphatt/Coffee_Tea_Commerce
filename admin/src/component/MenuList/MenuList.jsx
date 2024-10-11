import React, { useState } from 'react';
import { MenuItem, Button } from '@mui/material';
import { Link } from 'react-router-dom';
const MenuList = () => {
  const [productOpen, setProductOpen] = useState(false);
  const [sellingOpen, setSellingOpen] = useState(false);

  const toggleProductMenu = () => setProductOpen(!productOpen);
  const toggleSellingMenu = () => setSellingOpen(!sellingOpen);

  return (
    <div className="flex flex-col w-1/6 text-white p-4">
      {/* Product Menu */}
      <div className="relative mb-2">
        <div className='mb-1 bg-gray-700 rounded-md h-12 flex items-center'>
          <Button onClick={toggleProductMenu} className="">
            <div className='text-white flex'>
              <p className='mr-44'>Product</p>
              {productOpen ? '▼' : '►'} 
            </div>
          </Button>
        </div>
        {productOpen && (
          <div className=" text-white rounded-md mt-1">
            <Link to="/all-product">
              <div className='mb-1 bg-gray-500 rounded-md'> 
                <MenuItem className="">All Product</MenuItem>
              </div>
            </Link>
            <Link to="/add-product">
              <div className='mb-1 bg-gray-500 rounded-md'>
                <MenuItem className="">Add Product</MenuItem>
              </div>
            </Link>
            <Link to="/update-product">
              <div className=' bg-gray-500 rounded-md'>
                <MenuItem className="">Update Product</MenuItem>
              </div>
            </Link>
          </div>
        )}
      </div>

      {/* Selling Menu */}
      <div className="relative mb-2">
      <div className='mb-1 bg-gray-700 rounded-md h-12 flex items-center'>
          <Button onClick={toggleSellingMenu} className="">
            <div className='text-white flex'>
              <p className='mr-44'>SELLING</p>
              <p className='ml-2'>{sellingOpen ? '▼' : '►'} </p>
            </div>
          </Button>
        </div>
        {sellingOpen && (
          <div className=" text-white rounded-md mt-1">
            <Link to="/all-selling">
              <div className='mb-1 bg-gray-500 rounded-md'>
                <MenuItem className="">All Selling</MenuItem>
              </div>
            </Link>
            <Link to="/add-to-product">
              <div className=' bg-gray-500 rounded-md'>
                <MenuItem className="">Add to Product</MenuItem>
              </div>
            </Link>
          </div>
        )}
      </div>

      {/* User Menu */}
      <div className='mb-1 bg-gray-700 rounded-md h-12 flex items-center'>
        <Link to="/user">
          <Button className="bg-gray-800 text-white mt-2">
            <div className='text-white'>USER</div>
          </Button>
        </Link>
      </div>

    </div>
  );
};

export default MenuList;
