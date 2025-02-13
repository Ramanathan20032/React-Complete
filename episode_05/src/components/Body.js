import RestaurantCard from "./RestauranrCard";
import resList from "../utils/mockData";

// Body Component
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          resList.map((restaurant) => ( // list of restaurants 
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
          ))
        }
      </div>
    </div>
  );
};

export default Body;