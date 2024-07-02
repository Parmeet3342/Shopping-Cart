import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <BrowserRouter>
    <CartContextProvider>
      <App />
      <Toaster/>
    </CartContextProvider>
  </BrowserRouter>
);
