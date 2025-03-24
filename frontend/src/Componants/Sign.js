import React from 'react'
import "../Styles/SignIn.css"

function Sign() {
  return (
    <div className='sign mx-auto'> 
    <div className='sign-head'>Signin to your PopX account</div>
    <div className='sub-heading mt-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>

    <label className='label'>Email Address <span className='text-danger'>*</span></label>
  <div className='input-section'>
   
    <input type="text" class="form-control" placeholder="Enter email Address" aria-label="First name"/>
  </div> 
  <label className='label'>Password <span className='text-danger'>*</span></label>
  <div className='input-section'>
   
    <input type="text" class="form-control" placeholder="Enter password" aria-label="First name"/>
  </div>
 

 <button className='login-button btn mt-3'> Login</button>
  
    </div>
  )
}

export default Sign
