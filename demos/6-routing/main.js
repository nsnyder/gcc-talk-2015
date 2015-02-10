var app = angular.module('routingDemo', ['ngRoute']);

app.factory('thingService', function() {
  var things = [
    {
      id: 1,
      name: 'magic wand',
      description: 'A magic wand made of twisted Rosewood'
    },
    {
      id: 2,
      name: 'gold coin',
      description: 'A small gold coin that is worn with age'
    },
    {
      id: 3,
      name: 'rusty sword',
      description: 'A dull, rusty sword'
    },
    {
      id: 4,
      name: 'boots of haste',
      description: 'Magical boots that make the wearer dash to and fro with ease'
    }
  ];

  return {
    getAll: function() {
      return things;
    },
    getById: function(id) {
      for (var i=0; i<things.length; i++) {
        if (things[i].id == id) {
          return things[i];
        }
      }

      return null;
    }
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: 'partials/home.html',
    controller: 'HomeController',
    controllerAs: 'home'
  })
  .when('/about', {
    templateUrl: 'partials/about.html'
  })
  .when('/thing/:thingId', {
    templateUrl: 'partials/thing.html',
    controller: 'ThingController',
    resolve: {
      thing: function($timeout, $route, thingService) {
        return thingService.getById($route.current.params.thingId);
      }
    }
  })
  .otherwise('/home');
});

app.controller('HomeController', function(thingService) {
  this.things = thingService.getAll();
});

app.controller('ThingController', function($scope, thing) {
  $scope.thing = thing;
});
