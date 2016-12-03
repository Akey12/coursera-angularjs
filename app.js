(function(){
  'use strict';

  angular.module('myFirstApp', [])
    .controller('MyFirstController', function($scope) {
      $scope.name = "";
      $scope.totalValue = 0;

      $scope.DisplayValue = function() {
        $scope.totalValue = calculateValue($scope.name);
      };

      function calculateValue (string){
        var total = 0;
        for (var i = 0; i < string.length; i++){
          total += string.charCodeAt(i);
        }

        return total;
      }
    });
})();
