import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// ! instead of loading all the component with in the single bundler 
// ! make then into smaller bundler
// import About from "./components/About";
// import Grocery from "./components/Grocery";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";


// ! instead of loading all the component with in the single (JS) bundler 
// ! make them into smaller bundler
// ? chunking, Dynamic Bundling, lazy Loading
const Grocery = lazy(() => {
  return import("./components/Grocery");
})
const About = lazy(() => import("./components/About"))


// Root Component
const AppLayout = () => {

  // ! Modifying the UserContext
  // ? Modifying the UserContext to store the data in the context object.
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    // ? make a api call to get the user name
    const data = {
      name : "Ram"
    }
    setUserName(data.name);
  }, []);

  return (
    // initially will have the default value
    // by modifying the context name with UserContext.Provider(context value)
    // ! can also pass the set function to the context value.
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
      {/* ! context value will be the "Ram" */}
      <div className="app">
        <UserContext.Provider value={{loggedInUser: "Bradman"}}>
          {/* ! context value will be the "Bradman" */}
          <Header />
        </UserContext.Provider>
        <Outlet/>
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h2>Loading About...</h2>}>
            <About/>
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h2>Loading Grocery...</h2>}>
            <Grocery/>
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        // the path gonna recieve a dynamic id 
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
