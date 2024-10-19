import React, { useState } from 'react';
import { MenuItem, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const MenuList = () => {
  const [productOpen, setProductOpen] = useState(false);
  const [sellingOpen, setSellingOpen] = useState(false);

  const toggleProductMenu = () => setProductOpen(!productOpen);
  const toggleSellingMenu = () => setSellingOpen(!sellingOpen);
  const isAuthenticated = !!localStorage.getItem('auth-token');

  const navigate = useNavigate()

  return (
    <div className="flex flex-col w-1/6 text-white p-4">
      {/* Product Menu */}
      <div className="relative mb-2">
        <div className={`mb-1 ${!isAuthenticated ? 'bg-gray-400' : 'bg-gray-700'}  rounded-md h-12 flex items-center`}>
          <Button onClick={toggleProductMenu} className="" disabled={!isAuthenticated}>
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
              <div className=' bg-gray-500 rounded-md'>
                <MenuItem disabled={true} className="">Update Product</MenuItem>
              </div>
          </div>
        )}
      </div>

      {/* Selling Menu */}
      <div className="relative mb-2">
      <div className={`mb-1 ${!isAuthenticated ? 'bg-gray-400' : 'bg-gray-700'}  rounded-md h-12 flex items-center`}>
          <Button onClick={toggleSellingMenu} className="" disabled={!isAuthenticated}>
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
            <div className=' bg-gray-500 rounded-md'>
                <MenuItem disabled={true} className="">Add to Product</MenuItem>
            </div>
          </div>
        )}
      </div>

      {/* User Menu */}
      <div className={`mb-3 ${!isAuthenticated ? 'bg-gray-400' : 'bg-gray-700'}  rounded-md h-12 flex items-center`}>
        <Link to={isAuthenticated ? "/user" : "/"}>
          <Button className="bg-gray-800 text-white mt-2" disabled={!isAuthenticated}>
            <div className='text-white'>USER</div>
          </Button>
        </Link>
      </div>
        

      {/* Login */}
      {localStorage.getItem('auth-token') ? 
      <div className='mb-1 bg-gray-700 rounded-md h-12 flex items-center'>
          <Button className="bg-gray-800 text-white mt-2" onClick={()=>{localStorage.removeItem('auth-token');navigate('/');window.location.reload('/')}}>
            <div className='text-white'>LOGOUT</div>
          </Button>
      </div>
      :
      <div className='mb-1 bg-gray-700 rounded-md h-12 flex items-center'>
        <Link to="/login">
          <Button className="bg-gray-800 text-white mt-2">
            <div className='text-white'>LOGIN</div>
          </Button>
        </Link>
      </div>
      }
      
    </div>
  );
};

export default MenuList;
