'use strict';

const app = require('../app');

const displayProducts = () => {
  return $.ajax({
    url: app.host + "/products",
    method: 'GET',
    headers: {
      // Authorization: 'Token token=' + app.user.token,
    },
    // data: data
  });
};

module.exports = {
  displayProducts

};
