'use strict';

// const app = require('../app');

const displayCart = require('../templates/display-cart.handlebars');

const addToCartSuccess = () => {
  console.log("Add to cart successful");
  $('.notifications').html("Item added to cart");
};

const cartTotalAmount = (userCart) => {
  let runningTotal = 0;
  userCart.forEach((element, index, array) => {
    console.log('item number' + (index +  1) + "'s subtotal is", array[index].quantity * array[index].price);
    runningTotal += (array[index].quantity * array[index].price);
  });
  console.log('running total is', runningTotal);
  let totalAmount = Math.round(runningTotal * 100) / 100;
  return totalAmount;
};


// rename cart WAAAYYYY later
const displayCartSuccess = (cart) => {
  let userCart = cart.cart;
  userCart.total = cartTotalAmount(userCart);

  // let cartTotal = cartTotalAmount(userCart);
  console.log('userCart is', userCart);
  $('.hero').hide();
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
