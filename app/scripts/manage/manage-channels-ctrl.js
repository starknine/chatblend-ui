'use strict';

angular.module('chatblendApp')
  .controller('ManageChannelsCtrl', ['$scope', 'Api', function ($scope, Api) {
    Api.channels.query(function (results) {
      $scope.channels = results;
    });
  }]);
