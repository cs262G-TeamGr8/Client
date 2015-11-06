/*-------------------------------------------------------------------

    The SignUpCtrl provides the view for a user to create
    an intramural account in order to join/create a team
    and access other logged in features of the webservice.

----------------------------------------------------------------------*/

var app = angular.module("CalvinIntramuralsApp")


app.controller('SignUpCtrl', ['$rootScope', '$scope', '$http', '$uibModalInstance', '$uibModal', function ($rootScope, $scope, $http, $uibModalInstance, $uibModal) {

    $scope.cancel = function () {
        $uibModalInstance.dismiss("cancel");
    }

    $scope.$watch('findGender', function (value) {
        $scope.gender = value;
    })

    $scope.$watch('findYearGender', function (value) {
        $scope.year = value;
    })

}]);
