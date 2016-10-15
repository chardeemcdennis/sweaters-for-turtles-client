'use strict';

const authEvents = require('./auth/events');
const cartEvents = require('./cart/events');
const orderEvents = require('./orders/events');
const productEvents = require('./products/events');
const profileEvents = require('./profile/events');


$(() => {
  authEvents.addHandlers();
  cartEvents.addHandlers();
  orderEvents.addHandlers();
  productEvents.addHandlers();
  profileEvents.addHandlers();
});
