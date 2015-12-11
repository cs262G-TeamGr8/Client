/*---------------------------------------------------------------------------

        The CreateTeamCtrl is the controller for creating a new team.
        This allows the user to create an intramural team and store it
        in the database. 

-----------------------------------------------------------------------------*/



var app = angular.module("CalvinIntramuralsApp")

app.controller('CreateTeamCtrl', ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {

    if ($(window).width() <= (767) && $("body").hasClass("sidebar-open")) {
        $("body").removeClass('sidebar-open');
    }

    $http.get($rootScope.apiScope + 'league/leagues/late fall').success(function (result) {
        leagueList = JSON.parse(result);

        for (var i = 0; i < leagueList.length; i++) {
            var leagueName = leagueList[i]["name"];

            // use JQuery to add leagues to select tag
            $("#leagueSelect").append('<option value="' + leagueName + '">' + leagueName + '</option>')
        }
    })
    .error(function (data, status, headers, config) {
        $log.info("League retrieval failure");
    });
}]);
