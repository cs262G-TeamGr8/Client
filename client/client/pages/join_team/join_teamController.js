/*---------------------------------------------------------------------------

        The JoinTeamCtrl is the controller to join a preexisting
        intramural team. The user can select the league and corresponding
        team they would like to join.

-----------------------------------------------------------------------------*/



var app = angular.module("CalvinIntramuralsApp")

app.controller('JoinTeamCtrl', ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {

    $scope.message = "Join a Team";
}]);
