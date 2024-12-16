import { CON_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <>
      <div className="res-cards" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src={CON_URL + resData.info.cloudinaryImageId}
        />
          // section 1
        <div className="name-cuisines">
          <h3>{name}</h3>
          <h5>{cuisines.join(", ")}</h5>
        </div>
          // section 2
        <div className="cost-buy">
          <h4>{costForTwo}</h4>
          <button className="btn">Buy</button>
        </div>
          // section 3
        <div className="rating-eta">
          <h4>{avgRating} stars</h4>
          <h4>{deliveryTime} Min</h4>
        </div>
      </div>
    </>
  );
};
export default RestaurentCard;
