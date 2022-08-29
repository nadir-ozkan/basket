import getBasket from "../../Basket.js";

import catalogue from "../../catalogue.json";

import "./productList.css";

const ProductList = () => {
  const basket = getBasket();

  basket.list();
  basket.listDeliveryRules();
  basket.listOffers();

  return (
    <>
      <header>
        <h1>Plates Co.</h1>
      </header>

      <div className="product-list">
        {catalogue.map((p) => (
          <div className="product" key={"product_" + p.code}>
            <img src={`img/plate-${p.color}.svg`} alt={p.name}></img>
            <div className="product__details">
              <p className="product__name">{p.name}</p>
              <p className="product__price">{`${p.price} $`} </p>
              <button className="add-to-cart">Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
