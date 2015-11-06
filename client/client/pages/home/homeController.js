/*---------------------------------------------------------------------------

        The HomeCtrl is the controller set up for the home page.
        It controls general data supplied as well as the code for the 
        login/register modal.

-----------------------------------------------------------------------------*/



var app = angular.module("CalvinIntramuralsApp")


app.controller('HomeCtrl', ['$rootScope', '$scope', '$http', '$location', function ($rootScope, $scope, $http, $location) {

    $scope.message = 'This is the home page!';

    $scope.teamPage = function () {
        $location.path('/team/hello')
    }

}]);
