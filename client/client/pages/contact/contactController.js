/*---------------------------------------------------------------------------

        The ContactCtrl is the controller for the contact us
        page it makes sure the side bar closes correctly.

-----------------------------------------------------------------------------*/
var app = angular.module("CalvinIntramuralsApp")

app.controller('ContactCtrl', ['$rootScope', '$scope', '$http', '$routeParams', '$uibModal', function ($rootScope, $scope, $http, $routeParams, $uibModal) {

    if ($(window).width() <= (767) && $("body").hasClass("sidebar-open")) {
        $("body").removeClass('sidebar-open');
    }
}]);