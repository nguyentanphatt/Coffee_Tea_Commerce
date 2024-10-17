import React, { useEffect, useState } from 'react'
//import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import search_icon from '../../assets/search.png'

const ListSelling = () => {

    const [allSelling, setAllSelling] = useState([])
    const navigate = useNavigate();

    const getAllSelling = async () => {
        await fetch ('http://localhost:4000/listselling').then((res)=>res.json())
        .then((data) => {setAllSelling(data)})
    }

    useEffect(()=>{
        getAllSelling()
    },[])

    const deleteSelling = async (id) => {
        await fetch('http://localhost:4000/deleteselling', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({id:id})
        })
        await getAllSelling()
    }

    const approveSelling = (selling) => {
        navigate('/add-to-product', { state: {selling} })
    }    
  return (
    <div className="p-6">
    <div className='flex justify-start mb-4 bg-white border border-gray-400 p-2 rounded-r-md w-80'>
      <input type="text" placeholder='Search Item' className='bg-white w-80 outline-none'/>
      <img src={search_icon} alt="" className='h-5 w-5 mt-1 cursor-pointer'/>
    </div>
    <h1 className="text-2xl font-bold mb-4">List Selling Item</h1>
    <table className="min-w-full border-collapse border border-gray-400">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-400 p-2 text-left">No</th>
          <th className="border border-gray-400 p-2 text-left">Name</th>
          <th className="border border-gray-400 p-2 text-left">Quantity</th>
          <th className="border border-gray-400 p-2 text-left">Price</th>
          <th className="border border-gray-400 p-2 text-left">Category</th>
          <th className="border border-gray-400 p-2 text-left">Sell Email</th>
          <th className="border border-gray-400 p-2 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {allSelling.map((selling,index)=>{
          return(
            <tr key={index}>
              <td className="border border-gray-400 p-2">{selling.id}</td>
              <td className="border border-gray-400 p-2">{selling.name}</td>
              <td className="border border-gray-400 p-2">{selling.quantity}</td>
              <td className="border border-gray-400 p-2">{selling.price}</td>
              <td className="border border-gray-400 p-2">{selling.category}</td>
              <td className="border border-gray-400 p-2">{selling.sellEmail}</td>
              <td className=" p-2 flex border-b border-gray-400">
                <button className="text-red-500" onClick={() => {deleteSelling(selling.id)}}>delete,</button>
                <button className="text-blue-500" onClick={() => approveSelling(selling)}>approve</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
  )
}

export default ListSelling