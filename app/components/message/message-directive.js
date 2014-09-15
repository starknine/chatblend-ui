'use strict';

angular.module('chatBlendApp', [])
  .directive('message', function() {
    return {
      restrict: 'AEC',
      scope: {
        // bindings from directive attributes
      },
      templateUrl: 'partials/scripts/components/message/message.html'
    };
  });