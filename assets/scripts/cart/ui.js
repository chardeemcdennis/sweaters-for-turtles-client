'use strict';

const app = require('../app');

const displayCart = require('../templates/display-cart.handlebars');

const addToCartSuccess = () => {
  // console.log("Add to cart successful");
  $('.notifications').html("Item added to cart");
  setTimeout(function(){$('.notifications').html('');}, 1350);
};

const cartTotalAmount = (userCart) => {
  let runningTotal = 0;
  userCart.forEach((element, index, array) => {
    // console.log('item number' + (index +  1) + "'s subtotal is", array[index].quantity * array[index].price);
    runningTotal += (array[index].quantity * array[index].price);
  });
  console.log('running total is', runningTotal);
  let totalAmount = Math.round(runningTotal * 100) / 100;
  app.user.totalAmount = totalAmount;
  // console.log('app.user.totalAmount', app.user.totalAmount);
  return totalAmount;
};


// rename cart WAAAYYYY later
const displayCartSuccess = (user) => {
  app.user.cart = user.cart;
  let userCart = user.cart;
  userCart.total = cartTotalAmount(userCart);

  // let cartTotal = cartTotalAmount(userCart);
  // console.log('userCart is', userCart);
  $('.hero').hide();
  $('#content').html(displayCart(user));
};

const clearCartSuccess = () => {
  $('#content').html("Your cart was emptied.");
  app.user.cart = [];
};

const emptyCartSuccess = () => {
  $('#content').html("<h1>Your order was successful!</h1><br><h2>Enjoy your sweaters</h2>");
  app.user.cart = [];
};

module.exports = {
  displayCartSuccess,
  addToCartSuccess,
  clearCartSuccess,
  emptyCartSuccess,
};
