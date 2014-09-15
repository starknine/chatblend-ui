'use strict';

angular.module('chatBlendApp', [])
  .directive('quickMessage', function() {
    return {
      restrict: 'AEC',
      scope: {
        // bindings from directive attributes
      },
      templateUrl: 'partials/scripts/components/quickMessage/quickMessage.html'
    };
  });