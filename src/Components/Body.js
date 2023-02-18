import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import filterRestaurants from '../Utils/filterRestaurants.js';
import UserContext from '../Utils/UserContext';
import useShowAllRestaurants from '../Utils/useShowAllRestaurants';

const Body = () => {
  if (!navigator.onLine) return <h1>You are currently offline</h1>;

  const { user, setUser } = useContext(UserContext);

  // let const example = 10 //(This is a normal way to initialize a variable in javascript)
  const [searchFood, setSearchFood] = useState();

  /* Created a custom hook that generates all the restaurants */
  const allRestaurants = useShowAllRestaurants();

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    setFilteredRestaurants(allRestaurants);
  }, [allRestaurants]);

  const handleChange = (e) => {
    setUser({
      ...user,
      name: e.target.value,
    });
  };

  const handleChange1 = (e) => {
    setUser({
      ...user,
      email: e.target.value,
    });
  };

  // return filteredRestaurants
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <input
        type='text'
        placeholder='search food'
        style={{ margin: '1rem' }}
        value={searchFood}
        onChange={(e) => setSearchFood(e.target.value)}
      />

      <input
        type='text'
        placeholder='set username context'
        value={user.name}
        onChange={handleChange}
      />

      <input
        type='email'
        placeholder='set email context'
        value={user.email}
        onChange={handleChange1}
      />

      <button
        onClick={() => {
          setFilteredRestaurants(filterRestaurants(allRestaurants, searchFood));
        }}>
        search
      </button>

      {filteredRestaurants.length === 0 ? (
        <p> No restaurants available </p>
      ) : (
        <div className='cardContainer'>
          {filteredRestaurants.map((restaurant) => (
            <Link
              to={'restaurant/' + restaurant.data.id}
              key={restaurant.data.id}
              style={{ textDecoration: 'none', color: 'black' }}>
              <RestaurantCard {...restaurant.data} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Body;
