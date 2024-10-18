import React from 'react'
import MenuList from '../component/MenuList/MenuList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListProduct from '../component/ListProduct/ListProduct';
import AddProduct from '../component/AddProduct/AddProduct';
import UpdateProduct from '../component/UpdateProduct/UpdateProduct';
import Login from '../component/Login/Login';
import ListSelling from '../component/ListSelling/ListSelling';
import ApplySellingToProduct from '../component/ApplySellingToProduct/ApplySellingToProduct';
import ListUser from '../component/ListUser/ListUser';
const Admin = () => {
  return (
      <div className="flex h-screen">
        <MenuList />
        <div className="flex-grow p-4 bg-gray-100">
          <Routes>
            <Route path="/all-product" element={<ListProduct />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/update-product" element={<UpdateProduct />} />
            <Route path="/all-selling" element={<ListSelling />} />
            <Route path="/add-to-product" element={<ApplySellingToProduct />} />
            <Route path="/user" element={<ListUser />} />
            <Route path="/login" element={<Login />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
  )
}

export default Admin