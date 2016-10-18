'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onAddToCart = (event) => {
  event.preventDefault();
  let product_id = event.target.id;
  // console.log(data, data_id);
  api.addToCart(product_id)
  .done(ui.addToCartSuccess)
  .fail(ui.failure);
};

const onDisplayCart = (event) => {
  event.preventDefault();
  api.displayCart()
  .done(ui.displayCartSuccess)
  .fail(ui.failure);
};

const addHandlers = function() {
  $('.content').on('click','.add-to-cart', onAddToCart);
  $('nav').on('click','#get-cart', onDisplayCart);

};

module.exports = {
  addHandlers
};
