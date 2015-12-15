/*-------------------------------------------------------------------

    The ForgotPasswordCtrl provides the forgot password
    function that will send an email to the provided email
    address with the password corresponding to the account.

----------------------------------------------------------------------*/

var app = angular.module("CalvinIntramuralsApp")

app.controller('ForgotPasswordCtrl', ['$rootScope', '$scope', '$http', '$uibModalInstance',
    '$uibModal', function ($rootScope, $scope, $http, $uibModalInstance, $uibModal) {

    // closes modal
    $scope.cancel = function () {
        $uibModalInstance.dismiss("cancel");
    }
}]);
