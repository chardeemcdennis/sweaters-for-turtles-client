'use strict';

//const app = require('../app');

const displayOrders = require('../templates/order-history.handlebars');

const displayOrdersSuccess = (orders) => {
  $('.hero').hide();
  $('#content').html(displayOrders(orders));
};

const deleteOrderSuccess = () => {
  $('#content').html("The order was deleted. Please re-open the order history.");
};

module.exports = {
  displayOrdersSuccess,
  deleteOrderSuccess,
};
