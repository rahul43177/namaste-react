import {useState} from 'react'

const loggedInUser = () =>  {
  //API call to check authentication 
  return true;
}


const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="Logo"
      src="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"
    />
  </a>
);

const Header = () => {

  const [isLoggedIn , setIsLoggedIn] = useState(true)
  //header component which contains - logo and nav items
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {
        isLoggedIn ? <button onClick={()=>{
          setIsLoggedIn(false)
        }} >Logout</button> : <button onClick={()=>{
          setIsLoggedIn(true) 
        }} >Login</button>
      }
      
      
    </div>
  );
};

export default Header;
