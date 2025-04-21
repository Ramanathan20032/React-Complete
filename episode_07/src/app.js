import React, { Suspense, lazy } from "react";
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


// ! instead of loading all the component with in the single (JS) bundler 
// ! make them into smaller bundler
// ? chunking, Dynamic Bundling, lazy Loading
const Grocery = lazy(() => {
  return import("./components/Grocery");
})
const About = lazy(() => import("./components/About"))

// Root Component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
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
