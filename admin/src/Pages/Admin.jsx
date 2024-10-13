import React from 'react'
import MenuList from '../component/MenuList/MenuList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListProduct from '../component/ListProduct/ListProduct';
import AddProduct from '../component/AddProduct/AddProduct';
import UpdateProduct from '../component/UpdateProduct/UpdateProduct';
const Admin = () => {
  return (
      <div className="flex h-screen">
        <MenuList />
        <div className="flex-grow p-4 bg-gray-100">
          <Routes>
            <Route path="/all-product" element={<ListProduct />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/update-product" element={<UpdateProduct />} />
            <Route path="/all-selling" element={<ListProduct />} />
            <Route path="/add-to-product" element={<ListProduct />} />
            <Route path="/user" element={<ListProduct />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
  )
}

export default Admin