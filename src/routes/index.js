import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "../views/home";


const Index = () =>{
  return(
    <>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home />}/>
     </Routes>
    </>
  )
}

export default Index



