import logo from "../assets/logo.png"
import {MdShoppingCart} from 'react-icons/md';


const Header =()=> {
    return (
    <div className="header">
        <a href="/">
            <img className="logo" alt="logo" src={logo}/>
        </a>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li> <MdShoppingCart/> Cart</li>
            </ul>
        </div>
    </div>
    )
}

export default Header