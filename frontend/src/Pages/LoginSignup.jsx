import React, { useState } from 'react'
import './Style/LoginSignup.css'
import { Checkbox, FormControlLabel, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';
const LoginSignup = () => {

    const [state, setState] = useState('LOGIN')
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    })
    const [checked, setChecked] = useState(false)
    const navigate = useNavigate()

    const handleChangeValue = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const signup = async () => {
        if(!checked){
            alert("You must agree to the term to Sign up")
            return
        }
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
            navigate('/')
            window.location.reload('/')
        }else {
            alert(response.errors)
        }    
    }

    const login = async () => {
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
            navigate('/')
            window.location.reload('/')
            
        }else {
            alert(response.errors)
        }
    }

  return (
    <div className={`loginsignup ${state === 'LOGIN' ? 'loginstyle' : 'loginsignup'}`}>
        <div className="loginsignup_container">
            <h1>{state}</h1>
            <div className="loginsignup_inputt">
                {state==='SIGN UP'?
                (<TextField
                    label="username"
                    type='username'
                    name='username'
                    fullWidth
                    value={formData.username}
                    onChange={handleChangeValue}
                    sx={{
                        marginBottom: '50px',
                        marginTop: '20px',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#5d5d5d',
                                borderWidth: '2px',
                            },
                            '&:hover fieldset': {
                                borderColor: '#3D3434',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#3D3434',
                            },
                        },
                    }}
                />)
                    : 
                <></>}
                <TextField
                    label="email"
                    type='email'
                    name='email'
                    fullWidth
                    value={formData.email}
                    onChange={handleChangeValue}
                    sx={{
                        marginBottom: '50px',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#5d5d5d',
                                borderWidth: '2px',
                            },
                            '&:hover fieldset': {
                                borderColor: '#3D3434',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#3D3434',
                            },
                        },
                    }}
                />
                <TextField
                    label="password"
                    type='password'
                    name='password'
                    fullWidth
                    value={formData.password}
                    onChange={handleChangeValue}
                    sx={{
                        marginBottom: '50px',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#5d5d5d',
                                borderWidth: '2px',
                            },
                            '&:hover fieldset': {
                                borderColor: '#3D3434',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#3D3434',
                            },
                        },
                    }}
                />
            </div>
            <div className="loginsignup_term">
                {state ==='SIGN UP' && (
                    <FormControlLabel control={<Checkbox checked={checked} onChange={(e)=>setChecked(e.target.checked)}/>} label="I agree to the term of use & private policy"/>
                )}
                
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