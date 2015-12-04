/*---------------------------------------------------------------------------

        The CreateTeamCtrl is the controller for creating a new team.
        This allows the user to create an intramural team and store it
        in the database. 

-----------------------------------------------------------------------------*/



var app = angular.module("CalvinIntramuralsApp")

app.controller('CreateTeamCtrl', ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {

    $scope.message = "Create a Team";
}]);
