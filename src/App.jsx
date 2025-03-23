import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import React from 'react'


import React from 'react'
import RedeemLunch from './components/Lunch/redeemlunch'

export default function App() {
  return (

    <BrowserRouter>
      <div>

        <Routes>
          <Route path="/" element={<Auth />}></Route>
          <Route path="/organization" element={<Staff />}></Route>
          <Route path="/staff" element={<Staff />}></Route>
          <Route path="/signin" element={<Signup />}></Route>
          <Route path="/createaccount" element={<Createaccount />}></Route>
          <Route path="/otp" element={<Otp />}></Route>
          <Route path="/home" element={<Homee />}></Route>
          <Route path="/staff" element={<Staff />} />
          <Route path="/otp" element={<Otp />} />
        </Routes>

      </div>
    </BrowserRouter>



  )
}
