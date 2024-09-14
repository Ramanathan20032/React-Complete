import React from "react";
import ReactDOM from "react-dom/client";

// const Heading = () => <h1 id="heading">Hello World !</h1>;

/**
 *
 * Header
 *   - logo
 *   - nav items
 *      - home
 *      - about
 *      - service
 * Body
 *   - serach
 *   - RestaurentContainer
 *      - RestaurentCards
 * Footer
 *   - links
 *   - Address
 *   - Contact
 *
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://imgs.search.brave.com/D8mQqCB1dEuYreOVddhdD0-uSrAGLBEcl-MZWPe8LhA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2Rlc2lnbi5u/ZXQvbG9nby9zbW9r/aW5nLWJ1cmdlci13/aXRoLWxldHR1Y2Ut/MzYyNGxkLnBuZz9u/d209MSZud3M9MSZp/bmR1c3RyeT1mb29k/JnNmPSZ0eHRfa2V5/d29yZD1BbGw"
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
    </div>
  );
};

const Body = () => {
  return(
    <div className="body">
      
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
