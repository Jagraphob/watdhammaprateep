angular.module('watApp', ['ui.router','firebase','ui.bootstrap'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyCpccm2y6zbLTveN6bs7w8tX8ZSIjY2IK4",
            authDomain: "watdhammaprateep-397ed.firebaseapp.com",
            databaseURL: "https://watdhammaprateep-397ed.firebaseio.com",
            storageBucket: "",
        };
        firebase.initializeApp(config);

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/app/components/home/home.html',
                controllerAs: 'vm',
                controller: 'homeCtrl'
            })
            .state('news', {
              url: '/news',
              templateUrl: '/app/components/news/news.html',
              controllerAs: 'vm',
              controller: 'newsCtrl'
            })
            .state('calendar', {
              url: '/calendar',
              templateUrl: '/app/components/calendar/calendar.html',
              controllerAs: 'vm',
              controller: 'calendarCtrl'
            });
            $urlRouterProvider.otherwise("/home");

    }]);
