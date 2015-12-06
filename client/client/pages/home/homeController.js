/*---------------------------------------------------------------------------

        The HomeCtrl is the controller set up for the home page.
        It controls general data supplied as well as the code for the 
        login/register modal.

-----------------------------------------------------------------------------*/



var app = angular.module("CalvinIntramuralsApp")


app.controller('HomeCtrl', ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {

    if ($(window).width() <= (767) && $("body").hasClass("sidebar-open")) {
        $("body").removeClass('sidebar-open');
    }

    $scope.message = 'This is the home page!';

}]);
