'use strict';

angular.module('chatBlendApp', [])
  .directive('conversation', function() {
    return {
      restrict: 'AEC',
      scope: {
        // bindings from directive attributes
      },
      templateUrl: 'partials/scripts/components/conversation/conversation.html'
    };
  });