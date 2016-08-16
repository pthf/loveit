(function(){
  angular.module('loveitSite.directives', [])
  .directive('headerTop', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/header-top.html',
      controller: function($document){
      }
    }
  })
})();
