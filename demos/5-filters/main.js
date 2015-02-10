angular.module('filtersDemo', []);

angular.module('filtersDemo').controller('MainController', function() {
  this.people = [
    {
      name: 'Tim',
      dob: new Date(1986, 12, 14),
      worth: 5.67
    },
    {
      name: 'Bob',
      dob: new Date(1966, 5, 6),
      worth: 100004.23
    },
    {
      name: 'Bill',
      dob: new Date(2001, 2, 14),
      worth: 8923.23
    },
    {
      name: 'Tom',
      dob: new Date(1990, 9, 3),
      worth: 30023.76
    },
    {
      name: 'Ted',
      dob: new Date(1978, 7, 4),
      worth: 2000003.23
    },
    {
      name: 'Ken',
      dob: new Date(2000, 2, 29),
      worth: 90.23
    }
  ];
});
