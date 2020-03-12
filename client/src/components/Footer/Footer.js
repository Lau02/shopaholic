import React from 'react'
import './Footer.scss'

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="share">
              
                <a className="whatsapp" href="whatsapp://send?text=shopaholics.herokuapp.com" data-action="share/whatsapp/share"> <img src="/images/whatsapp-icone.png"  alt=""></img> </a>
            </div>
            <div className="copyright">
                <h6>© Shopaholics & co</h6>
            </div>
            <div>
                Contact
            </div>

        </footer>   
    )
}
