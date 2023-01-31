import {useParams} from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useShowRestaurant from "../Utils/useShowRestaurant";

const RestaurantMenu = () => {
    // This is how we read a dynamic URL 
    const resId = useParams();

    const restaurant = useShowRestaurant(resId.id);

    return (!restaurant) ?  <Shimmer/> :  (
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