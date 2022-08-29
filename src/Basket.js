import catalogue from "./catalogue.json";
import deliveryRules from "./deliveryRules.json";
import offersList from "./OfferList";

class Basket {
  constructor(catalogue, deliveryRules, offers) {
    this.catalogue = catalogue || [];
    // sort the rules ascendingly according to rates...
    this.deliveryRules = deliveryRules.sort((a, b) => b.rate - a.rate) || [];
    this.offers = offers.sort((a, b) => a.priority - b.priority) || [];
    this.products = [];

    console.log("Basket is here!");
  }

  add(productCode) {
    console.log(productCode);
  }

  _applyOfferS() {
    let productsAfterOffers = this.products;

    for (const offer of this.offers) {
      productsAfterOffers = offer.applyOffer(productsAfterOffers);
    }

    return productsAfterOffers;
  }

  _calculateDeliveryCost(cost) {
    let deliveryCost = 0;

    for (const rule of this.deliveryRules) {
      if (cost < rule.maxTotal) {
        deliveryCost = rule.rate;
        break;
      }
    }

    return deliveryCost;
  }

  total() {
    const productsAfterOffers = this._applyOfferS(this.products);
    const subTotal = productsAfterOffers.reduce(
      (prev, product) => prev + product.price,
      0
    );
    return subTotal + this._calculateDeliveryCost(subTotal);
  }

  list() {
    for (const product of this.catalogue) {
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
