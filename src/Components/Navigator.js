import './Navigator.css';
import { useState } from "react";
import { Link } from "react-router-dom";

// creating a navigator component 

/*
    Our navigator component has two things 
    -> An image on the left side 
    -> Navigation menu on the right side
*/

const Navigator = () => {
    const [IsLoggedIn,setIsLoggedIn] = useState(true);
    { /* You can only write javascript expressions not statments inside curly braces */}
    return(
        <div className="navDiv">
            <img src={require("./foodvilla.png")} alt = "Food Villa"/>
            <div>
                <ul>
                    <li><Link to = "/">Home</Link></li>
                    {/* Below when we use anchor tags the problem is It reloads the page.
                    As react used to build single page applications we need to do client side routing (It will not make any network calls).
                    It basically doesn't reload the page. So, for that we use Link Tag which is provided
                    by react-dom-router */}
                    {/* <li><a href="/about">About</a></li> */}
                    <li><Link to = "/about">About</Link></li>
                    <li><Link to= "/contact">Contact Us</Link></li>
                    <li><Link to = "/cart">Cart</Link></li>
                    <li><Link to = "/instamart">Instamart</Link></li>
                </ul>
            </div>
            {IsLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button> : 
            <button onClick={() => setIsLoggedIn(true)}>Login</button>}
        </div>
    )
}

export default Navigator;