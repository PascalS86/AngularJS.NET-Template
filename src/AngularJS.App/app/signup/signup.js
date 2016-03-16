'use strict';

angular.module('AngularJS.App')
  .config(function ($stateProvider) {
      $stateProvider
        .state('signup', {
            url: '/signup',
            templateUrl: 'app/signup/signup.html',
            controller: 'SignupCtrl'
        });
  });