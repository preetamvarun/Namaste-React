import React from "react";
import ReactDOM from "react-dom/client";
import './Navigator.css';
import './RestaurantCard.css';

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

// Creating content in the body 

/*
    Body has some restaurant cards 
        restaurant card contains
            - Image 
            - Food Name
            - Restaurant Name
            - Ratings
*/

const RestaurantCard = () => {
    return (
        <div className="RestaurantCard">
            <img style={{height : '150px', width : '250px'}}
            src= 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg'/>
            <h2>Burger King</h2>
            <h2>Burgers, American</h2>
            <h2>4.2 STARS</h2>
        </div>
    )
}

const Body = () => {
    return (
        <div>
            <RestaurantCard/>
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