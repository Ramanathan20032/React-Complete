import React from "react";
import ReactDOM from "react-dom/client";

const logo_image = <svg xmlns="http://www.w3.org/2000/svg" width="70" height="50" fill="none" viewBox="0 0 176 40"><path fill="#283841" fill-rule="evenodd" d="M15 28a5 5 0 0 1-5-5V0H0v23c0 8.284 6.716 15 15 15h11V28H15ZM45 10a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-19 9C26 8.507 34.507 0 45 0s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM153 10a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Zm-19 9c0-10.493 8.507-19 19-19s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM85 0C74.507 0 66 8.507 66 19s8.507 19 19 19h28c1.969 0 3.868-.3 5.654-.856L124 40l5.768-10.804A19.007 19.007 0 0 0 132 20.261V19c0-10.493-8.507-19-19-19H85Zm37 19a9 9 0 0 0-9-9H85a9 9 0 1 0 0 18h28a9 9 0 0 0 9-8.93V19Z" clip-rule="evenodd"></path><path fill="#283841" d="M176 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path></svg> 
const user_icon_image = <img src = "https://img.icons8.com/?size=100&id=77883&format=png&color=000000" alt="user-icon" className="user-image"/>

const Header = () => (
  <div className="header">
    {/* Logo */}
    <div className="logo">
      {logo_image}
    </div>

    {/* Search Bar */}
    <div className="search-bar">
      <input type="text" placeholder="search..." />
    </div>

    {/* User Icon */}
    <div className="user-icon">
      {user_icon_image}
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Header/>);