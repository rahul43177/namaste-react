import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from './components/Body.js'
import Footer from './components/Footer.js';


const root = ReactDOM.createRoot(document.getElementById("root"));



// const burgerKing = {
//     name : "Burger King" ,
//     image : 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yzpwhtsc7dkznujwlqer' ,
//     cusines : ["Burgers" , "American"] ,
//     rating : "4.2"
// }





const AppLayout = () => {
  return (
    <>
      {/*
                *Header
                    -Logo
                    -Nav Items

                *Body
                    -Search bar
                    -Food Items
                      -Image 
                      -Name 
                      -Rating 
                    
                *Footer
                    -Links 
                    -copyrights  
                
      */}
      
      <Header />
      <Body />
      <Footer />
    </> //This is React.Fragment
  );
};

root.render(<AppLayout />);
