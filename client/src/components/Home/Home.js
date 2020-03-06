import React, { Component } from 'react';
import { Link } from "react-router-dom";
import WishList from '../../components/WishList/WishList'

class Home extends Component {
  render() {
    return (
      
    <div id="home">
    <h1>To stop throwing your money, please click here:</h1>
    
      <ul>
        <li><Link to='/Signup'>Signup</Link></li>
        <li><Link to='/Login'>Login</Link></li>
      </ul>
   
      <WishList></WishList>
    
     {/* <image src="https://www.google.com/search?q=chetos&rlz=1C5CHFA_enES866ES866&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiX0LjWjoboAhWPGBQKHcQsBLEQ_AUoAXoECBQQAw&biw=1440&bih=789#imgrc=NHVKuvofCnOPoM" alt=""/>   */}


        bla bla bla    
        <h1>jjhjj</h1>    
        <h1>hjjhhj</h1> 
        <h1>hjjhhj</h1> 
      
        
  </div>
  )}
}

export default Home;