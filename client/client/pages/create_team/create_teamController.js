/*---------------------------------------------------------------------------

        The CreateTeamCtrl is the controller for creating a new team.
        This allows the user to create an intramural team and store it
        in the database. 

-----------------------------------------------------------------------------*/



var app = angular.module("CalvinIntramuralsApp")

app.controller('CreateTeamCtrl', ['$rootScope', '$scope', '$http', '$location', function ($rootScope, $scope, $http, $location) {

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

    $scope.createTeam = function () {
        var team = {
            League: $("#leagueSelect").val(),
            Name: $("#teamName").val(),
            Email: $rootScope.loggedIn.email
        }

        var url = "team/new";
        url = $rootScope.apiScope + url;
        $http.post(url, JSON.stringify(team)).success(function (result) {
            
            var url2 = 'user/join?userId=' + $rootScope.loggedIn.id + '&teamName=' + $("#teamName").val();
            $http.post($rootScope.apiScope + url2).success(function (result) {
 
            $rootScope.newTeam = $("#teamName").val();
            $location.path('/team/' + $rootScope.newTeam);
            $rootScope.justJoinedTeam.value = true;
            $rootScope.justJoinedTeam.visitCtr = 0;
            $rootScope.justJoinedTeam.message = "created";

            })
            .error(function (data, status, headers, config) {
                alert("Join Team did not work, please try again");
            });
        })
        .error(function (data, status, headers, config) {
            alert("Create Team did not work, please try again");
        });
    }

}]);
