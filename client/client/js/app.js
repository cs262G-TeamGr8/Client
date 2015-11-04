/*-----------------------------------------------------------------------------------------------

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
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'pages/home/home.html',
                    controller: 'HomeCtrl'
                })
                .when('/team/:name', {
                    templateUrl: 'pages/team/team.html',
                    controller: 'TeamCtrl'
                })
                .when('/league/:name', {
                    templateUrl: 'pages/league/league.html',
                    controller: 'LeagueCtrl'
                })

        }]);

/*
    In order to set the url so that the RouteProvider can modify the view template,
    need to change using $location
*/