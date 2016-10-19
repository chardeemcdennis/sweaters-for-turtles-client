'use strict';

const app = require('../app');

const addToCart = (data) => {
  console.log('app.user is', app.user);
  return $.ajax({
    url: app.host + '/cart-update/' + app.user._id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data
  });
};

const displayCart = () => {
  return $.ajax({
    url: app.host + "/cart-show/" + app.user._id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    // data: data
  });
};

const clearCart = () => {
  return $.ajax({
    url: app.host + '/clear-cart/' + app.user._id,
    method: 'PATCH',
    headers: {
        Authorization: 'Token token=' + app.user.token,
      },
  });
};

module.exports = {
  addToCart,
  displayCart,
  clearCart,
};
