import restaurantImage from '../icons_assets/restaurant.jpg'

const Footer = () => {
    return (
        <>
            <footer>
                <img src={restaurantImage} alt="footer_image"/>
                <h3>Doormat Navigation</h3>
                <ul>
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
                <h3>Contact</h3>
                <ul>
                    <li>
                        <a href='#'>Adress</a>
                    </li>
                    <li>
                        <a href='#'>Phone Number</a>
                    </li>
                    <li>
                        <a href='#'>Email</a>
                    </li>
                </ul>
                <h3>Social Media</h3>
                <ul>
                    <li>
                        <a href='#'>Adress</a>
                    </li>
                    <li>
                        <a href='#'>Phone Number</a>
                    </li>
                    <li>
                        <a href='#'>Email</a>
                    </li>
                </ul>
            </footer>
        </>
    )
}

export default Footer;