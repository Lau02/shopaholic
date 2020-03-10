import React from 'react'
import './Footer.scss'

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="share">
                <h4>Share</h4>
                <a className="whatsapp" href="whatsapp://send?text=texto que quieras compartir" data-action="share/whatsapp/share"> <img src="/images/whatsapp-icone.png"  alt=""></img> </a>
            </div>
            <div className="copyright">
                <h5>© Shopaholics & co</h5>
            </div>
            <div>
                Contact
            </div>

        </footer>   
    )
}
