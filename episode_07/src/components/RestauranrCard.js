import { useContext } from "react";
import { CON_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

// RestaurantCard Components
const RestaurantCard = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="p-3 w-[200px] bg-gray-100 hover:bg-gray-200 hover:border rounded-lg hover:border-gray-400 transition duration-300 flex flex-col h-full min-h-[300px]">
      <img
        src={CON_URL + cloudinaryImageId}
        alt="res-img"
        className="res-img rounded-lg"
      />
      <h3 className="text-lg font-bold pt-1">{name}</h3>
      <h4>{cuisines?.join(", ") || "N/A"}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} Min</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

// ! Higher Order Component - To find the restaurant card which are veg
// ? input -> RestaurantCard  : output -> RestaurantCard with Promoted Label

export const withVegPromotedLabel = (RestauranrCard) => {
  // return a functional Component
  return (props) => {
    // functional component which return a piece of jsx
    return (
      <>
        <label className="absolute bg-green-500 text-white rounded-md text-sm px-3 py-1 m-2 ml-3 mt-3">
          Veg
        </label>
        <RestauranrCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
