import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../Utils/config';
import Shimmer from './Shimmer';
import useShowRestaurant from '../Utils/useShowRestaurant';
import { useDispatch } from 'react-redux';
import { addItem } from '../Utils/cartSlice';

const RestaurantMenu = () => {
  // This is how we read a dynamic URL
  const resId = useParams();

  const restaurant = useShowRestaurant(resId.id);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '2rem',
      }}>
      <div className='UpperMenu'>
        <p> Restaurant : {restaurant.name} </p>
        <p> Area : {restaurant.area} </p>
        <p> City : {restaurant.city} </p>
        <p> avgRating : {restaurant.avgRating} </p>
        {
          <img
            src={IMG_CDN_URL + restaurant.cloudinaryImageId}
            alt='restaurant-image'
          />
        }
      </div>
      <div className='Menu'>
        <h1>Menu</h1>
        {Object.values(restaurant.menu.items).map((item) => (
          <div key={item.id}>
            <li style={{ display: 'inline-block' }}>{item.name}</li>
            <button
              onClick={() => addFoodItem(item)}
              style={{
                border: '1px solid black',
                padding: '.25rem .75rem',
                margin: '.5rem',
                backgroundColor: 'gray',
                display: 'inline-block',
              }}>
              Add Item
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
