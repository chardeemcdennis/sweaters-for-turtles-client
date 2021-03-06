'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onSignUpClick = () => {
  ui.showSignUpModal();
};

const onSignUp = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
    .done(ui.signUpSuccess)
    .fail(ui.signUpfailure);
};

const onSignIn = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  // $('#sign-in-warning').hide();

  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.signInFailure);
};

//
const onChangePasswordClick = function () {
  ui.showChangePassword();
};

const onChangePassword = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);

  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.changePasswordFailure);
};

const onSignOut = (event) => {
  event.preventDefault();
  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.failure);
};

const addHandlers = function() {
  $('#sign-up-link').on('click', onSignUpClick);
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password-btn').on('click', onChangePasswordClick);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
};

module.exports = {
  addHandlers
};
