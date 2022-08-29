import getBasket from "../../Basket.js";

import catalogue from "../../catalogue.json";

import "./productList.css";
import { useState } from "react";

const ProductList = () => {
  const basket = getBasket();

  const [total, setTotal] = useState(basket.total());

  return (
    <>
      <header>
        <h1>Plates Co.</h1>
        <div className="cart-total">
          <p>{total} $</p>
        </div>

        <img
          src="img/shopping-cart.svg"
          alt="shopping cart"
          title="Reset cart"
          onClick={() => {
            basket.clear();
            setTotal(basket.total());
          }}
        ></img>
      </header>

      <div className="product-list">
        {catalogue.map((p) => (
          <div className="product" key={"product_" + p.code}>
            <img src={`img/plate-${p.color}.svg`} alt={p.name}></img>
            <div className="product__details">
              <p className="product__name">{p.name}</p>
              <p className="product__price">{`${p.price} $`} </p>
              <button
                className="add-to-cart"
                onClick={() => {
                  basket.add(p.code).then((productList) => {
                    console.log(productList);
                    setTotal(basket.total());
                  });
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
