/*-------------------------------------------------------------------

    The LoginCtrl provides the login function to the header of 
    pages. The correspoinding .html file specifies the layout
    of the modal, while the controller checks if the login is
    correct or adds new data for a sign up.

----------------------------------------------------------------------*/


var app = angular.module("CalvinIntramuralsApp")


app.controller('LoginCtrl', ['$rootScope', '$scope', '$http', '$uibModalInstance', '$uibModal', function ($rootScope, $scope, $http, $uibModalInstance, $uibModal) {

    $scope.cancel = function () {
        $uibModalInstance.dismiss("cancel");
    }

    /*var pageHeight = window.screen.height;
    alert(pageHeight);
    var pageExtender = document.querySelector('#page-extender')
    pageExtender.style.minHeight = pageHeight.toString + 'px';
    document.getElementById("main-div").style.minHeight = pageHeight.toString + 'px';*/

    $scope.forgotPassword = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'modals/forgotPassword/forgotPassword.html',
            controller: 'ForgotPasswordCtrl',
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

    $scope.signUp = function () {
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

        $uibModalInstance.dismiss("cancel")
    }
}]);
