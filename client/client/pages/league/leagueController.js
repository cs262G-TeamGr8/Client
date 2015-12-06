/*---------------------------------------------------------------------------

        The LeagueCtrl is the controller for the specific league
        specific by a parameter set by $location. This controller will
        display info regarding a specific league and does not need 
        a log in to show.

-----------------------------------------------------------------------------*/



var app = angular.module("CalvinIntramuralsApp")

app.controller('LeagueCtrl', ['$rootScope', '$scope', '$http', '$routeParams', function ($rootScope, $scope, $http, $routeParams) {

    if ($(window).width() <= (767) && $("body").hasClass("sidebar-open")) {
        $("body").removeClass('sidebar-open');
    }

    $scope.message = $routeParams.name;
    $http.get($rootScope.apiScope + "league/teams/" + $routeParams.name)
    .success(function (data) { $scope.standings = JSON.parse(data); });

    $http.get($rootScope.apiScope + "league/schedule/" + $routeParams.name)
    .success(function (data) { $scope.schedule = JSON.parse(data); });
}]);