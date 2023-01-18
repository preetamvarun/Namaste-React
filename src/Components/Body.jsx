import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

import { useState } from "react";

/*
    In order to create a local state variable we need to use the functionality of hooks.
    Hook are just like the normal javascript functions written by the facebook developers.
    On such type of hook is useState hook. So, first we need to import this useState hook.
    This useState hook will return use two things in the form of an array
    1. Local state variable
    2. Function to update that local state variable 
*/

/*
    Body has some restaurant cards 
        restaurant card contains
            - Image 
            - Food Name
            - Restaurant Name
            - Ratings
*/

const filteredRestaurants = (restaurants,searchFood) => {
    const filteredData = restaurants.filter((restaurant) => restaurant.data.name.includes(searchFood));
    return filteredData;
}

const Body = () => {
    // let const example = 10 //(This is a normal way to initialize a variable in javascript)

    const [searchFood, setSearchFood] = useState();
    const [restaurants, setrestaurantList] = useState(restaurantList);
    /*
        useState function returns us the array and it gives back two things.
        we need to destructure those two things 
    */

    return (
        <>
        <input 
            type= "text" 
            placeholder="search food" 
            style={{margin : '1rem'}}
            value = {searchFood}
            onChange = {(e) => setSearchFood(e.target.value)}
        />
        <button onClick={() => {
            setrestaurantList(filteredRestaurants(restaurantList,searchFood));
        }}>search</button>
        <div className="cardContainer">
            {
                restaurants.map((restaurant) => <RestaurantCard {...restaurant.data} key = {restaurant.data.id}/>)
            }
        </div>
        </>
    )
}

export default Body;