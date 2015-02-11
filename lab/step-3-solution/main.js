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

  this.addItem = function(name, quantity, cost) {
    // TODO: Implement this function by creating a new
    // CartItem with the given name, quantity, and cost
    // and using the 'push' method on the items array to add it to the array
    this.items.push(new CartItem(name, quantity, cost));
  };

  this.removeItemAtIndex = function(index) {
    // TODO: Implement this function
    // hint: use the 'splice' method of the items array
    // e.g. `anArray.splice(startingIndex, numberOfElementsToRemove);
    this.items.splice(index, 1);
  };

  this.subTotal = function() {
    var subTotal = 0;

    angular.forEach(this.items, function(item) {
      subTotal += item.subTotal();
    });

    return subTotal;
  };

  this.total = function() {
    var subTotal = this.subTotal();

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
