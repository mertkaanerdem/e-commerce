import React, { useContext } from "react";
import { ProductContext } from "../../App";
import CatalogCard from "../CatalogCard/CatalogCard";
import "./Favorites.css";

export default function Favorites({ props }) {
  const context = useContext(ProductContext);

  return (
    <div className="favorites-container">
      <h1 className="title"> FAVORITES </h1>
      {context.state.favorites.map((favItem) => (
        <CatalogCard
          product={favItem}
          key={favItem.id}
          showDropButtons={true}
        />
      ))}
    </div>
  );
}
