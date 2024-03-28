import './../styles/Nav.scss'
import imageLogo from '../icons_assets/Logo.svg';
import { CiMenuKebab } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const Nav = () => {

    const [isElementVisible, setIsElementVisible] = useState(false);

    const handleMenuClick = () => {
        setIsElementVisible(!isElementVisible);
    };

    const isDesktop = useMediaQuery({ minWidth: 800 });

    return (
        <>
            <nav className='nav'>
                <div className='image'>
                    <img src={imageLogo} alt="Little Lemon Logo" />
                </div>
                {!isDesktop && ( <CiMenuKebab className='mobile-menu' onClick={handleMenuClick}/>)}
                {!isDesktop && isElementVisible && ( <hr /> )}
                {!isDesktop && isElementVisible && (
                    <div className={`menu ${isElementVisible ? 'visible' : ''}`}>
                        <Link to='/'>
                            Home
                        </Link>
                        <Link>
                            About
                        </Link>
                        <Link>
                            Menu
                        </Link>
                        <Link to="/booking">
                            Reservations
                        </Link>
                        <Link>
                            Order Online
                        </Link>
                        <Link>
                            Login
                        </Link>
                    </div>
                )}
                {isDesktop && (
                    <div className={`menu ${isElementVisible ? 'visible' : ''}`}>
                        <Link to='/'>
                            Home
                        </Link>
                        <Link>
                            About
                        </Link>
                        <Link>
                            Menu
                        </Link>
                        <Link to="/booking">
                            Reservations
                        </Link>
                        <Link>
                            Order Online
                        </Link>
                        <Link>
                            Login
                        </Link>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Nav;