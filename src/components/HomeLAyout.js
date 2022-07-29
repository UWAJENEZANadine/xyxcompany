import React from "react";
import Header from "./header";
import Footer from "./footer";


const HomeLayout = ({children}) =>{
  return(
    <>
    <Header></Header>
    <div className="home-container">
        <div style={{minheight:"250vh"}}>
           {children}
        </div>
      <Footer></Footer>

    </div>




    
    </>
  )
}

export default HomeLayout;