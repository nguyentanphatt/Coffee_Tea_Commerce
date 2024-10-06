import React, { useState } from 'react'
import './Style/LoginSignup.css'
import { Checkbox, FormControlLabel } from '@mui/material'
const LoginSignup = () => {

    const [state, setState] = useState('LOGIN')


  return (
    <div className="loginsignup">
        <div className="loginsignup_container">
            <h1>{state}</h1>
            <div className="loginsignup_input">
                {state==='SIGN UP'?<input type="text" placeholder='Email'/> : <></>}
                
                <input type="text" placeholder='Username'/>
                <input type="text" placeholder='Password'/>
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
                <button>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default LoginSignup