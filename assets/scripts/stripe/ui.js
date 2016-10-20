'use strict';

const createOrderSuccess = () => {
  console.log("YESSSSSSSSS");
};


const createOrderFailure = () => {
  console.log("FUUUUUUUUUUUUU");
};


const addStripeChargeSuccess = () => {
  console.log("YESSSSSSSSSSSAAAAAAA");
};


const addStripeChargeFailure = () => {
  console.log("FUUUUUUUUUUUUUAAAAAACCC");
};


module.exports = {
  createOrderSuccess,
  createOrderFailure,
  addStripeChargeSuccess,
  addStripeChargeFailure
};
