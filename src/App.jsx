import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { CartProvider } from "./CartContext";
import Cart from "./Cart";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const appStyles = {
    backgroundColor: theme === "dark" ? "#050505" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",   
  };

  const buttonStyles = {
    backgroundColor: theme === "dark" ? "#444" : "#eee",
    color: theme === "dark" ? "#fff" : "#000",
    border: theme === "dark" ? "1px solid #777" : "1px solid #ccc",
    borderRadius: "5px",
    padding: "6px 12px",
    cursor: "pointer",
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <CartProvider>
        <div style={appStyles}>
          <BrowserRouter>
        <div>
          <nav style={{textAlign: "center", paddingBottom: "20px"}}>
            <NavLink
            to="/"
              style={({isActive}) =>({
                textDecoration: "none", 
                padding: "7px" , 
                fontFamily: "Georgia", 
                color: isActive ? "rgba(80, 109, 55)" : "white",
                fontWeight: isActive ? "bold" : "normal",
                })}
            >
                  Главная
              </NavLink>

              <NavLink
            to="/products"
              style={({isActive}) =>({
                textDecoration: "none", 
                padding: "7px" , 
                fontFamily: "Georgia", 
                color: isActive ? "rgba(80, 109, 55)" : "white",
                fontWeight: isActive ? "bold" : "normal",
                })}>Товары</NavLink>

              <NavLink
            to="/cart"
              style={({isActive}) =>({
                textDecoration: "none", 
                padding: "7px" , 
                fontFamily: "Georgia", 
                color: isActive ? "rgba(80, 109, 55)" : "white",
                fontWeight: isActive ? "bold" : "normal",
                })}>Корзина</NavLink>

                <NavLink
            to="/dashboard"
              style={({isActive}) =>({
                textDecoration: "none", 
                padding: "7px" , 
                fontFamily: "Georgia", 
                color: isActive ? "rgba(80, 109, 55)" : "white",
                fontWeight: isActive ? "bold" : "normal",
                })}>Личный кабинет</NavLink>

                <NavLink
            to="/login"
              style={({isActive}) =>({
                textDecoration: "none", 
                padding: "7px" , 
                fontFamily: "Georgia", 
                color: isActive ? "rgba(80, 109, 55)" : "white",
                fontWeight: isActive ? "bold" : "normal",
                })}>Войти</NavLink>
            
              <button onClick={toggleTheme} style={{...buttonStyles, marginLeft: "35px"}}> Переключить тему
              </button>    
            </nav>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      </div>
    </CartProvider>
    </ThemeContext.Provider>
  );
}

export default App;
