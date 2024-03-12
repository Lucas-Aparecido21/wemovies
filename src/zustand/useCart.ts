import create from "zustand";

type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type CartState = {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  addItemToCart: (item: CartItem) => void;
  changeCartItemQuantity: (
    itemId: number,
    type: "increase" | "decrease"
  ) => void;
  removeCartItem: (itemId: number) => void;
  clearCart: () => void;
};

export const useCart = create<CartState>((set) => {
  // Recuperar o estado do localStorage, se existir
  const storedCartItems = localStorage.getItem("cartItems");
  const storedCartQuantity = localStorage.getItem("cartQuantity");
  const storedCartItemsTotal = localStorage.getItem("cartItemsTotal");

  const initialState = {
    cartItems: storedCartItems ? JSON.parse(storedCartItems) : [],
    cartQuantity: storedCartQuantity ? parseInt(storedCartQuantity) : 0,
    cartItemsTotal: storedCartItemsTotal ? parseFloat(storedCartItemsTotal) : 0,
  };

  return {
    ...initialState,

    addItemToCart: (item) =>
      set((state) => {
        const existingIndex = state.cartItems.findIndex(
          (cartItem) => cartItem.id === item.id
        );

        if (existingIndex === -1) {
          const updatedCartItems = [...state.cartItems, item];
          localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
          localStorage.setItem(
            "cartQuantity",
            (state.cartQuantity + item.quantity).toString()
          );
          localStorage.setItem(
            "cartItemsTotal",
            (state.cartItemsTotal + item.price * item.quantity).toString()
          );

          return {
            ...state,
            cartItems: updatedCartItems,
            cartQuantity: state.cartQuantity + item.quantity,
            cartItemsTotal: state.cartItemsTotal + item.price * item.quantity,
          };
        } else {
          const updatedCartItems = [...state.cartItems];
          updatedCartItems[existingIndex].quantity += item.quantity;

          localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
          localStorage.setItem(
            "cartQuantity",
            (state.cartQuantity + item.quantity).toString()
          );
          localStorage.setItem(
            "cartItemsTotal",
            (state.cartItemsTotal + item.price * item.quantity).toString()
          );

          return {
            ...state,
            cartItems: updatedCartItems,
            cartQuantity: state.cartQuantity + item.quantity,
            cartItemsTotal: state.cartItemsTotal + item.price * item.quantity,
          };
        }
      }),

    changeCartItemQuantity: (itemId, type) =>
      set((state) => {
        const itemIndex = state.cartItems.findIndex(
          (item) => item.id === itemId
        );
        if (itemIndex === -1) return state;
        const updatedCartItems = [...state.cartItems];
        const item = updatedCartItems[itemIndex];

        if (type === "increase") {
          item.quantity += 1;
          state.cartQuantity += 1;
          state.cartItemsTotal += item.price;
        } else if (type === "decrease" && item.quantity > 1) {
          item.quantity -= 1;
          state.cartQuantity -= 1;
          state.cartItemsTotal -= item.price;
        }

        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        localStorage.setItem("cartQuantity", state.cartQuantity.toString());
        localStorage.setItem("cartItemsTotal", state.cartItemsTotal.toString());

        return {
          ...state,
          cartItems: updatedCartItems,
          cartQuantity: state.cartQuantity,
          cartItemsTotal: state.cartItemsTotal,
        };
      }),

    removeCartItem: (itemId) =>
      set((state) => {
        const updatedCartItems = state.cartItems.filter(
          (item) => item.id !== itemId
        );
        const removedItem = state.cartItems.find((item) => item.id === itemId);

        if (!removedItem) return state;

        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        localStorage.setItem(
          "cartQuantity",
          (state.cartQuantity - removedItem.quantity).toString()
        );
        localStorage.setItem(
          "cartItemsTotal",
          (
            state.cartItemsTotal -
            removedItem.price * removedItem.quantity
          ).toString()
        );

        return {
          ...state,
          cartItems: updatedCartItems,
          cartQuantity: state.cartQuantity - removedItem.quantity,
          cartItemsTotal:
            state.cartItemsTotal - removedItem.price * removedItem.quantity,
        };
      }),

    clearCart: () => {
      localStorage.removeItem("cartItems");
      localStorage.removeItem("cartQuantity");
      localStorage.removeItem("cartItemsTotal");

      return {
        cartItems: [],
        cartQuantity: 0,
        cartItemsTotal: 0,
      };
    },
  };
});
