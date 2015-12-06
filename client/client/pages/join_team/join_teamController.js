/*---------------------------------------------------------------------------

        The JoinTeamCtrl is the controller to join a preexisting
        intramural team. The user can select the league and corresponding
        team they would like to join.

-----------------------------------------------------------------------------*/



var app = angular.module("CalvinIntramuralsApp")

app.controller('JoinTeamCtrl', ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {

    if ($(window).width() <= (767) && $("body").hasClass("sidebar-open")) {
        $("body").removeClass('sidebar-open');
    }

    $scope.message = "Join a Team";
}]);
