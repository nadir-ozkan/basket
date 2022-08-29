import Offer from "./Offer";

const OfferList = [];

OfferList.push({
  code: "Offer01",
  priority: 1,
  description: "Buy one red plate and the second is for the half price",
  offerObj: new Offer((products) => {
    let R01_count = 0;
    for (const product of products) {
      if (product.code === "R01") {
        R01_count++;
        if (R01_count % 2 === 0) {
          product.price = parseFloat(product.price / 2);
        }
      }
    }
    return products;
  }),
});

// OfferList.push({
//   code: "Offer02",
//   priority: 0,
//   description: "Apply 2 dollar discount for every red plate",
//   offerObj: new Offer((products) => {
//     for (const product of products) {
//       if (product.code === "R01") {
//         product.price = product.price - 2;
//       }
//     }
//     return products;
//   }),
// });

export default OfferList;
