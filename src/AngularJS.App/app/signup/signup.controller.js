'use strict';
angular.module('AngularJS.App').controller('SignupCtrl', ['$scope', '$location', '$timeout', 'authService', function ($scope, $location, $timeout, authService) {

    $scope.savedSuccessfully = false;
    $scope.message = "";

    $scope.registration = {
        email:"",
        userName: "",
        password: "",
        confirmPassword: ""
    };
    $scope.clicked = false;
    $scope.signUp = function () {
        $scope.clicked = true;
        authService.saveRegistration($scope.registration).then(function (response) {
            $scope.clicked = false;
            $scope.savedSuccessfully = true;
            $scope.message = "You are signed up now. You'll be redirected to the login page in a few moments";
            startTimer();

        },
         function (response) {
             $scope.clicked = false;
             var errors = [];
             for (var key in response.data.ModelState) {
                 for (var i = 0; i < response.data.ModelState[key].length; i++) {
                     errors.push(response.data.ModelState[key][i]);
                 }
             }
             $scope.message = "Error at registration:" + errors.join(' ');
         });
    };

    var startTimer = function () {
        var timer = $timeout(function () {
            $timeout.cancel(timer);
            $location.path('/login');
        }, 2000);
    }

}]);