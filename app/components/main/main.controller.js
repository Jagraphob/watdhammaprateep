angular.module('watApp')
    .controller('mainCtrl', ['$scope', '$state', '$rootScope', 'Auth', function($scope, $state, $rootScope, auth){

        var vm = this;

        vm.user = $rootScope.user;
        $scope.$on('user', function () {
            vm.user = $rootScope.user;
        });

        vm.isCollapsed = true;

        vm.login = login;
        vm.logout = logout;

        function login() {
            auth.$signInWithPopup("google").then(function(result) {
              console.log("Signed in as:", result.user.uid);
            }).catch(function(error) {
              console.error("Authentication failed :", error);
            });            
        }

        function logout() {
            auth.$signOut();
            location.reload();
        }

    }]);
