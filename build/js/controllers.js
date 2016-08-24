(function(){
  angular.module('loveitSite.controllers', [])
  .controller('menuItemController', ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location){
    $scope.routeParams = $location.path();
    $scope.itemselected = 0;
    switch ($scope.routeParams) {
      case '/home': $scope.itemselected = 0;  break;
      case '/nosotros': $scope.itemselected = 1;  break;
      case '/espacios': $scope.itemselected = 2;  break;
      case '/amenidades': $scope.itemselected = 3;  break;
      case '/habitaciones': $scope.itemselected = 4;  break;
      case '/restaurante': $scope.itemselected = 5;  break;
      case '/servicios': $scope.itemselected = 6;  break;
    }
    $scope.changerute = function(item){
      $scope.itemselected = item;
    }
  }])
  .controller('infoRoomDescriptionController', ['$scope', function($scope){
    $scope.active = true;
    $scope.item = 1;
    $scope.showItem = function(item){
      $scope.item = item;
    }
  }])

  .controller('ExampleController', ['$scope', function($scope) {
    $scope.data = {};
    $scope.text = '';
    $scope.submit = function() {
      $scope.data = $scope.user;
      console.log($scope.data);
      // if ($scope.text) {
      //   $scope.user.push(this.text);
      //   $scope.text = '';
      // }
    };
  }]);


})();
