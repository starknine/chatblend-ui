'use strict';

angular.module('chatblendApp', [])
  .service('Api', function($resource) {
    this.channels = $resource('/api/v1/channels/:id', { 'access_token': '' });
    this.conversations = $resource('/api/v1/conversations/:id', { 'access_token': '' });
    this.messages = $resource('/api/v1/messages/:id', { 'access_token': '' });
    this.quickMessages = $resource('/api/v1/channels/:channel_id/quick-messages/:id', { 'access_token': '' });
    this.visitors = $resource('/api/v1/visitors/:id', { 'access_token': '' });
  });