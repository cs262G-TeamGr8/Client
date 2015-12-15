/*---------------------------------------------------------------------------

        The ContactCtrl is the controller for the contact us
        page it makes sure the side bar closes correctly.

-----------------------------------------------------------------------------*/
var app = angular.module("CalvinIntramuralsApp")

app.controller('ContactCtrl', ['$rootScope', '$scope', '$http', '$routeParams', function ($rootScope, $scope, $http, $routeParams) {

    if ($(window).width() <= (767) && $("body").hasClass("sidebar-open")) {
        $("body").removeClass('sidebar-open');
    }

    $scope.message = "Contact Us";

}]);