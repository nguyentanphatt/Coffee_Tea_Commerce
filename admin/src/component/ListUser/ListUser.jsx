import React, { useEffect, useState } from 'react'
import search_icon from '../../assets/search.png'

const ListUser = () => {
  const [allUser, setAllUser] = useState([])

    const getAllUser = async () => {
        await fetch ('http://localhost:4000/getalluser').then((res)=>res.json())
        .then((data) => {setAllUser(data)})
    }

    useEffect(()=>{
      getAllUser()
    },[])

    const deleteUser = async (email) => {
        await fetch('http://localhost:4000/deleteuser', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email:email})
        })
        await getAllUser()
    }
  return (
    <div className="p-6">
      <div className='flex justify-start mb-4 bg-white border border-gray-400 p-2 rounded-r-md w-80'>
        <input type="text" placeholder='Search Item' className='bg-white w-80 outline-none'/>
        <img src={search_icon} alt="" className='h-5 w-5 mt-1 cursor-pointer'/>
      </div>
      <h1 className="text-2xl font-bold mb-4">List User</h1>
      <table className="min-w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-400 p-2 text-left">No</th>
            <th className="border border-gray-400 p-2 text-left">Email</th>
            <th className="border border-gray-400 p-2 text-left">UserName</th>
            <th className="border border-gray-400 p-2 text-left">BirthDay</th>
            <th className="border border-gray-400 p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((user,index)=>{
            return(
              <tr key={index}>
                <td className="border border-gray-400 p-2">{index + 1}</td>
                <td className="border border-gray-400 p-2">{user.email}</td>
                <td className="border border-gray-400 p-2">{user.name}</td>
                <td className="border border-gray-400 p-2">{new Date(user.birthday).toLocaleDateString('en-GB')}</td>
                <td className=" p-2 flex border-b border-gray-400">
                  <button className="text-red-500" onClick={() => {deleteUser(user.email)}}>delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ListUser