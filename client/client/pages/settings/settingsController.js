/*---------------------------------------------------------------------------

        The SettingsCtrl is the controller for the settings option
        in the menu bar. Based on the logined in profile, 
        this controller will display the current info regarding a specific
        user and allow for some settings.

-----------------------------------------------------------------------------*/



var app = angular.module("CalvinIntramuralsApp")

app.controller('SettingsCtrl', ['$rootScope', '$scope', '$http', '$routeParams', '$uibModal', function ($rootScope, $scope, $http, $routeParams, $uibModal) {

    if ($(window).width() <= (767) && $("body").hasClass("sidebar-open")) {
        $("body").removeClass('sidebar-open');
    }

    $scope.message = 'This is the settings page!';

    // GET the list of current teams and for subscription settings
    $http.get($rootScope.apiScope + "league/leagues/late fall").success(function (result) {
        // user is logged in
        if ($rootScope.loggedIn.value) {
            $http.get($rootScope.apiScope + "user/teams/" + $rootScope.loggedIn.username).success(function (result) {
                var $scope.teamList = JSON.parse(result);
            })
            .error(function (data, status, headers, config) {
                $log.info("Player login failure");
            });
        }

}]);
