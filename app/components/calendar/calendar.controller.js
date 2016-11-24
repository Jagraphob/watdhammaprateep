angular.module('watApp')
    .controller('calendarCtrl', ['$rootScope', '$state', 'calendarConfig', 'events', function($rootScope, $state, calendarConfig, events){

        var vm = this;

        vm.isAdmin = $rootScope.isAdmin;
        $rootScope.$on('isAdmin',function(){
            vm.isAdmin = $rootScope.isAdmin;
            $state.reload();
        });

        events.forEach(function (event) {
            event.startsAt = new Date(event.startsAt);
        });
        var highlightEvents = events.filter(function (event) {
            return event.color.primary == "#ad2121";
        })[0];

        vm.events = events

        vm.calendarView = 'month';
        vm.viewDate = new Date();
        vm.colorSetting = {
            important: {
                primary: "#ad2121",
                secondary: "#fae3e3"
            },
            info: {
                primary: "#1e90ff",
                secondary: "#d1e8ff"
            }
        };

        /*** functions list ***/
        vm.createEvent = createEvent


        /*** functions ***/
        function createEvent() {
            // var datetime = vm.newEventDate.getTime();
            // console.log(datetime);
            events.$add({
                title: vm.newEventName,
                color: vm.newEventColor,
                startsAt: vm.newEventDate.getTime()
            })

            vm.events = events;

            vm.newEventName = "";
            vm.newEventColor = "";
            vm.newEventDate = "";
        }

    }]);
