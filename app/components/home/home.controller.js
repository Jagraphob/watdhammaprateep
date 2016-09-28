angular.module('watApp')
    .controller('homeCtrl', ['$scope', function($scope){

        var vm = this;

        vm.latestNewsText = "We just had an event on 25th of November"
        vm.quickDhamma = "Everything that has a beginning has an end";
        vm.latestNewsPic = "/app/content/images/latestNews.jpg"

    }]);
