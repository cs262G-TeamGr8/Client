/*---------------------------------------------------------------------------

        The LeagueController is the controller for the specific league
        specific by a parameter set by $location. This controller will
        display info regarding a specific league and does not need 
        a log in to show.

-----------------------------------------------------------------------------*/



var app = angular.module("CalvinIntramuralsApp")

app.controller('LeagueController', ['$rootScope', '$scope', '$http', '$routeParams', function ($rootScope, $scope, $http, $routeParams) {

    $scope.message = 'This is a League Page!';

}]);
