/*---------------------------------------------------------------------------

        The CreateTeamCtrl is the controller for creating a new team.
        This allows the user to create an intramural team and store it
        in the database. 

-----------------------------------------------------------------------------*/



var app = angular.module("CalvinIntramuralsApp")

app.controller('CreateTeamCtrl', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {

    // automatically closes menu bar
    if ($(window).width() <= (767) && $("body").hasClass("sidebar-open")) {
        $("body").removeClass('sidebar-open');
    }

    // GET: the list of leagues
    $http.get($rootScope.apiScope + 'league/leagues/late fall').success(function (result) {
        leagueList = JSON.parse(result);
        for (var i = 0; i < leagueList.length; i++) {
            var leagueName = leagueList[i]["name"];

            // use JQuery to add leagues to select tag
            $("#leagueSelect").append('<option value="' + leagueName + '">' + leagueName +
                '</option>')
        }
    })
    .error(function (data, status, headers, config) {
        $log.info("League retrieval failure");
    });
    
    // gets data from user regarding the team to be created
    $scope.createTeam = function () {
        var team = {
            League: $("#leagueSelect").val(),
            Name: $("#teamName").val(),

            // sets the Email to be the email of the logged in user
            Email: $rootScope.loggedIn.email
        }

        var url = "team/new";
        url = $rootScope.apiScope + url;

        // POST: creates the team
        $http.post(url, JSON.stringify(team)).success(function (result) {
            
            var url2 = 'user/join?userId=' + $rootScope.loggedIn.id +
                '&teamName=' + $("#teamName").val();

            // POST: if create is successful joins the team
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
