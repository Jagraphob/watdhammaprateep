angular.module('watApp')
    .controller('calendarCtrl', ['$scope', 'calendarConfig', function($scope, calendarConfig){

        var vm = this;

        vm.calendarView = 'month';
        vm.viewDate = new Date();

        vm.events = [
            {
                title: "ตักบาตร",
                startsAt: new Date("October 3, 2016 9:30:00"),
                color: calendarConfig.colorTypes.info
            },
            {
                title: "Loy Kra Tong",
                startsAt: new Date("October 13, 2016 9:30:00"),
                color: calendarConfig.colorTypes.info
            },
            {
                title: "Meditation",
                startsAt: new Date("October 13, 2016 17:30:00"),
                color: calendarConfig.colorTypes.info
            }
        ];
    }]);
