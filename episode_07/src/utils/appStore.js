import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";

// ! configureStore - To create a redux store using redux toolkit
// ! App reducer which contains small reducers (Slices)
// * Reducers is a collection of small reducers
const appStore = configureStore({

  // * [App] reducer is a combintion of small reducers of different slices
  reducer: {
    cart: CartReducer,
  },
});

export default appStore;
