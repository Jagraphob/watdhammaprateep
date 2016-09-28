angular.module('watApp')
    .controller('homeCtrl', ['$scope', function($scope){

        var vm = this;

        vm.latestNewsText = "We just had an event on "
        vm.quickDhamma = "Everything that has a beginning has an end";

    }]);
