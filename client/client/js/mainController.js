/*---------------------------------------------------------------------------

        The MainCtrl is the controller set up for the menu selector.
        It sets up the links to the differnt pages using $location and
        $routeProvder.

-----------------------------------------------------------------------------*/



var app = angular.module("CalvinIntramuralsApp")


app.controller('MainCtrl', ['$rootScope', '$scope', '$http', '$uibModal', function ($rootScope, $scope, $http, $uibModal) {

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

}]);
