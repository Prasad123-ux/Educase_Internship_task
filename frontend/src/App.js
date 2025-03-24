import React from 'react'
import Welcome from './Componants/Welcome'
import Profile from './Componants/Profile'
import Sign from './Componants/Sign'
import Account from './Componants/Account'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/Signin' element={<Sign/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Register' element={<Account/>}/>
        </Routes>
      </Router>
      
      
      
    </div>
  )
}

export default App
