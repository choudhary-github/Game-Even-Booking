import React, { createContext, useState } from "react";
import { Games } from "../components/Games";

export const GameContext = createContext(null);

const defaultCart = () => {
  let cart = {};
  for (let i = 1; i <= Games.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

function GameContextProvider(props) {
  const [cartItems, setCartItems] = useState(defaultCart);

  const totalItems = () => {
    let items = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        items += cartItems[item];
      }
    }
    return items;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  return (
    <GameContext.Provider
      value={{ cartItems, addToCart, removeFromCart, totalItems }}
    >
      {props.children}
    </GameContext.Provider>
  );
}

export default GameContextProvider;
