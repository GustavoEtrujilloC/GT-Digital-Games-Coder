import { createContext, useEffect, useState, useContext } from "react";
import { notifications } from "@mantine/notifications";
import { PriceContext } from "./PriceContext";
import { AccountContext } from "./AccountContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(savedCart);
  const { precioSeleccionado } = useContext(PriceContext);
  const { account } = useContext(AccountContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((buy) => {
        if (buy.id === item.id) {
          return {
            ...buy,
            quantity: buy.quantity + quantity,
          };
        } else {
          return buy;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, quantity, account, precioSeleccionado }]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItem = (itemId) => {
    const removedItem = cart.find((buy) => buy.id === itemId);
    const updatedCart = cart.filter((buy) => buy.id !== itemId);
    setCart(updatedCart);
    notifications.show({
      title: "Carrito",
      autoClose: 5000,
      style: { fontWeight: "bold", color: "black" },
      color: "red",
      message: `Eliminaste ${removedItem.titulo} del carrito`,
    });
  };

  const isInCart = (itemId) => {
    return cart.some((buy) => buy.id === itemId);
  };

  const cartQuantity = () => {
    return cart.reduce((acc, buy) => acc + buy.quantity, 0);
  };

  const totalBuy = () => {
    return parseFloat(
      cart
        .reduce((acc, buy) => acc + buy.precioSeleccionado * buy.quantity, 0)
        .toFixed(2)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        savedCart,
        setCart,
        addItem,
        clearCart,
        removeItem,
        isInCart,
        cartQuantity,
        totalBuy,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
