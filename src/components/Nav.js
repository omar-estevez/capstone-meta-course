import './../styles/Nav.scss'
import imageLogo from '../icons_assets/Logo.svg';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <>
            <nav className='nav'>
                <div className='image'>
                    <img src={imageLogo} alt="Little Lemon Logo" />
                </div>
                <div className='menu'>
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
            </nav>
        </>
    )
}

export default Nav;