var app = angular.module('controllersDemo', []);

app.controller('MainController', function() {
  this.items = ['first', 'second', 'third'];

  var count = this.items.length;
  this.addItem = function() {
    this.items.push(++count);
  };
});
