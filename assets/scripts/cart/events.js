'use strict';

const api = require('./api');
const ui = require('./ui');

const onAddToCart = (event) => {
  event.preventDefault();
  let product_id = event.target.id;
  // let data = document.getElementById("price");
  // console.log(data);
  // let price = data;
  // console.log(price);
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

const addHandlers = () => {
  $('.content').on('click','.add-to-cart', onAddToCart);
  $('nav').on('click','#get-cart', onDisplayCart);

};

module.exports = {
  addHandlers
};
