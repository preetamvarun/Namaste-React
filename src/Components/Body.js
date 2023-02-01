import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import filterRestaurants from "../Utils/filterRestaurants.js";

import useShowAllRestaurants from "../Utils/useShowAllRestaurants";

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

const Body = () => {

    if(!navigator.onLine) return <h1>You are currently offline</h1>

    // let const example = 10 //(This is a normal way to initialize a variable in javascript)
    const [searchFood, setSearchFood] = useState();


    /* Created a custom hook that generates all the restaurants */
    const allRestaurants = useShowAllRestaurants();

    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        setFilteredRestaurants(allRestaurants);
    }, [allRestaurants]);


    // return filteredRestaurants    
    return allRestaurants.length === 0 ? <Shimmer/> : (
        <>
            <input 
                type= "text" 
                placeholder="search food" 
                style={{margin : '1rem'}}
                value = {searchFood}
                onChange = {(e) => setSearchFood(e.target.value)}
            />

            <button onClick={() => {
                /*
                    when the user searches for some food you need to check it from allRestaurants
                */
                setFilteredRestaurants(filterRestaurants(allRestaurants,searchFood));  
            }}>search</button>

            {
                filteredRestaurants.length === 0 ? <p> No restaurants available </p> : 
                <div className="cardContainer">
                    {
                        filteredRestaurants.map((restaurant) => 
                        <Link to = {"restaurant/" + restaurant.data.id} key = {restaurant.data.id} style = {{textDecoration : 'none', color : 'black'}}>
                            <RestaurantCard {...restaurant.data}/>
                        </Link>
                        )
                    }
                </div>
            }
        </>
    )
}

export default Body;