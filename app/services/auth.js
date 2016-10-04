angular.module('watApp')
    .factory("Auth", ['$firebaseAuth', function($firebaseAuth){
        return $firebaseAuth();
    }]);
