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
 *        - img
 *        - name of food, star rating, name of res, cuisine
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

const RestaurentCard = (props) => {
  const{resName, cuisine} = props;   
  return (
   <>
      <div className="res-cards" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/28/43da67ca-c98f-4067-bacf-9ed9d9d290c3_5fa54377-961a-44a0-aa7f-4d005f55f297.jpg"
        />
        <h3>{resName}</h3>
        <h5>{cuisine}</h5>
        <div className="rating-eta">
          <h4>4.4 stars</h4>
          <h4>38 min</h4>
        </div>
      </div>
    </>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurentCard resName="jainika" cuisine="Tomato Rice, south indian, Asian"/>
        <RestaurentCard resName="KFC" cuisine="Burger, Fast Food"/>
        {/* <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard /> */}
      </div>
    </div>
  );
};

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
