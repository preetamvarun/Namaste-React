import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";

const RestaurantMenu = () => {
    // This is how we read a dynamic URL 
    const { resId } = useParams();
    const [restaurant, setRestaurant] = useState({});

    async function getRestaurantInfo(){
        const resp = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=642768");
        const dt = await resp.json();
        setRestaurant(dt.data);
    }

    useEffect(() => {
        getRestaurantInfo();
    },[])

    return (
        <div>
            <p> Restaurant : {restaurant.name} </p>
            <p> Area : {restaurant.area} </p>
            <p> City : {restaurant.city} </p>
            <p> avgRating : {restaurant.avgRating} </p>
            <img src= {IMG_CDN_URL + restaurant.cloudinaryImgId} alt = 'restaurant-image'/>
            <div className = "Menu">
                <h1>Menu</h1>
            </div>
        </div>
    )
}

export default RestaurantMenu;