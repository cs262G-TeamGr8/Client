/*---------------------------------------------------------------------------

        The MainCtrl is the controller set up for the menu selector.
        It sets up the links to the differnt pages using $location and
        $routeProvder.

-----------------------------------------------------------------------------*/



var app = angular.module("CalvinIntramuralsApp")


app.controller('MainCtrl', ['$rootScope', '$scope', '$http', '$uibModal', '$compile', '$log', function ($rootScope, $scope, $http, $uibModal, $compile, $log) {

    if ($rootScope.loggedIn.value) {

    }

    /* Watches for any changes to loggedIn, signaling if someone has logged in to their account.
     * If the variable changes, first clear the list of teams. If a user is logged in, GET
     * list of teams from database and add to list. If user is not logged in, add default
     * list message option.
     */
    $rootScope.$watch(function () { return $rootScope.loggedIn.value; }, function () {
        $("#myTeams").empty();
        $("#top-menu").empty();

        $("#top-menu").append(
            '<li class="dropdown user user-menu">' +
                '<a href="#" class="dropdown-toggle" data-toggle="dropdown">' +
                    '<img src="resources/help_btn.png" class="user-image" alt="Help Button" />' +
                '</a>' +
            '</li>');

        // user is logged in
        if ($rootScope.loggedIn.value) {
            $http.get($rootScope.apiScope + "user/teams/" + $rootScope.loggedIn.username).success(function (result) {
                var teamList = JSON.parse(result);
                for (var i = 0; i < teamList.length; i++) {
                    var teamName = teamList[i]["name"]

                    // user JQuery to append team list to sidebar menu
                    $("#myTeams").append('<li><a href="#/team/' + teamName + '">' + teamName + '</a></li>')
                }
            })
            .error(function (data, status, headers, config) {
                $log.info("Player login failure");
            });

            $("#top-menu").append('<!-- User Account: style can be found in dropdown.less -->' +
                '<li class="dropdown user user-menu">' +
                    '<a href="#" class="dropdown-toggle" data-toggle="dropdown">' +
                        '<img src="resources/user_icon.png" class="user-image" alt="User Image">' +
                            '<span class="hidden-xs">' + $rootScope.loggedIn.username + '</span>' +
                    '</a>' +
                    '<ul class="dropdown-menu">' +
                    '<!-- User image -->' +
                        '<li class="user-header" style="background-color:#97252B">' +
                            '<img src="resources/user_icon.png" class="img-circle" alt="User Image">' +
                                '<p>' +
                                    $rootScope.loggedIn.username +
                                    '<small>"Win or Go Home"</small>' +
                                '</p>' +
                        '</li>' +
                    '<!-- Menu Footer-->' +
                        '<li class="user-footer">' +
                            '<div class="pull-left">' +
                                '<a href="#" class="btn btn-default btn-flat">Profile</a>' +
                            '</div>' +
                            '<div class="pull-right">' +
                                '<a id="aLogout" class="btn btn-default btn-flat" ng-click="logout()">Log out</a>' +
                            '</div>' +
                        '</li>' +
                    '</ul>' +
                '</li>');

            $compile($("#aLogout"))($scope);
        }

            // user is not logged in or logged off
        else {

            // use JQuery to append default option to sidebar menu
            $("#myTeams").append('<li><a id="aTeam" href="#"><i>Login to view your teams</i></a></li>');
            $("#aTeam").attr("ng-click", "openLoginModal()");
            $compile($("#aTeam"))($scope);

            $("#top-menu").append(
                '<li class="dropdown user user-menu">' +
                    '<!-- Menu Toggle Button -->' +
                    '<a id="aLogin" class="dropdown-toggle" data-toggle="dropdown" ng-click="openLoginModal()">' +
                        '<!-- The user image in the navbar-->' +
                        '<span>Login</span>' +
                    '</a>' +
                '</li>');
            $compile($("#aLogin"))($scope);
        }
    })

    // GET the list of current leagues and add them to the sidebar menu
    $http.get($rootScope.apiScope + "league/leagues/late fall").success(function (result) {
        leagueList = JSON.parse(result);

        for (var i = 0; i < leagueList.length; i++) {
            var leagueName = leagueList[i]["name"];

            // use JQuery to add leagues to sidebar menu
            $("#leagues").append('<li><a href="#/league/' + leagueName + '">' + leagueName + '</a></li>')
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
    }

}]);
