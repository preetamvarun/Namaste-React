import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";


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

const filterRestaurants = (restaurants,searchFood) => {
    const filteredData = restaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase()?.includes(searchFood.toLowerCase()));
    return filteredData;
}

const Body = () => {
    // let const example = 10 //(This is a normal way to initialize a variable in javascript)
    
    const [searchFood, setSearchFood] = useState();
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);

    /*
        useState function returns us the array and it gives back two things.
        we need to destructure those two things 
    */

    /*
        When our page loads well call an API and we will fill the data.
        How we do it in react applications ?
        ans) There are two ways to call an API 
        -> Loads the page -> Make an api call -> render the page
        -> Loads the page -> Show an initial page -> Make an api call -> update the page (good way)
        useEffect() is a react hook that is used to make api calls
        call back function inside the useEffect function will the called after component renders 
    */

    async function getRestaurants(){
        const info = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4707019&lng=70.05773&page_type=DESKTOP_WEB_LISTING");
        const json = await info.json();
        
        /*
            Initially, set both filteredRestaurants and allRestaurants to all the restaurants
            that we get from the API call.
        */
        setFilteredRestaurants(json?.data?.cards[0]?.data?.data?.cards);
        setAllRestaurants(json?.data?.cards[0]?.data?.data?.cards);
    }

    useEffect(() => {
        // MAKE AN API CALL OVER HERE 
        getRestaurants();
    },[])

    /*
        useEffect takes two parameters. One is call back function and the other is dependency array.
        Call back function is called when the thing inside the dependency array changes.
        If the dependency array is empty then the useEffect is called only once.
    */

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
                        filteredRestaurants.map((restaurant) => <RestaurantCard {...restaurant.data} key = {restaurant.data.id}/>)
                    }
                </div>
            }
        </>
    )
}

export default Body;