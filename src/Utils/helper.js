/*
    Usable, reable, testable, maintanable
*/

const filterRestaurants = (restaurants,searchFood) => {
    const filteredData = restaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase()?.includes(searchFood.toLowerCase()));
    return filteredData;
}

export default filterRestaurants;