import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

/*
    Body has some restaurant cards 
        restaurant card contains
            - Image 
            - Food Name
            - Restaurant Name
            - Ratings
*/

const Body = () => {
    return (
        <div className="cardContainer">
            {
                restaurantList.map((restaurant) => <RestaurantCard {...restaurant.data} key = {restaurant.data.id}/>)
            }
        </div>
    )
}

export default Body;