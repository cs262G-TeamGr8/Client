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
        /*var user = {
            fname: document.getElementById("fname").value,
            lname: document.getElementById("lname").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        };*/

        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        var url = "user/new?name=" + fname + " " + lname + "&password=" + password + "&email=" + email;
        url = $rootScope.apiScope + url;
        $http.post(url).success(function (data) {

        })
        .error(function (data, status, headers, config) {
            alert("Create User did not work, please try again");
        });
    }

}]);
