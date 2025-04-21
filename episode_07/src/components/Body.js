import RestaurantCard from "./RestauranrCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurant from "../utils/useRestaurant";

// Body Component
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, filteredRestaurant, setFilteredRestaurant] = useRestaurant();
  console.log("Component Rendered");

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h2>Look like u'r offline!! Please check your internet Connection</h2>
    );
  }

  // Conditional Rendering (?:) Shimmer UI
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-filter">
        <div className="search">
          <input
            type="text"
            className="search-bar"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              // console.log(searchText)
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="res-container">
        {/* list of restaurants */}
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
