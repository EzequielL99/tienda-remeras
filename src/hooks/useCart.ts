import { useState, useEffect } from "react";
import type { CartItem } from "../types";

export const useCart = () => {
  // Initial States
  const initialCart = (): CartItem[] => {
    const localStorageCart = localStorage.getItem("cart");

    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  // State
  const [cart, setCart] = useState(initialCart);


  // Effects
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Return
  return {
    cart
  };
};
