import React, { useContext } from "react";
import { ProductContext } from "../../App";
import CatalogCard from "../CatalogCard/CatalogCard";
import "./Cart.css";

export default function Cart({ props }) {
  const context = useContext(ProductContext);

  return (
    <div className="cart-container">
      <h1 className="title"> CART </h1>
      {context.state.cart.map((cartItem) => (
        <CatalogCard
          product={cartItem}
          key={cartItem.id}
          showDropButtons={true}
          isCartPage={true}
        />
      ))}
    </div>
  );
}
