angular
.module('watApp')
.controller('notificationModalCtrl', ['$scope', '$uibModalInstance', 'message', notificationModalCtrl]);

function notificationModalCtrl($scope, $uibModalInstance, message) {
    var vm = this;
    vm.message = message;
}
