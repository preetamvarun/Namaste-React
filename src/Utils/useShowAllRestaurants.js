import { useState, useEffect } from 'react';

const useShowAllRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  async function getRestaurants() {
    const info = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4707019&lng=70.05773&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await info.json();
    /*
            Initially, set both filteredRestaurants and allRestaurants to all the restaurants
            that we get from the API call.
        */
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  useEffect(() => {
    // MAKE AN API CALL OVER HERE
    getRestaurants();
  }, []);

  return allRestaurants;
};

export default useShowAllRestaurants;

/*
        When our page loads well call an API and we will fill the data.
        How we do it in react applications ?
        ans) There are two ways to call an API 
        -> Loads the page -> Make an api call -> render the page
        -> Loads the page -> Show an initial page -> Make an api call -> update the page (good way)
        useEffect() is a react hook that is used to make api calls
        call back function inside the useEffect function will the called after component renders 
    */

/*
        useEffect takes two parameters. One is call back function and the other is dependency array.
        Call back function is called when the thing inside the dependency array changes.
        If the dependency array is empty then the useEffect is called only once.
    */

/*
        useState function returns us the array and it gives back two things.
        we need to destructure those two things 
    */
