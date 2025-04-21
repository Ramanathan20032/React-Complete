import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  
  const {resId} = useParams();
  console.log(resId);

  const resInfo = useRestaurantMenu(resId)
  
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwo, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;

  const { title, itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu-container">
      <h2>{name}</h2>
      <p>
        {cuisines.join(", ")} - {"Cost For Two : " + costForTwo / 100}
      </p>
      <h4>Menu - {title}</h4>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item?.card?.info?.id}>
              <p className="menu-title">
                {item?.card?.info?.name} - {"Rs."}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </p>
              <h5>Description - {item?.card?.info?.description}</h5>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
