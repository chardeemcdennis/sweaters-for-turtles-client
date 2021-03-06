'use strict';

// const app = require('../app');
const displayProducts = require('../templates/display-products.handlebars');


const displayProductsSuccess = (products) => {
  $('.hero').hide();
  $('#content').html(displayProducts(products));
};

module.exports = {
  displayProductsSuccess
};
