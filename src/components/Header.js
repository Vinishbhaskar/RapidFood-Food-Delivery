import logo from "../assets/logo.png"
import {MdShoppingCart} from 'react-icons/md';
import { useState } from "react";


const Header =()=> {
    // const [title, setTitle] = useState("New Food APP");
    const [isLoggedIn, setIsLoggedIn] = useState(false)

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
        {isLoggedIn ? (<button onClick={()=>setIsLoggedIn(false)}>Logout</button>)
            : (<button onClick={()=>setIsLoggedIn(true)}>Login</button> ) 
        }
    </div>
    )
}

export default Header