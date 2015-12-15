/*---------------------------------------------------------------------------

        The HomeCtrl is the controller set up for the home page.
        It controls general data supplied as well as the code for the 
        login/register modal.

-----------------------------------------------------------------------------*/



var app = angular.module("CalvinIntramuralsApp")


app.controller('HomeCtrl', ['$scope', '$uibModal', '$log',
    function ($scope, $uibModal, $log) {

    // automatically closes menu bar
    if ($(window).width() <= (767) && $("body").hasClass("sidebar-open")) {
        $("body").removeClass('sidebar-open');
    }

    // opens the sign up modal
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
