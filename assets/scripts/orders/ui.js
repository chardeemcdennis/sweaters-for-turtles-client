'use strict';

//const app = require('../app');

const displayOrders = require('../templates/order-history.handlebars');

const displayOrdersSuccess = (orders) => {
  $('#content').html(displayOrders(orders));
};

module.exports = {
  displayOrdersSuccess,
};
