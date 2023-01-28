import './Navigator.css';
import { useState } from "react";

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
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </div>
            {IsLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button> : 
            <button onClick={() => setIsLoggedIn(true)}>Login</button>}
        </div>
    )
}

export default Navigator;