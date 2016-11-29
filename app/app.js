angular.module('watApp', ['ui.router','firebase', 'mwl.calendar', 'ui.bootstrap', 'ui.bootstrap.datetimepicker'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

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
                controller: 'homeCtrl',
                resolve: {
                    quickDhamma: ['fbRef', '$firebaseObject', function(fbRef, $firebaseObject){
                        return $firebaseObject(fbRef.getQuickDhamma()).$loaded();
                    }]
                }
            })
            .state('news', {
              url: '/news',
              templateUrl: '/app/components/news/news.html',
              controllerAs: 'vm',
              controller: 'newsCtrl',
              resolve: {
                  news: ['fbRef', '$firebaseArray', function(fbRef, $firebaseArray){
                      return $firebaseArray(fbRef.getNewsRef().orderByChild("timestamp")).$loaded();
                  }]
              }
            })
            .state('calendar', {
              url: '/calendar',
              templateUrl: '/app/components/calendar/calendar.html',
              controllerAs: 'vm',
              controller: 'calendarCtrl',
              resolve: {
                  events: ['fbRef', '$firebaseArray', function(fbRef, $firebaseArray){
                      return $firebaseArray(fbRef.getCalendarRef().orderByChild("startsAt")).$loaded();
                 }]
              }
            })
            .state('about', {
                url: '/about',
                templateUrl: '/app/components/about/about.html',
                controllerAs: 'vm',
                controller: 'aboutCtrl'
            });
            $urlRouterProvider.otherwise("/home");
    }])
    .run(['$rootScope', '$stateParams', 'Auth', 'AuthRole', function($rootScope, $stateParams, auth, AuthRole){

        $rootScope.$stateParams = $stateParams;
        $rootScope.user = null;
        $rootScope.isAdmin = false;

        //spinner for stateChange
        $rootScope.$on('$stateChangeStart',function(){
            $rootScope.stateIsLoading = true;
        });
        $rootScope.$on('$stateChangeSuccess',function(){
            $rootScope.stateIsLoading = false;
        });

        auth.$onAuthStateChanged(function(user){
            if (user) {
                $rootScope.user = user;
                AuthRole.checkIsAdmin(user);
                $rootScope.$broadcast("user");
                console.log("Signed in as:", user.uid);
              } else {
                $rootScope.user = null;
                $rootScope.$broadcast("user");
                console.log("Signed Out");
              }
        });

    }])
