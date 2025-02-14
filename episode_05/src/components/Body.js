import RestaurantCard from "./RestauranrCard";
import resList from "../utils/mockData";
import { useState } from "react";

// Body Component
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredRestaurant = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredRestaurant)
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
