angular.module('watApp', ['ui.router','firebase', 'mwl.calendar', 'ui.bootstrap', 'ui.bootstrap.datetimepicker'])
    .run(['$rootScope', '$stateParams', function($rootScope, $stateParams){
        $rootScope.$stateParams = $stateParams;

        //spinner for stateChange
        $rootScope.$on('$stateChangeStart',function(){
            $rootScope.stateIsLoading = true;
        });
        $rootScope.$on('$stateChangeSuccess',function(){
            $rootScope.stateIsLoading = false;
        });

    }])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyCpccm2y6zbLTveN6bs7w8tX8ZSIjY2IK4",
            authDomain: "watdhammaprateep-397ed.firebaseapp.com",
            databaseURL: "https://watdhammaprateep-397ed.firebaseio.com",
            storageBucket: "watdhammaprateep-397ed.appspot.com",
            messagingSenderId: "770839908125"
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
              controller: 'calendarCtrl',
              resolve: {
                  events: ['fbRef', '$firebaseArray', function(fbRef, $firebaseArray){
                      return $firebaseArray(fbRef.getCalendarRef()).$loaded();
                 }]
              }
            })
            .state('contactus', {
                url: '/contact',
                templateUrl: '/app/components/contactus/contactus.html',
                controllerAs: 'vm',
                controller: 'contactCtrl'
            });
            $urlRouterProvider.otherwise("/home");
    }]);
