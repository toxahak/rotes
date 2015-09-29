'use strict';

angular.module('app').directive('pointForm', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/point-form/point-form.html',
    scope: {
      onCreate: '&'
    },
    link: link
  };



  function link(scope) {

    scope.onSubmit = function(name) {
      scope.name = null;
      if(scope.onCreate) {
        scope.onCreate(name);
      }
    }
  }

});
