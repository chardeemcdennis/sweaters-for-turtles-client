'use strict';

const app = require('../app');

let displayProducts = function(){
  return $.ajax({
    url: app.host + "/products", // "http://book-json.herokuapp.com/books"
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
