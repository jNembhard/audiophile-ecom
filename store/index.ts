import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import cartReducer from "./CartSlice";

const store = configureStore({
  reducer: { cart: cartReducer, menu: menuReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
