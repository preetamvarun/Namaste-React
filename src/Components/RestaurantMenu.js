import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    // This is how we read a dynamic URL 
    const resId = useParams();
    const [restaurant, setRestaurant] = useState({});

    async function getRestaurantInfo(){
        const resp = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId="+resId.id);
        const json = await resp.json();
        setRestaurant(json.data);
    }

    useEffect(() => {
        getRestaurantInfo();
    },[])

    return (Object.keys(restaurant).length === 0) ?  <Shimmer/> :  (
        <div style={{display : 'flex', flexDirection : 'row', justifyContent : 'space-around', marginTop : '2rem'}}>
            <div className="UpperMenu">
                <p> Restaurant : {restaurant.name} </p>
                <p> Area : {restaurant.area} </p>
                <p> City : {restaurant.city} </p>
                <p> avgRating : {restaurant.avgRating} </p>
                {
                    <img 
                    src= {IMG_CDN_URL+restaurant.cloudinaryImageId}  
                    alt = 'restaurant-image'/>
                }
            </div>
            <div className="Menu">
                <h1>Menu</h1>
                {Object.values(restaurant.menu.items).map(item => <li key = {item.id}>{item.name}</li>)}
            </div>
        </div>
    )
}

export default RestaurantMenu;