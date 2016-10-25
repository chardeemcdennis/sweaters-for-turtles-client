'use strict';

const app = require('../app');
const signedIn = require('../templates/signed-in.handlebars');
const signedOut = require('../templates/signed-out.handlebars');
// const productsEvents = require('../products/events');


//SIGN UP
const signUpSuccess = () => {
  $('#signUpModal').modal('hide');
};

const signUpFailure = (error) => {
  // create warning message
  return error;
};

//
//SIGN IN
const signInSuccess = (data) => {
  //Stores current user data into app.user
  app.user = data.user;
  app.user.cart = data.user.cart;

  //UI response to sign in
  $('#user-name-welcome').html(app.user.email);
  $('#sign-in-prompt').hide();
  $('#sign-in-failure').hide();
  $('#user-welcome').show();
  $('nav').html(signedIn());
  // productsEvents.onDisplayProducts();
};

const signInFailure = (error) => {
  $('#sign-in-failure').show();
  return error;
};

//
//SIGN OUT
const signOutSuccess = () => {
  app.user = null;
  $('#user-welcome').hide();
  $('#sign-in-prompt').show();
  $('.hero').show();
  $('nav').html('');
  $('#content').html(signedOut());
};

const signOutFailure = (error) => {
  return error;
};


const showChangePassword = function () {
  $('#pwd-change-msg').hide();
  $('#changePasswordModal').modal('show');
  $('#change-password').show();
};

// change password
const changePasswordSuccess = () => {
  $('#change-password').hide();
  $('#pwd-change-msg').show();
  $('#changePasswordModal').modal('hide');
};

const changePasswordFailure = (error) => {
  return error;
};

//Show sign in modal and hide sign-in-failure message if displayed
const showSignUpModal = function() {
  $('#signUpModal').modal('show');
  $('#sign-in-failure').hide();
};

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  showChangePassword,
  changePasswordSuccess,
  changePasswordFailure,
  showSignUpModal,
};
