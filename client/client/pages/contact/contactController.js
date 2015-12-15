/*---------------------------------------------------------------------------

        The ContactCtrl is the controller for the contact us
        page it makes sure the side bar closes correctly,
        and for testing purposes sets message to Contact US

-----------------------------------------------------------------------------*/

var app = angular.module("CalvinIntramuralsApp")

app.controller('ContactCtrl', [,
    function () {
    
    // automatically closes menu bar
    if ($(window).width() <= (767) && $("body").hasClass("sidebar-open")) {
        $("body").removeClass('sidebar-open');
    }

    $scope.message = "Contact Us";

}]);