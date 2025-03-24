import React from 'react'
import "../Styles/Account.css"
import { useNavigate } from 'react-router-dom'
export default function Account() {
    const navigate=useNavigate() 
    const handleProfile=()=>{
        navigate("/Profile")

    }
  return (
    <>
    <div className='  mx-auto main-form-section'>
      <h1> Create your PopX Account</h1> 
      <form> 
      <div class="">
  <div >
    <label className='label'>Full Name<span className='text-danger'>*</span></label>
    <input type="text" class="form-control" placeholder="Marry Doe" aria-label="First name" required/>
  </div>
  <div class="">
  <label className='label'>Phone Number<span className='text-danger'>*</span></label>
    <input type="Number" class="form-control" placeholder="Marry Doe" aria-label="Last name" required/>
  </div> 
  <div class="">
  <label className='label'>Email Address<span className='text-danger'>*</span></label>
    <input type="email" class="form-control" placeholder="Marry Doe" aria-label="Last name" required/>
  </div>
  <div class="">
  <label className='label'>Password<span className='text-danger'>*</span></label>
    <input type="text" class="form-control" placeholder="Marry Doe" aria-label="Last name" required/>
  </div>
  <div class="">
  <label className='label'>Company Name <span className='text-danger'>*</span></label>
    <input type="text" class="form-control" placeholder="Marry Doe" aria-label="Last name" required/>
  </div>
</div>
      </form>
      <label className="form-check-label ms-3 mt-2" for="flexRadioDefault1">
    Are you an Agency
  </label>
  <div className='d-flex justify-content-start ms-3'>
      <div class="form-check">
      <label class="form-check-label" for="flexRadioDefault1">
    Yes
  </label>
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
 
</div>
<div class="form-check ms-3">
      <label class="form-check-label" for="flexRadioDefault1">
    No
  </label>
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
 
</div> 
</div>
<button className='btn mx-auto text-light  account-create' onClick={handleProfile} >Create an Account</button>

    </div>
    </>
  )
}
