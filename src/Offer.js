class Offer {
  constructor(calcFuntion) {
    if (!calcFuntion)
      throw new Error(
        "Insufficient parameters: Offer class should have a function to apply the offer logic."
      );
    this.calcFuntion = calcFuntion;
  }

  applyOffer(products) {
    if (!products)
      throw new Error(
        "Insufficient parameters: Products which the offer terms will be applied should be passed."
      );
    return this.calcFuntion(products);
  }
}

export default Offer;
