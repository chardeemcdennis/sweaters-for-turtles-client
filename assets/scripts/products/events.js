'use strict';

// const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onDisplayProducts = (event) => {
  event.preventDefault();
  api.displayProducts()
  .done(ui.displayProductsSuccess)
  .fail(ui.failure);
};

const addHandlers = () => {
  $('nav').on('click','#get-products', onDisplayProducts);
};

module.exports = {
  addHandlers
};
