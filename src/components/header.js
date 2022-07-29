import React from "react";
import logo from "../assets/img/logo.png";
import "./header.css";
const Header = () =>{
  return(
    <>
    <div className="logo-container">
      <div className="home1-container">
        <div>
          <img src={logo} />
        </div>

        {/* <div id="google_translate_element"></div> */}

        <div className="nav-nav">
          <h1 style={{ height: "120px", marginLeft:"4rem" }}>XYZ Company</h1>
          <div className="nav-container">
            <a href="home">Home</a>
            <a href="SignUp">SignUp</a>
            <a href="SignIn">SignIn</a>
            <a href="AboutUs">About Us</a>

            
          </div>
          
        </div>
        <hr></hr>
      </div>
    </div>
  </>
  )
}

export default Header