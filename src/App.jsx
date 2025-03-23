import React from 'react'
import Createaccount from './components/Create-Account/createaccount'
import Signup from './components/Create-Account/signup'
import Givefreelunch from './components/Lunch/givefreelunch'
import Notification from './components/Notification/Notification'

import Profile from './components/Profile/Profile'
import Auth from './components/Create-Account/Auth'
import Home02 from './components/Home/Home02'
import Homee from './components/Home/Homee'
import Lunch from './components/Lunch/Lunch'

export default function App() {
  return (

    <div className=''>
    
    <Notification />
    

      <Profile/>
      <Auth/>
      <Home02/>
      <Homee />
      <Lunch />
    
    </div>

  )
}
