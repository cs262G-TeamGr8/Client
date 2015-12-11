/*---------------------------------------------------------------------------

        The JoinTeamCtrl is the controller to join a preexisting
        intramural team. The user can select the league and corresponding
        team they would like to join.

-----------------------------------------------------------------------------*/



var app = angular.module("CalvinIntramuralsApp")

app.controller('JoinTeamCtrl', ['$rootScope', '$scope', '$http', '$log', function ($rootScope, $scope, $http, $log) {

    $scope.selectedTeam = '____________';

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

    $('#leagueSelect').on('change', function (e) {
        var optionSelected = $("option:selected", this);
        var league = this.value;

        $('#teamSelect').empty();
        $('#teamSelect').append('<option value="" selected="selected" disabled="disabled">Select a league</option>');

        $http.get($rootScope.apiScope + 'league/teams/' + league).success(function (result) {
            var teamList = JSON.parse(result);

            for (var i = 0; i < teamList.length; i++) {
                $('#teamSelect')
                    .append($("<option></option>")
                    .attr("value", teamList[i]["name"])
                    .text(teamList[i]["name"]));
            }
        });

    });

    $scope.joinTeam = function () {

        var team = $('#teamSelect').val();
        var url = 'user/join?userId=' + $rootScope.loggedIn.id + '&teamName=' + team;
        $http.post($rootScope.apiScope + url).success(function (result) {
            $rootScope.loggedIn.value = true;
        })
        .error(function (data, status, headers, config) {
            alert("Create User did not work, please try again");
        });
    };

}]);
