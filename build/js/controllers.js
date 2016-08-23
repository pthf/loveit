(function(){
  angular.module('loveitSite.controllers', [])
  .controller('menuItemController', ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location){
  }])
  .controller('infoRoomDescriptionController', ['$scope', function($scope){
    $scope.active = true;
    $scope.item = 1;
    $scope.showItem = function(item){
      $scope.item = item;
    }
  }])
})();
