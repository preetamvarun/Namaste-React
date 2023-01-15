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
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Cart</a></li>
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