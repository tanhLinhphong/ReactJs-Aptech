import React from "react";
import "./index.css";
import"../src/style/style.css"
import Product from "./Product/Product";
import ProductList from "./Product/ProductList";

export default function App() {
  return (
    <div className="App" id="top">
    
      <ProductList />
     
    </div>
  );
}
