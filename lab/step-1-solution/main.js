var app = angular.module('shopper', []);

app.constant('taxRate', .07);

app.filter('percentage', function() {
  return function(input) {
    return (input * 100).toFixed() + '%';
  };
});

app.controller('CartController', function CartController(taxRate) {
  this.item = new CartItem('new item', 1, 10);

  // TODO: Add the taxRate to the controller so it can be
  // referenced in the view
  this.taxRate = taxRate;

  // TODO: Create a total() function on the controller
  this.total = function() {
    var subTotal = this.item.subTotal();

    return subTotal * (1 + taxRate);
  };
});

function CartItem(name, quantity, cost) {
  this.name = name;
  this.quantity = quantity || 1;
  this.cost = cost || 0;

  this.subTotal = function subTotal() {
    // TODO: complete this function to return the subTotal
    // of this item (quantity * cost)
    return this.quantity * this.cost;
  };
}
