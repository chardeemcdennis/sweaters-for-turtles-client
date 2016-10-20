'use strict';

const app = require('../app');
const ordersAPI = require('../orders/api.js');
const cartAPI = require('../cart/api.js');
const ui = require('./ui.js');
const cartUi = require('../cart/ui.js');
const api = require('./api.js');
// const cartAPI = require('../cart/api.js');

// let stripe = require("stripe")("pk_test_TmOEajfRUrzDTQ37AIJ1A7hp");

// let token = request.body.stripeToken; // Using Express

// Create a charge: this will charge the user's card
// let charge = stripe.charges.create({
//   amount: app.user.totalAmount * 100, // Amount in cents
//   currency: "usd",
//   source: token,
//   description: "Example charge"
// }, function(err, charge) {
//   if (err && err.type === 'StripeCardError') {
//     // The card has been declined
//   }
// });


const stripeResponseHandler = (status, response) => {
  event.preventDefault();
  // Grab the form:
  let $form = $('#payment-form');

  if (response.error) { // Problem!

    // Show the errors on the form:
    $form.find('.payment-errors').text(response.error.message);
    $form.find('.submit').prop('disabled', false); // Re-enable submission

  } else { // Token was created!

    // Get the token ID:
    let token = response.id;
    // Insert the token ID into the form so it gets submitted to the server:
    $form.append($('<input type="hidden" name="stripeToken">').val(token));
    console.log('token is', token);
    // Submit the form:

    let newOrder = {};
    newOrder.products = app.user.cart;
    newOrder.total_amount = app.user.totalAmount;
    newOrder.stripe_token = token;
    // newOrder.currency =
    // let newOrderJson;
    // console.log('jsonified is', newOrderJson);
    api.addStripeCharge(newOrder)
      .done(ui.addStripeChargeSuccess, ordersAPI.createOrder(newOrder)
          .done(ui.createOrderSuccess, cartAPI.clearCart)
              .done(cartUi.clearCartSuccess)
          .fail(ui.createOrderFailure))
      .fail(ui.addStripeChargeFailure);
  }

};

const getStripeToken = (event) => {
  // console.log(cart);
  // console.log(app.cart);
  console.log('app.user.totalAmount', app.user.totalAmount);
  console.log('app.user.cart is', app.user.cart);
  event.preventDefault();
  console.log('in getStripeToken');

  Stripe.setPublishableKey('pk_test_TmOEajfRUrzDTQ37AIJ1A7hp');
  // let $form = event.target;

  console.log('event.target is', event.target);

  // Disable the submit button to prevent repeated clicks:
  let $form = $('#payment-form');
  $form.find('.submit').prop('disabled', true);

  // Request a token from Stripe:
  Stripe.card.createToken($form, stripeResponseHandler);


  // Prevent the form from being submitted:

  return true;
};




const addHandlers = () => {
  // $('.content').on('submit', '#payment-form', getStripeToken);
  $('.content').on('submit', '#payment-form', getStripeToken);
};

module.exports = {
  addHandlers,
  // charge,
};
