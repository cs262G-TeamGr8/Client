/*---------------------------------------------------------------------------

        The HomeCtrl is the controller set up for the home page.
        It controls general data supplied as well as the code for the 
        login/register modal.

-----------------------------------------------------------------------------*/



var app = angular.module("CalvinIntramuralsApp")


app.controller('HomeCtrl', ['$rootScope', '$scope', '$http', '$uibModal', '$log', function ($rootScope, $scope, $http, $uibModal, $log) {

    if ($(window).width() <= (767) && $("body").hasClass("sidebar-open")) {
        $("body").removeClass('sidebar-open');
    }

    $scope.openSignUpModal = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'modals/signup/signup.html',
            controller: 'SignUpCtrl',
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
