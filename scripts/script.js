var greeting = "[not initialized]";
var name = "[not initialized]";
var message = "[not initialized]";
var welcome = greeting + name + message;

var sign = "[not initialized]";
var tiles = "[not initialized]";
var subTotal = "[not initialized]";
var shipping = "[not initialized]";
var grandTotal = "[not initialized]";

(function() {
  initVars();
  setTextContentById("greeting", welcome);
  setTextContentById("userSign", sign);
  setTextContentById("tiles", tiles);
  setTextContentById("subTotal", subTotal);
  setTextContentById("shipping", shipping);
  setTextContentById("grandTotal", grandTotal);
})();

function setTextContentById(getId, setText) {
  var el = document.getElementById(getId);
  el.textContent = setText;
}

function initVars() {
  greeting = "Howdy ";
  name = "Molly";
  message = ", please check your order:";
  welcome = greeting + name + message;

  sign = "Montague House";
  tiles = sign.length;
  subTotal = tiles * 5;
  shipping = 7;
  grandTotal = subTotal + shipping;

  subTotal = "$" + subTotal;
  shipping = "$" + shipping;
  grandTotal = "$" + grandTotal;
}

function resetVars() {
  event.preventDefault();
  greeting = "[not initialized]";
  name = "[not initialized]";
  message = "[not initialized]";
  welcome = greeting + name + message;

  sign = "[not initialized]";
  tiles = "[not initialized]";
  subTotal = "[not initialized]";
  shipping = "[not initialized]";
  grandTotal = "[not initialized]";

  setTextContentById("greeting", welcome);
  setTextContentById("userSign", sign);
  setTextContentById("tiles", tiles);
  setTextContentById("subTotal", subTotal);
  setTextContentById("shipping", shipping);
  setTextContentById("grandTotal", grandTotal);
}

function molly() {
  initVars();
  setTextContentById("greeting", welcome);
  setTextContentById("userSign", sign);
  setTextContentById("tiles", tiles);
  setTextContentById("subTotal", subTotal);
  setTextContentById("shipping", shipping);
  setTextContentById("grandTotal", grandTotal);
}