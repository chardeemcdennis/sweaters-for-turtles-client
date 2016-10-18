'use strict';

// const app = require('../app');

const displayCart = require('../templates/display-cart.handlebars');

const displayCartSuccess = (cart) => {
  $('#content').html(displayCart(cart));
};

module.exports = {
  displayCartSuccess,
};
