import React, { useContext, useEffect, useState } from "react";
import "./CatalogCard.css";
import { ProductContext } from "../../App";

export default function CatalogCard({ product, showDropButtons, isCartPage }) {
  const context = useContext(ProductContext);
  const [hasCartItem, setHasCartItem] = useState(false);
  const [hasFavItem, setHasFavItem] = useState(false);

  useEffect(() => {
    const findFavProduct = context.state.favorites.find(
      (item) => item.id === product.id || ""
    );
    const findCartProduct = context.state.basket.find(
      (item) => item.id === product.id || ""
    );

    if (findFavProduct) {
      setHasFavItem(true);
    }

    if (findCartProduct) {
      setHasCartItem(true);
    }
  }, [context.state.favorites, context.state.basket, product]);

  const addToCart = () => {
    const findProduct = context.state.basket.find(
      (item) => item.id === product.id
    );

    if (!findProduct) {
      context.setContextState({
        ...context.state,
        basket: [...context.state.basket, product],
      });
    }
  };

  const addToFav = () => {
    const findProduct = context.state.favorites.find(
      (item) => item.id === product.id
    );

    if (!findProduct) {
      context.setContextState({
        ...context.state,
        favorites: [...context.state.favorites, product],
      });
    }
  };

  const handleRemoveItem = () => {
    const keyword = isCartPage ? "basket" : "favorites";
    const filterArray = context.state[keyword].filter(
      (item) => item.id !== product.id
    );
    context.setContextState({
      ...context.state,
      [keyword]: filterArray,
    });
  };

  const renderButton = () => {
    if (!showDropButtons) {
      return (
        <>
          <button
            className={hasFavItem ? "isSelect" : "notSelect"}
            onClick={() => addToFav()}
          >
            <i className="fa fa-heart"></i>
          </button>
          <button
            className={hasCartItem ? "isSelect" : "notSelect"}
            onClick={() => addToCart()}
          >
            <i className="fa fa-shopping-cart"></i>
          </button>
        </>
      );
    }

    return (
      <button onClick={() => handleRemoveItem()}>
        <i className="fa fa-times"></i>
      </button>
    );
  };

  return (
    <div className="product-card">
      <div className="product-tumb">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <span className="product-catagory">{product.category}</span>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <div className="product-bottom-details">
          <div className="product-price">${product.price}</div>
          <div className="product-links">{renderButton()}</div>
        </div>
      </div>
    </div>
  );
}
