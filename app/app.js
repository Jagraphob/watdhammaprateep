angular.module('watApp', ['ngRoute','firebase','ui.bootstrap'])
    .config(['$routeProvider', function($routeProvider){

        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyCpccm2y6zbLTveN6bs7w8tX8ZSIjY2IK4",
            authDomain: "watdhammaprateep-397ed.firebaseapp.com",
            databaseURL: "https://watdhammaprateep-397ed.firebaseio.com",
            storageBucket: "",
        };
        firebase.initializeApp(config);

        $routeProvider
            .when('/home', {
                template: '<home></home>'
            })
            .when('/news', {
                template: '<news></news>'
            })
            .when('/calendar', {
                template: '<calendar></calendar>'
            })
            .otherwise('/home');
    }]);
