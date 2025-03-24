import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homee from "./components/Home/Homee";
import RedeemLunch from "./components/Lunch/redeemlunch";

export default function App() {
  return (
  
    <BrowserRouter>
    <div>
    <RedeemLunch/>
  </div>
    //   <Routes>
    //     {/* Redirect from '/' to '/home' */}
    //     
    //     <Route path="/home" element={<Homee />} />
    //     <Route path="/redeem" element={<RedeemLunch />} />
    //   </Routes>
    </BrowserRouter>
  );
}
