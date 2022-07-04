import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import cartReducer from "./CartSlice";

const store = configureStore({
  reducer: { menu: menuReducer, cart: cartReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
