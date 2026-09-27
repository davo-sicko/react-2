import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({  children  }){
    const [cart, setCart] = useState([]);

    function addToCart(item){
        setCart([...cart, item]);
    }
    
    function removeFromCart(indexRemove){
        setCart(cart.filter((item, index) => index != indexRemove));
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
}