import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import search_icon from '../../assets/search.png'
const ListProduct = () => {

  const [allProduct, setAllProduct] = useState([])
  const navigate = useNavigate();

  const getAllProduct = async () => {
    await fetch ('http://localhost:4000/listproduct').then((res)=>res.json())
    .then((data) => {setAllProduct(data)})
  }

  useEffect(()=>{
    getAllProduct()
  },[])

  const deleteProduct = async (id) => {
    await fetch('http://localhost:4000/deleteproduct', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id:id})
    })
    await getAllProduct()
  }

  const updateProduct = (product) => {
    navigate('/update-product', { state: { product } });
  }

  return (
    <div className="p-6">
      <div className='flex justify-start mb-4 bg-white border border-gray-400 p-2 rounded-r-md w-80'>
        <input type="text" placeholder='Search Item' className='bg-white w-80 outline-none'/>
        <img src={search_icon} alt="" className='h-5 w-5 mt-1 cursor-pointer'/>
      </div>
      <h1 className="text-2xl font-bold mb-4">List product</h1>
      <div className="max-h-96 overflow-y-auto">
      <table className="min-w-full border-collapse border border-gray-400">
        <thead className="bg-gray-100 sticky top-0 z-10  border-gray-400">
          <tr className="bg-gray-100">
            <th className="border border-gray-400 p-2 text-left">No</th>
            <th className="border border-gray-400 p-2 text-left">Name</th>
            <th className="border border-gray-400 p-2 text-left">Quantity</th>
            <th className="border border-gray-400 p-2 text-left">Price</th>
            <th className="border border-gray-400 p-2 text-left">Category</th>
            <th className="border border-gray-400 p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {allProduct.map((product,index)=>{
            return(
              <tr key={index}>
                <td className="border border-gray-400 p-2">{product.id}</td>
                <td className="border border-gray-400 p-2">{product.name}</td>
                <td className="border border-gray-400 p-2">{product.quantity}</td>
                <td className="border border-gray-400 p-2">{product.price}</td>
                <td className="border border-gray-400 p-2">{product.category}</td>
                <td className=" p-2 flex border-b border-gray-400">
                  <button className="text-red-500" onClick={() => {deleteProduct(product.id)}}>delete,</button>
                  <button className="text-blue-500" onClick={() => {updateProduct(product)}} >update</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default ListProduct