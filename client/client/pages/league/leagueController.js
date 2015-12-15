/*---------------------------------------------------------------------------

        The LeagueCtrl is the controller for the specific league
        specific by a parameter set by $location. This controller will
        display info regarding a specific league and does not need 
        a log in to show.

-----------------------------------------------------------------------------*/



var app = angular.module("CalvinIntramuralsApp")

app.controller('LeagueCtrl', ['$rootScope', '$scope', '$http', '$routeParams',
    function ($rootScope, $scope, $http, $routeParams) {

    // automatically closes menu bar
    if ($(window).width() <= (767) && $("body").hasClass("sidebar-open")) {
        $("body").removeClass('sidebar-open');
    }

    $scope.toggle = 0;
    $scope.message = $routeParams.name;

    // GET: gets all teams in selected league
    $http.get($rootScope.apiScope + "league/teams/" + $routeParams.name)
    .success(function (data) { $scope.standings = JSON.parse(data); });

    // GET: gets the schedule for the while league
    $http.get($rootScope.apiScope + "league/schedule/" + $routeParams.name)
    .success(function (data) { $scope.schedule = JSON.parse(data); });
}]);

