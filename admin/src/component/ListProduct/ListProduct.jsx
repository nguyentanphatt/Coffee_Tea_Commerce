import React, { useEffect, useState } from 'react'
import search_icon from '../../assets/search.png'
const ListProduct = () => {

  const [allProduct, setAllProduct] = useState([])

  const getAllProduct = async () => {
    await fetch ('http://localhost:4000/listproduct').then((res)=>res.json())
    .then((data) => {setAllProduct(data)})
  }

  useEffect(()=>{
    getAllProduct()
  },[])

  return (
    <div className="p-6">
      <div className='flex justify-start mb-4 bg-white border border-gray-400 p-2 rounded-r-md w-80'>
        <input type="text" placeholder='Search Item' className='bg-white w-80 outline-none'/>
        <img src={search_icon} alt="" className='h-5 w-5 mt-1 cursor-pointer'/>
      </div>
      <h1 className="text-2xl font-bold mb-4">List product</h1>
      <table className="min-w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-400 p-2 text-left">No</th>
            <th className="border border-gray-400 p-2 text-left">Name</th>
            <th className="border border-gray-400 p-2 text-left">Quantity</th>
            <th className="border border-gray-400 p-2 text-left">Price</th>
            <th className="border border-gray-400 p-2 text-left">Category</th>
            <th className="border border-gray-400 p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {allProduct.map((product,index)=>{
            return(
              <tr key={index}>
                <td className="border border-gray-400 p-2">{product.id}</td>
                <td className="border border-gray-400 p-2">{product.name}</td>
                <td className="border border-gray-400 p-2">{product.quantity}</td>
                <td className="border border-gray-400 p-2">{product.price}</td>
                <td className="border border-gray-400 p-2">{product.category}</td>
                <td className=" p-2 flex border-b border-gray-400">
                  <button className="text-red-500">delete,</button>
                  <button className="text-blue-500">update</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ListProduct