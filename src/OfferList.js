import Offer from "./Offer";

const OfferList = [];

OfferList.push({
  code: "Offer01",
  priority: 1,
  description: "Buy one red plate and the second is for the half price",
  offer: new Offer((products) => {
    for (const product of products) {
      if (product.code === "R01") {
        product.price = product.price / 2;
      }
    }
    return products;
  }),
});

OfferList.push({
  code: "Offer02",
  priority: 0,
  description: "Apply 2 dollar discount for the red plate",
  offer: new Offer((products) => {
    for (const product of products) {
      if (product.code === "R01") {
        product.price = product.price - 2;
      }
    }
    return products;
  }),
});

export default OfferList;
