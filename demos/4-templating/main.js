var app = angular.module('templatingDemo', []);

app.controller('MainController', function() {
  this.people = [];

  this.people.push({
    first: 'Tim',
    last: 'Whitbeck',
    dob: new Date(1986, 12, 14)
  });

  this.addPerson = function(newPerson) {
    this.people.push(newPerson);
  };

  this.fullYearsSince = function(date) {
    return Math.floor((new Date() - date) / (1000 * 60 * 60 * 24 * 365));
  };
});
