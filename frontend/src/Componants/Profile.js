import React from 'react'
import "../Styles/Profile.css" 
// import file from "../Componants/Assets/file.zip"

function Profile() {
  return (
    <div className='profile mx-auto'> 
    <div className='heading  p-4'> Account Settings</div> 
    <div className='d-flex justify-content-start mt-5 ps-2'>
    <img className='side-img' alt="img" src="/"/>
    <div className=' ms-3 d-flex justify-content-around flex-column'>
        <span className='fw-bold'>Marry Doe</span> 
        <span>Marry@Gmail.com</span>
    </div>
    </div>
    <p className='para mx-auto'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus natus, nam doloremque sequi exercitationem nulla qui harum repellendus omnis veritatis corporis! Minus vitae repellat quibusdam accusantium est necessitatibus fuga possimus?</p>
     
    </div>
  )
}

export default Profile
