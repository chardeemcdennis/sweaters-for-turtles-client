'use strict';

// const app = require('../app');

const displayCart = require('../templates/display-cart.handlebars');

const addToCartSuccess = () => {
  console.log("Add to cart successful");
  $('.notifications').html("Item added to cart");
};

const displayCartSuccess = (cart) => {
  $('#content').html(displayCart(cart));
};

const clearCartSuccess = () => {
  $('#content').html("Your cart was emptied.");
};

module.exports = {
  displayCartSuccess,
  addToCartSuccess,
  clearCartSuccess,
};
