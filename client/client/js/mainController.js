﻿/*---------------------------------------------------------------------------

        The MainCtrl is the controller set up for the menu selector.
        It sets up the links to the differnt pages using $location and
        $routeProvder.

-----------------------------------------------------------------------------*/

var app = angular.module("CalvinIntramuralsApp")

app.controller('MainCtrl', ['$rootScope', '$scope', '$http', '$uibModal', '$compile', '$log',
    '$location', function ($rootScope, $scope, $http, $uibModal, $compile, $log, $location) {

    /* Watches for any changes to loggedIn, signaling if someone has logged in to their account.
     * If the variable changes, first clear the list of teams. If a user is logged in, GET
     * list of teams from database and add to list. If user is not logged in, add default
     * list message option.
     */
    $rootScope.$watch(function () { return $rootScope.loggedIn.value; }, function () {
        $("#myTeams").empty();

        // user is logged in
        if ($rootScope.loggedIn.value) {

            // GET: returns list of teams user is currently a member of
            $http.get($rootScope.apiScope + "user/teams/" + $rootScope.loggedIn.username)
            .success(function (result) {
                var teamList = JSON.parse(result);
                for (var i = 0; i < teamList.length; i++) {
                    var teamName = teamList[i]["name"]

                    // user JQuery to append team list to sidebar menu
                    $("#myTeams").append('<li><a href="#/team/' + teamName + '">' +
                        teamName + '</a></li>')
                }
            })
            .error(function (data, status, headers, config) {
                $log.info("Player login failure");
            });
        }

        // user is not logged in or logged off
        else {

            // use JQuery to append default option to sidebar menu
            $("#myTeams").append('<li><a id="aTeam" href="#"><i>' + 
                'Login to view your teams</i></a></li>');
            $("#aTeam").attr("ng-click", "openLoginModal()");

            // $compile makes the just added html calls functional
            $compile($("#aTeam"))($scope);
        }
    })

    // GET: returns the list of current leagues and adds them to the sidebar menu
    $http.get($rootScope.apiScope + "league/leagues/late fall").success(function (result) {
        leagueList = JSON.parse(result);
        for (var i = 0; i < leagueList.length; i++) {
            var leagueName = leagueList[i]["name"];

            // use JQuery to add leagues to sidebar menu
            $("#leagues").append('<li><a href="#/league/' + leagueName + '">' +
                leagueName + '</a></li>')
        }
    })
    .error(function (data, status, headers, config) {
        $log.info("Player login failure");
    });

    // opens the login modal
    $scope.openLoginModal = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'modals/login/login.html',
            controller: 'LoginCtrl',
            animation: false,
            windowClass: 'app-modal-window'
        });

        modalInstance.result.then(function () {

            //runs in here if something passed back in close()
        }, function () {

            //runs if modal is dismissed
            console.log("Results dismissed at: " + new Date());
        });
    }

    $scope.logout = function () {
        $rootScope.loggedIn = {
            "value": false,
            "username": 'Guest',
            "id": -1,
            "email": ''
        }
        $location.path('/');
    }

    $rootScope.newTeam = ""
 
    /* Watches to see if a new team was added to the current user. If newTeam changes,
     * we use JQuery to append that team to the My Teams option in the sidebar.
     */
    $rootScope.$watch(function () { return $rootScope.newTeam; }, function () {
        if ($rootScope.newTeam != "") {
        // user JQuery to append team list to sidebar menu
            $("#myTeams").append('<li><a href="#/team/' + $rootScope.newTeam + '">' +
                $rootScope.newTeam + '</a></li>')
        }
    })
}]);
