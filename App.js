import React from "react";
import ReactDOM from "react-dom/client";
import './Navigator.css';


const Body = () => <h2>This is the body</h2>
const Footer = () => <h3>Footer</h3>

// creating a navigator component 

/*
    Our navigator component has two things 
    -> An image on the left side 
    -> Navigation menu on the right side
*/

const Navigator = () => {
    return(
        <div className="navDiv">
            <img src={require("./foodvilla.png")} alt = "Food Villa"/>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Applayout = () => {
    return (
        <React.Fragment>
            <Navigator/>
            <Body/>
            <Footer/>
        </React.Fragment>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout/>);