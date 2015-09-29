'use strict';

angular.module('app').directive('map', function() {

  function link(scope, element, attrs) {
    scope.map = { 
      zoom: 8,
      center: scope.center
    }; 
    scope.coords = _.pluck(scope.markers, 'coords');
    scope.$watch('markers', function(){
      scope.coords = _.pluck(scope.markers, 'coords');
    });
  }

  return {
    restrict: 'E',
    link: link,
    templateUrl: 'directives/map/map.html',
    scope: {
      markers: '=',
      center: '='
    }
  };
});
