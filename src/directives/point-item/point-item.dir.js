'use strict';

angular.module('app').directive('pointItem', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/point-item/point-item.html',
    scope: {
      point: '='
    },
    link: link
  };

  function link(scope) {
  	
  }

});
