import { useEffect, useState } from "react";

const useRestaurant = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    try {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
      if (!response.ok) {
        throw new Error(`HTTP Error Status : ${response.status}`);
      }
      const jsonData = await response.json();
      console.log("API Response : ", jsonData);

      // updating the state variable.
      // setListOfRestaurants(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      // Optional chaining (?.)
      setListOfRestaurants(
        jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log("Error Fetching Data : ", error);
    }
  };
	return [listOfRestaurants, filteredRestaurant, setFilteredRestaurant];
};

export default useRestaurant;
