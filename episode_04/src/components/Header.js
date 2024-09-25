import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src= {LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="cart">
        <i className="fa fa-shopping-cart" style={{ fontSize: "24px" }}></i>
      </div>
    </div>
  );
};

export default Header;