'use strict';

angular.module('chatBlendApp', [])
  .directive('channel', function() {
    return {
      restrict: 'AEC',
      scope: {
        // bindings from directive attributes
      },
      templateUrl: 'partials/scripts/components/channel/channel.html'
    };
  });