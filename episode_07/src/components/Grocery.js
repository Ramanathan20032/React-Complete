import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Grocery = () => {
  const {loggedInUser} = useContext(UserContext)
  return (
    <>
      <p>User: {loggedInUser}</p>
      <h2>Our Grocery Online Store, and we have a lot of child components inside this webpage</h2>
    </>
  );
};

export default Grocery;
