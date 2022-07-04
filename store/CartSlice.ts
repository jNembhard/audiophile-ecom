import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";
import CartItem from "../interfaces/CartItem";
import { loadCart } from "../utils/localStorage";

export type CartSlice = {
  items: CartItem[];
  totalQuantity: number;
};

const initialCartState: CartSlice = { items: [], totalQuantity: 0 };

const persistedCart = loadCart();
const cartSlice = createSlice({
  name: "cart",
  initialState: persistedCart ? persistedCart : initialCartState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const addedItem = action.payload;
      const existingItem = state.items.find((item) => item.id === addedItem.id);
      state.totalQuantity += addedItem.quantity;
      if (!existingItem) {
        state.items.push(addedItem);
      } else {
        existingItem.quantity += addedItem.quantity;
      }
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      state.totalQuantity++;
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      state.totalQuantity--;
      state.items = state.items
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    },
    clearCart: () => {
      return initialCartState;
    },
  },
});

export const cartItems = (state: RootState): CartItem[] => state.cart.items;
