import RestaurantCard, { withVegPromotedLabel } from "./RestauranrCard";
import resList from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurant from "../utils/useRestaurant";
import UserContext from "../utils/UserContext";

// Body Component
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, filteredRestaurant, setFilteredRestaurant] =
    useRestaurant();
  console.log("Component Rendered");

  // * higher order component call
  const RestaurantCardVegPromoted = withVegPromotedLabel(RestaurantCard);

  // * customHook call for online status.
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h2>Look like u'r offline!! Please check your internet Connection</h2>
    );
  }

  // ! update the context on input event change
  const {loggedInUser, setUserName} = useContext(UserContext);

  // Conditional Rendering (?:) Shimmer UI
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-filter flex items-center p-5 bg-white">
        <div className="search">
          <input
            type="text"
            className="search-bar border border-gray-600 text-sm rounded-md px-2 py-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="bg-green-400 hover:bg-green-500 text-sm text-white ml-3 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300"
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
            className="filter-btn bg-orange-400 hover:bg-orange-500 text-sm text-white ml-4 px-2 py-1 rounded-lg cursor-pointer transition-all duration-300"
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
        <div className="input">
        <input
            type="text"
            className="search-bar border border-gray-600 text-sm rounded-md ml-4 px-2 py-1"
            value={loggedInUser}
            onChange={(e) => {  
              setUserName(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap p-5 gap-5">
        {/* list of restaurants */}
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {/* if restaurant is veg promoted then render vegPromoted component */}
            {restaurant.info.veg ? (
              <RestaurantCardVegPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
