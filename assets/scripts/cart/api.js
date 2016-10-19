'use strict';

const app = require('../app');

const addToCart = (product_id) => {
  let data = product_id;
  // console.log(review_id);
  return $.ajax({
    url: app.host + '/cart-update/' + app.user._id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {  "product" : data }
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
