angular.module('watApp')
    .controller('contactCtrl', ['$scope', '$rootScope', 'Auth', function($scope, $rootScope, auth){

        var vm = this;

        var user = auth.$getAuth();
        console.log(user);


    }]);
