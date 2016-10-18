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


const addHandlers = () => {
$('nav').on('click','#get-orders', onDisplayOrders);
};

module.exports = {
  addHandlers,
  onDisplayOrders,
};
