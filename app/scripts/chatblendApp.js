'use strict';

angular.module('chatblendApp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'partials/chats.html',
        controller: 'ChatsCtrl'
      })
      .when('/manage', {
        templateUrl: 'partials/manage.html',
        controller: 'ManageCtrl'
      })
      .when('/manage/account', {
        templateUrl: 'partials/manage/account.html',
        controller: 'ManageAccountCtrl'
      })
      .when('/manage/users', {
        templateUrl: 'partials/manage/agents.html',
        controller: 'ManageAgentsCtrl'
      })
      .when('/manage/channels', {
        templateUrl: 'partials/manage/channels.html',
        controller: 'ManageChannelsCtrl'
      })
      .when('/manage/domains', {
        templateUrl: 'partials/manage/domains.html',
        controller: 'ManageDomainsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;