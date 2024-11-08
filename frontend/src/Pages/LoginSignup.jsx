import React, { useState } from 'react'
import './Style/LoginSignup.css'
import { Checkbox, FormControlLabel, TextField, Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
const LoginSignup = () => {

    const [state, setState] = useState('LOGIN')
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        birthday: "",
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
    <Box className={`loginsignup ${state === 'LOGIN' ? 'loginstyle' : 'loginsignup'}`}>
        <Box className="loginsignup_container">
            <Typography
                variant='h3'
                sx={{
                    mb: 5,
                    color: '#3D3434',
                    fontWeight: '700',
                    fontSize:{
                        lg: '48px',
                        md: '40px',
                        sm: '34px',
                        xs: '26px'
                    }
                }}
            >{state}</Typography>
            <Box>
                {state==='SIGN UP'?
                (<TextField
                    label="username"
                    type='username'
                    name='username'
                    fullWidth
                    value={formData.username}
                    onChange={handleChangeValue}
                    sx={{
                        marginBottom: '20px',
                        marginTop: {
                            lg: '20px',
                            md: '20px',
                            sm: '20px',
                            xs: '0'
                        },
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
                    }}/>
                )
                    : 
                <></>
                }
                {state==='SIGN UP'?
                (<TextField
                    label="birthday"
                    type='birthday'
                    name='birthday'
                    fullWidth
                    value={formData.birthday}
                    onChange={handleChangeValue}
                    sx={{
                        marginBottom: '20px',
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
                    }}/>
                )
                    : 
                <></>
                }
                <TextField
                    label="email"
                    type='email'
                    name='email'
                    fullWidth
                    value={formData.email}
                    onChange={handleChangeValue}
                    sx={{
                        marginBottom: '20px',
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
                        marginBottom: '20px',
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
            </Box>
            <Box className="loginsignup_term">
                {state ==='SIGN UP' && (
                    <FormControlLabel control={<Checkbox checked={checked} onChange={(e)=>setChecked(e.target.checked)}/>} label="I agree to the term of use & private policy"/>
                )}
                
                <Box className="loginsigup_createNew">
                    {state==='LOGIN' ?
                        <Typography variant='body1' mt={2}>Do not have any account? Create a new one now
                            <span onClick={()=>setState('SIGN UP')}>Sign up</span>
                        </Typography>
                        : 
                        <Typography variant='body1' mt={2}>Already have an account? Login now
                            <span onClick={()=>setState('LOGIN')}>Log in</span>
                        </Typography>
                    }     
                </Box>
            </Box>
            <Box className="loginsignup_continue">
                <Button
                    size='large'
                    variant='contained'
                    onClick={() => {state === 'LOGIN' ? login():signup()}}
                    sx={{
                        border: '2px solid #3d3434',
                        color: '#fff',
                        backgroundColor:'#3d3434',
                        mt: {
                            lg: 3,
                            md: 3, 
                            sm: 2,
                            xs: 1
                        },
                        width: '300px',
                        height: {
                            lg: '60px',
                            md: '60px',
                            sm: '60px',
                            xs: '40px'
                        },
                        fontWeight: '700',
                        fontSize: 18
                    }}
                >
                    Continue
                </Button>
            </Box>
        </Box>
    </Box>
  )
}

export default LoginSignup