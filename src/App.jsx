import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import React from 'react'


import RedeemLunch from './components/Lunch/redeemlunch'
import Staff from './components/Create-Account/Staff'
import Otp from './components/Create-Account/Otp'
import Createaccount from './components/Create-Account/createaccount'
import Signup from './components/Create-Account/signup'
import Givefreelunch from './components/Lunch/givefreelunch'
import Notification from './components/Notification/Notification'
import Profile from './components/Profile/Profile'
import Auth from './components/Create-Account/Auth'
import Home02 from './components/Home/Home02'
import Homee from './components/Home/Homee'
import Lunch from './components/Lunch/Lunch'
import LunchRedeemed from "./components/Lunch/lunchsuccess"

export default function App() {
  return (

    <BrowserRouter>
      <div>

        <Routes>
          <Route path="/" element={<Auth />}></Route>
          <Route path="/organization" element={<Staff />}></Route>
          <Route path="/signin" element={<Signup />}></Route>
          <Route path="/createaccount" element={<Createaccount />}></Route>
          <Route path="/otp" element={<Otp />}></Route>
          <Route path="/home" element={<Homee />}></Route>
          <Route path="/staff" element={<Staff />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/profile" element={<Profile />} />
          
          
        </Routes>

      </div>
    </BrowserRouter>



  )
}
