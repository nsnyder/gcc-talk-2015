var app = angular.module('shopper', []);

app.constant('taxRate', .07);

app.filter('percentage', function() {
  return function(input) {
    return (input * 100).toFixed() + '%';
  };
});

app.controller('CartController', function CartController(taxRate) {
  this.items = [new CartItem('new item', 1, 10), new CartItem('another item', 2, 5.67)];

  this.taxRate = taxRate;

  // TODO: Add a 'subTotal' function to the controller
  // which will return the sum of all items' subTotals
  //
  // Hint: Angular provides a forEach helper function.
  // It can be used like this:
  //
  // angular.forEach(yourArray, function(elementInArray) {
  //   // do something with elementInArray
  // });

  // TODO: Fix the total function
  this.total = function() {
    // Use the 'subTotal' function from above
    var subTotal = 0;

    return subTotal * (1 + taxRate);
  };
});

function CartItem(name, quantity, cost) {
  this.name = name;
  this.quantity = quantity || 1;
  this.cost = cost || 0;

  this.subTotal = function subTotal() {
    return this.quantity * this.cost;
  };
}
