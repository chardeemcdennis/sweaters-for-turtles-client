'use strict';

const app = require('../app');

const displayOrders = () => {
  return $.ajax({
    url: app.host + "/user-orders/" + app.user._id /*:_owner*/,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    // data: data
  });
};


module.exports = {
  displayOrders,
};
