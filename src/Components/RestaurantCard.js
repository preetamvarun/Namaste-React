import { IMG_CDN_URL } from "../Utils/config";
import './RestaurantCard.css';

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

export default RestaurantCard;