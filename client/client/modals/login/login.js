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


}]);
