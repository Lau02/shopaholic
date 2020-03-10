import React from 'react'
// import { Link } from "react-router-dom";
import WishList from '../../components/WishList/WishList'
import Finances from '../Finances/Finances'
import './AdminPanel.scss'

export default function AdminPanel() {
    return (
        <div>   
                <div id="home">
                {/* <Link to="/auth/slack">Login With Slack</Link> */}
                <div className="wishlist">
                <WishList></WishList>
                </div>
                <div>
                <Finances></Finances>
                </div>
                
                <img src="https://www.google.com/search?q=chetos&rlz=1C5CHFA_enES866ES866&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiX0LjWjoboAhWPGBQKHcQsBLEQ_AUoAXoECBQQAw&biw=1440&bih=789#imgrc=NHVKuvofCnOPoM" alt=""/>   
            </div>
        </div>
    )
}


