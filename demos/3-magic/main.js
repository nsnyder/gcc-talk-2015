var app = angular.module('magicDemo', []);

app.controller('MagicController', function() {
  this.person = {
    name: 'Tim'
  };

  this.count = 5;

  this.say = function(message) {
    alert(message || 'nothing...');
  };
});
