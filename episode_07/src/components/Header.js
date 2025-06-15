import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

// ! from react-redux : to read the data from the store
import { useSelector } from "react-redux";

// Header Component
const Header = () => {
  const [btnName, setBtnName] = useState("log in");
  const onlineStatus = useOnlineStatus();

  // ! useContext
  // ? useContext is used to access the data from the context object.
  const { loggedInUser } = useContext(UserContext);

  // ! subscribing to the redux store
  const cartItems = useSelector((store) => store.cart.items);
  // console.log("Cart Items : " + { cartItems });

  return (
    <div className="flex justify-between items-center py-3 px-6 bg-purple-100 shadow-lg sticky top-0 z-50">
      <div className="logoContainer">
        <Link to="/" className="logo">
          TastyGo
        </Link>
      </div>
      <div className="nav-items">
        <ul className="flex">
          <li className="px-3">Online status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About</Link>
          </li>
          <li className="px-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-3">
            <Link to="/cart">Cart ({cartItems.length}-items)</Link>
          </li>
          <li className="pl-3">
            <button
              className="bg-red-400 hover:bg-red-500 text-sm text-white px-4 pb-1 rounded-md cursor-pointer transition-all duration-300"
              onClick={() => {
                btnName === "log in"
                  ? setBtnName("log out")
                  : setBtnName("log in");
              }}
            >
              <>
                {btnName} <br /> {loggedInUser}
              </>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
