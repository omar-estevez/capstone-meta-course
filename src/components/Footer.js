import '../styles/Footer.scss';
import restaurantImage from '../icons_assets/restaurant.jpg'
import { TiSocialFacebook, TiSocialLinkedin, TiSocialGithub } from "react-icons/ti";

const Footer = () => {
    return (
        <>
            <footer className='footer-container'>
                <img src={restaurantImage} alt="footer_image" />
                <div className='column'>
                    <h3>Doormat Navigation</h3>
                    <ul className='menu'>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a href='#'>Menu</a>
                        </li>
                        <li>
                            <a href='#'>Reservations</a>
                        </li>
                        <li>
                            <a href='#'>Order Online</a>
                        </li>
                        <li>
                            <a href='#'>Login</a>
                        </li>
                    </ul>
                </div>
                <div className='column'>
                    <h3>Contact</h3>
                    <ul className='contact'>
                        <li>
                            <a href='#'>12345 Street Somewhere</a>
                        </li>
                        <li>
                            <a href='#'>+1 (999)-888-7766</a>
                        </li>
                        <li>
                            <a href='#'>LittleLemon@gmail.com</a>
                        </li>
                    </ul>
                </div>
                <div className='column'>
                    <h3>Social Media</h3>
                    <ul className='social-media'>
                        <li>
                            <TiSocialFacebook />
                        </li>
                        <li>
                            <TiSocialLinkedin />
                        </li>
                        <li>
                            <TiSocialGithub />
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer;