import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import cartReducer from "./CartSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    cartReducer,
    menu: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
