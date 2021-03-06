﻿/*-----------------------------------------------------------------------------------------------

    This app references the intramurals database, which has yet to be constructed. 
    Angular controllers are used to control the viewing of pages and the data binding
    ind order to display specific statistics and data. As of 10/27/2015, both the client and
    the database are both underconstruction. There is no Web API, just a database on a server
    for data gathering.
            
-------------------------------------------------------------------------------------------------*/

var app = angular.module("CalvinIntramuralsApp", ["ui.bootstrap", "ngRoute", "ngAnimate"])
    .config(['$controllerProvider', function ($controllerProvider) {
        $controllerProvider.allowGlobals();
    }])

    // configure the routes for sidebar menu options
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider

                // Home Page
                .when('/', {
                    templateUrl: 'pages/home/home.html',
                    controller: 'HomeCtrl'
                })

                // Specific Team Page
                .when('/team/:name', {
                    templateUrl: 'pages/team/team.html',
                    controller: 'TeamCtrl'
                })

                // Specific League Page
                .when('/league/:name', {
                    templateUrl: 'pages/league/league.html',
                    controller: 'LeagueCtrl'
                })

                // Create a Team Page
                .when('/create', {
                    templateUrl: 'pages/create_team/create_team.html',
                    controller: 'CreateTeamCtrl'
                })

                // Join a Team Page
                .when('/join', {
                    templateUrl: 'pages/join_team/join_team.html',
                    controller: 'JoinTeamCtrl'
                })

                // Contact Us Page
                .when('/contact', {
                    templateUrl: 'pages/contact/contact.html',
                    controller: 'ContactCtrl'
                })

                // FAQ page
                .when('/faq', {
                    templateUrl: 'pages/faq/faq.html',
                })

                // Settings page
                .when('/settings', {
                    templateUrl: 'pages/settings/settings.html',
                    controller: 'SettingsCtrl'
                })

        }]);

// default setup when app runs
app.run(function ($rootScope) {
    var liveApi = "http://intramuralsapi.azurewebsites.net/api/";
    $rootScope.apiScope = liveApi;

    // $rootScope.loggedIn controls the global logged in variables to display variables correctly
    $rootScope.loggedIn = {
        "value": false,
        "username": 'Guest',
        "id": -1,
        "email":''
    }

    // $rootScope.justJoinedTeam controls the global variables for joining/creating a new team
    $rootScope.justJoinedTeam = {
        "value": false,
        "visitCtr": 0,
        "message": ''
    }
});