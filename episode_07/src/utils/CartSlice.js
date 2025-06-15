import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  // * [Slice] reducers is a collection of small functions
  reducers: {
    addItems: (state, action) => {
      // * directly mutating (Modifying) the store
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    clearItem: (state) => {
      // ! RTK - Mutate the Existing State || create a new state
      state.items.length = 0;
      // return { items : [] };
    },
  },
});

// ! Initially createSlice return's a object to CartSlice as
// {
//     actions:{
//         addItems,
//         removeItem,
//         clearItem
//     },
//     reducer
// }

export const { addItems, removeItem, clearItem } = CartSlice.actions;

export default CartSlice.reducer;
