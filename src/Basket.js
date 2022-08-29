import catalogue from "./catalogue.json";
import deliveryRules from "./deliveryRules.json";
import offersList from "./OfferList";

const RoundToTwoDecimals = (number) => {
  return Math.floor(number * 100) / 100;
};

class Basket {
  constructor(catalogue, deliveryRules, offers) {
    this.catalogue = catalogue || [];
    // sort the rules ascendingly according to rates...
    this.deliveryRules = deliveryRules.sort((a, b) => b.rate - a.rate) || [];
    this.offers = offers.sort((a, b) => a.priority - b.priority) || [];
    this.products = [];
  }

  add(productCode) {
    this.products.push(
      // push a shallow copy of the object to the array
      Object.assign(
        {},
        this.catalogue.find((item) => item.code === productCode)
      )
    );
  }

  _applyOffers() {
    let productsAfterOffers = this.products;

    for (const offer of this.offers) {
      productsAfterOffers = offer.offerObj.applyOffer(productsAfterOffers);
    }

    return productsAfterOffers;
  }

  _calculateDeliveryCost(cost) {
    let deliveryCost = 0;

    if (cost > 0) {
      for (const rule of this.deliveryRules) {
        if (cost < rule.maxTotal) {
          deliveryCost = rule.rate;
          break;
        }
      }
    }

    console.log(`Delivery Cost: ${deliveryCost}`);
    return deliveryCost;
  }

  clear() {
    this.products = [];
  }

  total() {
    const productsAfterOffers = this._applyOffers();
    const subTotal = productsAfterOffers.reduce(
      (prev, product) => prev + product.price,
      0
    );
    return RoundToTwoDecimals(subTotal + this._calculateDeliveryCost(subTotal));
  }

  list() {
    for (const product of this.products) {
      console.log(product);
    }
  }

  listDeliveryRules() {
    for (const rule of this.deliveryRules) {
      console.log(rule);
    }
  }

  listOffers() {
    for (const offer of this.offers) {
      console.log(offer);
    }
  }
}

const getBasket = () => {
  if (window.basket) return window.basket;
  window.basket = new Basket(catalogue, deliveryRules, offersList);
  return window.basket;
};

export default getBasket;
