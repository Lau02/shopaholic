import React from 'react'
 import { Link } from "react-router-dom";
import WishList from '../../components/WishList/WishList'
import Finances from '../Finances/Finances'
import './AdminPanel.scss'
//import Test from '../../components/Calendar/Calendar'

export default function AdminPanel(props) {

    return (
        <div>   
                <div id="home">
                <Link  className="back-home"to="/">Back Home</Link>
               
                <div className="wishlist col-6">
                <WishList></WishList>
                </div>
                <div className="col-6">
                {/* <Finances  {...props}></Finances> */}
                <Finances sumAllSavings={(savings) => props.sumAllSavings(savings)} {...props}></Finances>
                </div>
                {/* <Test></Test> */}
                {/* <img src="https://www.google.com/search?q=chetos&rlz=1C5CHFA_enES866ES866&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiX0LjWjoboAhWPGBQKHcQsBLEQ_AUoAXoECBQQAw&biw=1440&bih=789#imgrc=NHVKuvofCnOPoM" alt=""/>    */}
            </div>
        </div>
    )
}


