import getBasket from "../../Basket.js";

const ProductList = () => {
  const basket = getBasket();

  basket.list();
  basket.listDeliveryRules();
  basket.listOffers();

  return (
    <div className="product-list">
      <h1>Product List here!</h1>
    </div>
  );
};

export default ProductList;
