import React from "react";
import ReactDOM from "react-dom/client";
import './Navigator.css';
import './RestaurantCard.css';

import { IMG_CDN_URL } from "./src/config";

import { restaurantList } from "./src/config";

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


const RestaurantCard = ({cloudinaryImageId,name,cuisines,rating}) => {
    return (
        <div className="RestaurantCard">
            <img src= {IMG_CDN_URL + cloudinaryImageId} alt = 'burger'/>
            <p>{name}</p>
            <p>{cuisines.join(",")}</p>
            <p>{rating}STARS</p>
        </div>
    )
}

const Body = () => {
    return (
        <div className="cardContainer">
            {
                restaurantList.map((restaurant) => <RestaurantCard {...restaurant.data}/>)
            }
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