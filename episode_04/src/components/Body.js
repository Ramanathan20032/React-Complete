import RestaurentCard from "./RestuarentCards";
import restaurantList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantList.map((res) => {
          return <RestaurentCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};
export default Body;
