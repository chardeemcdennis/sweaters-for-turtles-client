'use strict';

const app = require('../app');

const displayCart = require('../templates/display-cart.handlebars');

const displayCartSuccess = (products) => {
  $('#content').html(displayCart(products));
};

module.exports = {
  displayCartSuccess,
};
