import React from 'react'
import "../Styles/Welcome.css"
import { useNavigate } from 'react-router-dom'
export default function Welcome() { 
    const navigate= useNavigate() 
    const register=()=>{
        navigate("/Register")
    }
    const login=()=>{
        navigate("/Signin")
    }

  return (
    <div className='welcome-page mx-auto'>
       

<div className='content'> 
     <h3 className='fw-bold new'>Welcome to PopX</h3> 
    <span className=' text'>Lorem ipsum dolor sit amet, Consectutor audipiscing elit,</span>
    <button className='btn button-create  text-light' onClick={register}> Create Account</button>
    <button className='btn button-reg mt-1' onClick={login}> Already registered? Login</button>

</div> 


    </div>
  )
}
