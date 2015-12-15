/*-------------------------------------------------------------------

    The LoginCtrl provides the login function to the header of 
    pages. The correspoinding .html file specifies the layout
    of the modal, while the controller checks if the login is
    correct or adds new data for a sign up.

----------------------------------------------------------------------*/

var app = angular.module("CalvinIntramuralsApp")

app.controller('LoginCtrl', ['$rootScope', '$scope', '$http', '$uibModalInstance', '$uibModal',
    '$log', function ($rootScope, $scope, $http, $uibModalInstance, $uibModal, $log) {

    // automatically closes menu bar
    if ($(window).width() <= (767) && $("body").hasClass("sidebar-open")) {
        $("body").removeClass('sidebar-open');
    }

    // closes modal
    $scope.cancel = function () {
        $uibModalInstance.dismiss("cancel");
    }

    // opens the forgot password modal
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

    // opens the sign up modal
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

    /* Login checks for authentification with the users in the database. If the 
    * database returns a value of true, then log the user in. If the return value
    * is false, check if email value was returned. If email is returned, then
    * password is incorrect. If no email is returned, then the username does not
    * exist in the database.
    */
    $scope.login = function () {
        var email = $("#acctEmail").val();
        var password = $("#acctPassword").val();
        var url = "user/login?email=" + email + "&password=" + password;
        url = $rootScope.apiScope + url;

        // GET: returns user info after login attempt
        $http.get(url).success(function (result) {
            var loginInfo = JSON.parse(result);

            // user account is verified
            // set login global variables with new values
            if (loginInfo[0].loggedIn) {
                $rootScope.loggedIn.value = true;
                $rootScope.loggedIn.username = loginInfo[0].name;
                $rootScope.loggedIn.id = loginInfo[0].id;
                $rootScope.loggedIn.email = loginInfo[0].email;
                $log.info(loginInfo[0].message);
                $uibModalInstance.dismiss("cancel");
            }
            
            // user account is not verified, check for issue
            else {

                // account exists, password is incorrect
                // reset password field, keep email in username field
                if (typeof loginInfo[0].email !== null) {
                    $("#acctEmail").val(loginInfo[0].email);
                    $("#acctPassword").val('');
                    alert("Incorrect password");
                }

                // account does not exist
                // reset email and password fields
                else {
                    $("#acctEmail").val('');
                    $("#acctPassword").val('');
                    alert("Email account not found");
                }
            }
        })
        .error(function (data, status, headers, config) {
            $log.info("Player login failure");
         });
    }
}]);
