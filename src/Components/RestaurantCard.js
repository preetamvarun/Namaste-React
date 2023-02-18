import { IMG_CDN_URL } from '../Utils/config';
import './RestaurantCard.css';
import { useContext } from 'react';
import UserContext from '../Utils/UserContext';

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, rating }) => {
  const { user } = useContext(UserContext);
  return (
    <div className='RestaurantCard'>
      <img src={IMG_CDN_URL + cloudinaryImageId} alt='burger' />
      <p>{name}</p>
      <p>{cuisines?.join(',')}</p>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{rating}STARS</p>
    </div>
  );
};

export default RestaurantCard;
