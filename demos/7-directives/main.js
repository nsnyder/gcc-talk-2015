var app = angular.module('directivesDemo', []);

app.directive('twContactCard', function() {
  return {
    templateUrl: 'demos/7-directives/contact-card.html',
    scope: {
      person: '='
    }
  };
});

app.controller('MainController', function() {
  this.people = [];

  this.people.push({
    first: 'Jim',
    last: 'Jenson',
    address: {
      street: '123 Sesame St.',
      city: 'Pittsburgh',
      state: 'PA',
      zip: '15121'
    },
    phone: {
      type: 'Home',
      areaCode: '555',
      exchangeCode: '123',
      subscriberNumber:' 0123'
    }
  });

  this.people.push({
    first: 'Kip',
    last: 'Brook',
    address: {
      street: '9812 Langdon Rd.',
      city: 'Houston',
      state: 'TX',
      zip: '65432'
    },
    phone: {
      type: 'Mobile',
      areaCode: '555',
      exchangeCode: '555',
      subscriberNumber: '4934'
    }
  });

  this.people.push({
    first: 'Bruno',
    last: 'Cars',
    address: {
      street: '33 1/3 Toolok Pl.',
      city: 'San Fransisco',
      state: 'CA',
      zip: '28312'
    },
    phone: {
      type: 'Mobile',
      areaCode: '555',
      exchangeCode: '555',
      subscriberNumber: '8321'
    }
  });

  this.people.push({
    first: 'Mark',
    last: 'Twine',
    address: {
      street: '54321 Main St.',
      city: 'Tokyo',
      state: 'IN',
      zip: '34658'
    },
    phone: {
      type: 'Mobile',
      areaCode: '555',
      exchangeCode: '555',
      subscriberNumber: '3728'
    }
  });

  this.people.push({
    first: 'Lars',
    last: 'Grok',
    address: {
      street: '800 Journey Way',
      city: 'New York',
      state: 'NY',
      zip: '19328'
    },
    phone: {
      type: 'Mobile',
      areaCode: '555',
      exchangeCode: '555',
      subscriberNumber: '8326'
    }
  });

  this.people.push({
    first: 'Dennis',
    last: 'Mareeno',
    address: {
      street: '342 Rubble St.',
      city: 'Boulder',
      state: 'CO',
      zip: '77568'
    },
    phone: {
      type: 'Mobile',
      areaCode: '555',
      exchangeCode: '555',
      subscriberNumber: '2912'
    }
  });
});
