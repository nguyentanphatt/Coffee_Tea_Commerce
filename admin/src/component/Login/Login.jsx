import React from 'react'
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const navigate = useNavigate()

    const handleChangeValue = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const adminLogin = async(e) => {
        e.preventDefault()
        console.log("Login", formData);
        let response;
        await fetch('http://localhost:4000/adminlogin',{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(res => res.json()).then(data=>response=data)
        if(response.success){
            localStorage.setItem('auth-token',response.token)
            navigate('/')
            window.location.reload('/')
        }else {
            alert(response.errors)
        }
    }

  return (
    <div className='flex justify-center items-center mt-32'>
        <div className='bg-white p-8 rounded-lg shadow-lg w-2/6 border border-gray-300'>
            <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
            <form onSubmit={adminLogin} className='space-y-4'>
                <TextField 
                    label="Email"
                    type='Email'
                    //variant='outlined'
                    fullWidth
                    name='email'
                    value={formData.email}
                    onChange={handleChangeValue}
                />
                <TextField 
                    label="Password"
                    type='password'
                    //variant='outlined'
                    fullWidth
                    name='password'
                    value={formData.password}
                    onChange={handleChangeValue}
                />
                <button className='bg-gray-700 text-white w-full h-10 rounded-lg cursor-pointer'
                    //onClick={()=>{adminLogin()}}
                    type='submit'
                >
                    Continue
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login