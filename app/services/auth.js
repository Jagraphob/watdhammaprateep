angular.module('watApp')
    .factory("Auth", ['$firebaseAuth', function($firebaseAuth){
        return $firebaseAuth();
    }])
    .factory("AuthRole", ['Auth', '$rootScope', function(auth, $rootScope){

        return {
            checkIsAdmin : checkIsAdmin
        }

        function checkIsAdmin(user) {
            var ref = firebase.database().ref();
            ref.child("AuthRole").child("Admin").child(user.uid).once('value').then(function(snapshot){
                if(snapshot.exists()){
                    $rootScope.isAdmin = true;
                    $rootScope.$broadcast("isAdmin");
                }
                else{
                    $rootScope.isAdmin = false;
                    $rootScope.$broadcast("isAdmin");
                }
            });
        }
    }]);
