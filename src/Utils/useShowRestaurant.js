import {useState, useEffect} from "react";

const useShowRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);

    async function getRestaurantInfo(){
        const resp = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId="+resId);
        const json = await resp.json();
        setRestaurant(json.data);
    }

    useEffect(() => {
        getRestaurantInfo();
    },[])

    return restaurant;

}

export default useShowRestaurant;