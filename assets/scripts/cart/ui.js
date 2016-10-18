'use strict';

const app = require('../app');

const displayCart = require('../templates/display-cart.handlebars');

const addToCartSuccess = (data) => {
  app.user = data.user;
  console.log("A.U.: " + app.user.cart);
};

const displayCartSuccess = (cart) => {
  $('#content').html(displayCart(cart));
};

module.exports = {
  displayCartSuccess,
  addToCartSuccess,
};
