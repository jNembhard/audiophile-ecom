export interface Basket {
  product: CartItem;
}

interface CartItem {
  id: number;
  shortName: string;
  cartImg: string;
  price: number;
  quantity: number;
}

export default CartItem;
