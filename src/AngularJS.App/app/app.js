'use strict';

angular.module('AngularJS.App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'LocalStorageModule', 
  'angular-loading-bar',
  'angularSpinner',
  'ui.router',
  'SignalR',
  'ui.bootstrap'
]).constant('ngAuthSettings', {
    apiServiceBaseUri: "http://localhost:7918/",
    clientId: 'ngAuthApp'
})
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
      $urlRouterProvider
        .otherwise('/');

      $locationProvider.html5Mode(true);
      $httpProvider.interceptors.push('authInterceptorService');
  })

  //.factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
  //    return {
  //        // Add authorization token to headers
  //        request: function (config) {
  //            config.headers = config.headers || {};
  //            if ($cookieStore.get('token')) {
  //                config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
  //            }
  //            return config;
  //        },

  //        // Intercept 401s and redirect you to login
  //        responseError: function (response) {
  //            if (response.status === 401) {
  //                $location.path('/login');
  //                // remove any stale tokens
  //                $cookieStore.remove('token');
  //                return $q.reject(response);
  //            }
  //            else {
  //                return $q.reject(response);
  //            }
  //        }
  //    };
  //})


  .run(function ($rootScope, $state, $location, authService) {
      // Redirect to login if route requires auth and you're not logged in
      $rootScope.$on('$stateChangeStart', function (event, next) {
          if (!authService.authentication.isAuth) {
              if (next.name !== 'home' && next.name !== 'login' && next.name !== 'signup') {
                  delete sessionStorage.character;

                  $state.go('home');
                  event.preventDefault();
                  return;

              }
          }

      });
  });
