/*-------------------------------------------------------------------

    The SignUpCtrl provides the view for a user to create
    an intramural account in order to join/create a team
    and access other logged in features of the webservice.

----------------------------------------------------------------------*/

var app = angular.module("CalvinIntramuralsApp")


app.controller('SignUpCtrl', ['$rootScope', '$scope', '$http', '$uibModalInstance', '$uibModal',
    function ($rootScope, $scope, $http, $uibModalInstance, $uibModal) {

    // closes modal
    $scope.cancel = function () {
        $uibModalInstance.dismiss("cancel");
    }

    // watches for change in gender radio button
    $scope.$watch('findGender', function (value) {
        $scope.gender = value;
    })

    // creates a new account with the given data in the form
    $scope.signup = function () {

        // creates account variable to be passed to database
        var account = {
            Username: $("#fname").val() + " " + $("#lname").val(),
            Password: $("#password").val(),
            Email: $("#email").val()
        }

        var url = "user/new";
        url = $rootScope.apiScope + url;

        // POST: creates a new user with the account variable data
        $http.post(url, JSON.stringify(account)).success(function (result) {
            $rootScope.loggedIn.value = true;
            $rootScope.loggedIn.username = result;
            $uibModalInstance.dismiss("cancel");

            // GET: returns the id and email address for the newly created account
            $http.get($rootScope.apiScope + '/user/info').success(function (result) {
                var info = JSON.parse(result);
                $rootScope.loggedIn.id = info[0].ID;
                $rootScope.loggedIn.email = info[0].email;
            });
        })
        .error(function (data, status, headers, config) {
            alert("Create User did not work, please try again");
        });
    }
}]);
