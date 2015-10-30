// From the Single Page Routing and Templating Tutorial

// create teh module and name it app (include ngRoute for routing needs)
var app = angular.module('CalvinIntramuralsApp', ['ngRoute']);

// congfigure our routes
app.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'views/home.html',
            controller : 'homeCtrl'
        })

        // route for the leagues page
        .when('/league', {
            templateUrl : 'views/league.html',
            controller : 'leagueCtrl'
        })

        // route for the teams page
        .when('/team', {
            templateUrl: 'views/team.html',
            controller : 'teamCtrl'
        })
})

// create the controller and inject Angular's $scope
app.controller('homeCtrl', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Here is the home page';
});

app.controller('leagueCtrl', function ($scope) {
    $scope.message = 'Here is the leagues page';
});

app.controller('teamCtrl', function ($scope) {
    $scope.message = 'Here is the team page';
});