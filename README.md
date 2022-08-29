# Lean Scale Basket Task

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To Run The App

In the project directory, use:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## How Does the Basket Class works:

### constructor(catalogue, deliveryRules, offers)

Basket class should be initialized with products catalogue, delivery rules and offers array params.

_catalogue_ array should be an array of objects which should at least have code (string), name (string) and price (float) fields. All the operations will be made according to these product information.

_deliveryRules_ array should be an array of objects which should at least have maxTotal (float) and rate (float) fields. Delivery fee will be calculated according to values provided in these fields.

_offers_ array should be an array of objects which should at least have priority (int) and offerObj (Offer) fields. offerObj should be an instance of an Offer class

### add(productCode)

Relevant products should be added with a product code that exists in the products catalogue list. User is assumed to enter valid product codes for this task.

### total()

Returns the basket total after the delivery rules and offers applied to the product list.

## class Offer(calcFunction)

Offer class should be initialized with a calculation function which should have a products param. This calculation function will then be applied to baskets products list and the modified products list will be returned.

# About UI

A simple products catalogue can be seen in home page. Add to cart button can be used to add products to the cart. Relevant total will be displayed immediately after offers and delivery rules applied.

Clicking on cart icon will reset the cart content. This feature is added only for testibility purpose.

To visulaze test cases a _/test-cases_ route is added to the project. Here all the test cases could be run wiht corresponding buttons. It is advised to display console screen in order to see some more details.
