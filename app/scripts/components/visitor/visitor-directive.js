'use strict';

angular.module('chatBlendApp', [])
  .directive('visitor', function() {
    return {
      restrict: 'AEC',
      scope: {
        // bindings from directive attributes
      },
      templateUrl: 'partials/scripts/components/visitor/visitor.html'
    };
  });