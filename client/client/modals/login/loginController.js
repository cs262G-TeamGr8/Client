/*-------------------------------------------------------------------

    The LoginCtrl provides the login function to the header of 
    pages. The correspoinding .html file specifies the layout
    of the modal, while the controller checks if the login is
    correct or adds new data for a sign up.

----------------------------------------------------------------------*/


var app = angular.module("CalvinIntramuralsApp")


app.controller('LoginCtrl', ['$rootScope', '$scope', '$http', '$uibModalInstance', '$uibModal', '$log', function ($rootScope, $scope, $http, $uibModalInstance, $uibModal, $log) {

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

    $scope.login = function () {
        var email = document.getElementById("acctEmail").value;
        var password = document.getElementById("acctPassword").value;
        var url = "user/login?email=" + email + "&password=" + password;
        url = $rootScope.apiScope + url;

        $http.get(url).success(function (result) {
            var loginInfo = JSON.parse(result);

            if (loginInfo[0].loggedIn) {
                $rootScope.loggedIn = true;
                $rootScope.loggedInName = loginInfo[0].name;
                var name = loginInfo[0].name.split(" ")[0]
                $rootScope.loginBtn = "Hi, " + name;
                $log.info(loginInfo[0].message);
                $uibModalInstance.dismiss("cancel");
            }
            else {
                if (typeof loginInfo[0].email !== null) {
                    email = document.getElementById("acctEmail").value;
                    email = loginInfo[0].email;
                    password = document.getElementById("acctPassword").value;
                    password = "";
                    alert("Incorrect password");
                }
                else {
                    email = document.getElementById("acctEmail").value;
                    email = "";
                    password = document.getElementById("acctPassword").value;
                    password = "";
                    alert("Email account not found");
                }
            }
        })
        .error(function (data, status, headers, config) {
            $log.info("Player login failure");
         });
      
    }
}]);
