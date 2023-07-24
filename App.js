import React from 'react'
import ReactDOM from 'react-dom/client'
/*
        Header
            -Logo 
            -nav Items(right side)
            -cart
        Body 
            -Search bar 
            -Rest list
            - restaurant Card 
                -Image
                -Name 
                -Rating 
                -Cusines
        Footer
            -links
            -copy
*/
const root = ReactDOM.createRoot(document.getElementById("root"))

const Title = () =>{
    return (
        <a href='/'>
        <img 
        className='logo'
        src='https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg' 
        alt='logo' 
            />
        </a>
        
    )
}
const Header = () =>{
    return ( <div className='header'>
            <Title/>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Body = () =>{
    return (
        <h4>Body</h4>
    )
}
const Footer = () =>{
    return (
        <h4>Footer</h4>
    )
}

const AppLayout = () =>{
    return ( 
    <React.Fragment>
       <Header/> 
       <Body/> 
       <Footer/> 
    </React.Fragment>
    )
}




root.render(<AppLayout/>)