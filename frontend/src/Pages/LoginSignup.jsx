import React, { useState } from 'react'
import './Style/LoginSignup.css'
import { Checkbox, FormControlLabel } from '@mui/material'
const LoginSignup = () => {

    const [state, setState] = useState('LOGIN')
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    })

    const handleChangeValue = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const signup = async () => {
        console.log("Login", formData);
        let response;
        await fetch('http://localhost:4000/signup',{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(res => res.json()).then((data)=>response=data)
        if(response.success){
            localStorage.setItem('auth-token',response.token)
            window.location.reload('/')
        }else {
            alert(response.errors)
        }    
    }

    const login = async () => {
        console.log("Login", formData);
        let response;
        await fetch('http://localhost:4000/login',{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(res => res.json()).then(data=>response=data)
        if(response.success){
            localStorage.setItem('auth-token',response.token)
            window.location.reload('/')
        }else {
            alert(response.errors)
        }
    }

  return (
    <div className="loginsignup">
        <div className="loginsignup_container">
            <h1>{state}</h1>
            <div className="loginsignup_input">
                {state==='SIGN UP'?<input type="text" placeholder='Username' name='username' value={formData.username} onChange={handleChangeValue}/> : <></>}
                
                <input type="text" placeholder='Email' name='email' value={formData.email} onChange={handleChangeValue}/>
                <input type="text" placeholder='Password' name='password' value={formData.password} onChange={handleChangeValue}/>
            </div>
            <div className="loginsignup_term">
                <FormControlLabel control={<Checkbox />} label="I agree to the term of use & private policy"/>
                <div className="loginsigup_createNew">
                    {state==='LOGIN'?<p>Do not have any account? Create a new one now
                    <span onClick={()=>setState('SIGN UP')}>Sign up</span></p>
                    : 
                    <p>Already have an account? Login now
                    <span onClick={()=>setState('LOGIN')}>Log in</span></p>}     
                </div>
            </div>
            <div className="loginsignup_continue">
                <button onClick={() => {state === 'LOGIN' ? login():signup()}}>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default LoginSignup