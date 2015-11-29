/*-------------------------------------------------------------------

    The SignUpCtrl provides the view for a user to create
    an intramural account in order to join/create a team
    and access other logged in features of the webservice.

----------------------------------------------------------------------*/

var app = angular.module("CalvinIntramuralsApp")


app.controller('SignUpCtrl', ['$rootScope', '$scope', '$http', '$uibModalInstance', '$uibModal', function ($rootScope, $scope, $http, $uibModalInstance, $uibModal) {


    $scope.cancel = function () {
        $uibModalInstance.dismiss("cancel");
    }

    $scope.$watch('findGender', function (value) {
        $scope.gender = value;
    })

    $scope.$watch('findYearGender', function (value) {
        $scope.year = value;
    })

    $scope.signup = function () {

        var account = {
            Username: document.getElementById("fname").value + " " + document.getElementById("lname").value,
            Password: document.getElementById("password").value,
            Email: document.getElementById("email").value
        }

        var url = "user/new";
        url = $rootScope.apiScope + url;
        $http.post(url, JSON.stringify(account)).success(function (result) {
            $rootScope.loggedIn = true;
            $rootScope.loggedInName = result;
            var name = result.split(" ")[0];
            $rootScope.loginBtn = "Hi, " + name;
            $uibModalInstance.dismiss("cancel");
        })
        .error(function (data, status, headers, config) {
            alert("Create User did not work, please try again");
        });
    }

}]);
