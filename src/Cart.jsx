import { useContext } from "react";
import { CartContext } from "./CartContext";
import { ThemeContext } from "./ThemeContext";

function Cart() {
    const { cart, removeFromCart } = useContext(CartContext);
    const { theme } = useContext(ThemeContext);

    const buttonStyles = {
        backgroundColor: theme === "dark" ? "#444" : "#eee",
        color: theme === "dark" ? "#fff" : "#000",
        border: theme === "dark" ? "1px solid #777" : "1px solid #ccc",
        borderRadius: "5px",
        padding: "6px 12px",
        cursor: "pointer",
    };
    
    let total = 0;
    for (const item of cart) {
    total += Number(item.price);
    }

    return (
        <div>
        <h2>Корзина</h2>
        {cart.length === 0 ? (
            <p>Корзина пуста</p>
        ) : (
            <div>
            {cart.map((item, index) => (
            <div key={index}>
                <span>{item.name}</span>
                <span> — {item.price} руб.</span>
                <button onClick={() => removeFromCart(index)} style={buttonStyles}>Удалить</button>
            </div>
            ))}
            </div>
        )}
        <p>Итого: {total} рублей</p>
        </div>
    );
}

export default Cart;