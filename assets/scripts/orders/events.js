'use strict';

//const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onDisplayOrders = (event) => {
  event.preventDefault();
  api.displayOrders()
  .done(ui.displayOrdersSuccess)
  .fail(ui.failure);
};

const onDeleteOrder = (event) => {
  event.preventDefault();
  let order_id = event.target.id;
  api.deleteOrder(order_id)
    .done(ui.deleteOrderSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
$('nav').on('click','#get-orders', onDisplayOrders);
$('.content').on('click', '.deleteOrder', onDeleteOrder);
};

module.exports = {
  addHandlers,
  onDisplayOrders,
  onDeleteOrder,
};
