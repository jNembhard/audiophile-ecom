import { useDisclosure } from "@chakra-ui/react";
import { createContext, useContext, useEffect } from "react";

type ContextProps = {
  isCartModalOpen: boolean;
  isCheckoutModalOpen: boolean;
  onCartModalOpen: () => void;
  onCartModalClose: () => void;
  onCheckoutModalOpen: () => void;
  onCheckoutModalClose: () => void;
};

const initialState = {
  isCartModalOpen: false,
  isCheckoutModalOpen: false,
  onCartModalOpen: () => undefined,
  onCartModalClose: () => undefined,
  onCheckoutModalOpen: () => undefined,
  onCheckoutModalClose: () => undefined,
};

const CartContext = createContext<ContextProps>(initialState);

export const useCartModal = (): ContextProps => {
  return useContext(CartContext);
};

const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const {
    isOpen: isCartModalOpen,
    onOpen: onCartModalOpen,
    onClose: onCartModalClose,
  } = useDisclosure();

  const {
    isOpen: isCheckoutModalOpen,
    onOpen: onCheckoutModalOpen,
    onClose: onCheckoutModalClose,
  } = useDisclosure();

  useEffect(() => {
    isCartModalOpen || isCheckoutModalOpen
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "initial");
  }, [isCartModalOpen, isCheckoutModalOpen]);

  return (
    <CartContext.Provider
      value={{
        isCartModalOpen,
        isCheckoutModalOpen,
        onCartModalOpen,
        onCartModalClose,
        onCheckoutModalOpen,
        onCheckoutModalClose,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
