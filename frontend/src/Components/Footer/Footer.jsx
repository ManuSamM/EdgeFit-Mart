import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-content">
                <div className="contact-info">
                    <p className="helpline">Helpline Numbers:</p>
                    <p>Support: 1800 233 3330 </p>
                    <p>Emergency: 91-9820466726</p>
                </div>
                <div className="social-icons">
                    <Link to='https://www.facebook.com/' target='_blank'>  <i className="fa-brands fa-facebook fa-beat"></i></Link>
                    <Link to='https://www.twitter.com' target='_blank'>  <i className="fa-brands fa-twitter fa-beat"></i></Link>
                    <Link to='https://www.instagram.com/' target='_blank'>  <i className="fa-brands fa-instagram fa-beat"></i></Link>
                </div>
            </div>
        </footer>
    )
}
export default Footer