/*---------------------------------------------------------------------------

        The HomeController is the controller set up for the home page.
        It controls general data supplied as well as the code for the 
        login/register modal.

-----------------------------------------------------------------------------*/



var app = angular.module("CalvinIntramuralsApp")


app.controller("HomeController", ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {

    $scope.message = 'This is the home page!';

}]);
