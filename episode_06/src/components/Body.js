import RestaurantCard from "./RestauranrCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

// Body Component
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    console.log("useEffect Called");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      if (!response.ok) {
        throw new error(`HTTP Error Status : ${response.status}`);
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
    } catch (error) {
      console.log("Error Fetching Data : ", error);
    }
  };

  // Conditional Rendering (?:) Shimmer UI 
  return listOfRestaurants.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredRestaurant = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredRestaurant);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* list of restaurants */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
