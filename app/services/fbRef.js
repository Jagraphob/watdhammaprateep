angular.module('watApp')
    .factory("fbRef", ['$firebaseObject', 'Auth',  function($firebaseObject, auth) {

    return {
        getNewsRef: getNewsRef,
        getStorageRef: getStorageRef,
        getCalendarRef: getCalendarRef,
        getAdmin : getAdmin
    }

    function getNewsRef() {
        return firebase.database().ref().child("news");
    }

    function getCalendarRef() {
        return firebase.database().ref().child("calendar");
    }

    function getStorageRef() {
        return firebase.storage().ref();
    }

    function getAdmin() {
        // TODO
    }
}
]);
