/*---------------------------------------------------------------------------

        The LeagueCtrl is the controller for the specific league
        specific by a parameter set by $location. This controller will
        display info regarding a specific league and does not need 
        a log in to show.

-----------------------------------------------------------------------------*/



var app = angular.module("CalvinIntramuralsApp")

app.controller('LeagueCtrl', ['$rootScope', '$scope', '$http', '$routeParams', function ($rootScope, $scope, $http, $routeParams) {

    $scope.message = $routeParams.name;
    $http.get($rootScope.apiScope + "league/teams/" + $routeParams.name)
    .success(function (data) { $scope.standings = JSON.parse(data); });

    $http.get($rootScope.apiScope + "league/schedule/" + $routeParams.name)
    .success(function (data) { $scope.schedule = JSON.parse(data); });
}]);

app.filter("myFilter", function () {
    return function (items, days) {
        var currDate = Date.now();
        var endDate = currDate - (days * 86400000); // 1 day in ms
        return items.filter(function (item) {
            return (item.date > endDate);
        });

    };
});