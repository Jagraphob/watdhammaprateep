angular.module('watApp')
    .controller('homeCtrl', ['$scope', function($scope){

        var vm = this;

        //carousel
        vm.active = 0;
        vm.slides = [
            {
                image : '/app/content/images/carousel1.jpg',
                id : 0
            },
            {
                image : '/app/content/images/carousel2.jpg',
                id : 1
            }
        ];

    }]);
