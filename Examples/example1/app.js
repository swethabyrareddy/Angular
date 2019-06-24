(function () {
'use strict';
angular.module('MyFirstapp',[])
.controller('MyFirstController', function ($scope) {
$scope.name="swetha";
$scope.sayHello = function (){
  return "Hello"
};
});
})();
