/*---------------------------------------------------------------------------

        The TeamCtrl is the controller for the myTeams option
        in the menu bar. Based on the parameter sent in by $location, 
        this controller will display the current info regarding a specific
        team for which the logged in user is a part of.

-----------------------------------------------------------------------------*/


var app = angular.module("CalvinIntramuralsApp")

app.controller('TeamCtrl', ['$rootScope', '$scope', '$http', '$routeParams', '$uibModal', function ($rootScope, $scope, $http, $routeParams, $uibModal) {

    if ($(window).width() <= (767) && $("body").hasClass("sidebar-open")) {
        $("body").removeClass('sidebar-open');
    }

    $rootScope.justJoinedTeam.visitCtr++;
    if ($rootScope.justJoinedTeam.visitCtr > 1 && $rootScope.justJoinedTeam.value == true) {
        $rootScope.justJoinedTeam.value = false;
    }

    $scope.days = 9999;
    $scope.toggle = 0;

    $scope.message = $routeParams.name;
    $http.get($rootScope.apiScope + "team/schedule/" + $routeParams.name)
    .success(function (data) { $scope.schedule = JSON.parse(data); });
    $http.get($rootScope.apiScope + "team/players/" + $routeParams.name)
    .success(function (data) { $scope.roster = JSON.parse(data); });
}]);

app.filter("upComing", function () {
    return function (items, days) {
        var currDate = Date.now();
        var endDate = currDate + (days * 86400000); // 1 day in ms
        return items.filter(function (item) {
            return (item.date > currDate && item.date < endDate);
        });

    };
});