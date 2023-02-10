import logo from "./logo.png"

const HeaderComponent =()=> {
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
                <li><i class="fa-solid fa-cart-shopping"></i>Cart</li>
            </ul>
        </div>
    </div>
    )
}

export default HeaderComponent