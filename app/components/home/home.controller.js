angular.module('watApp')
    .controller('homeCtrl', ['$rootScope', '$state', '$uibModal', 'quickDhamma', function($rootScope, $state, $uibModal,quickDhamma){

        var vm = this;

        vm.updateQuickDhamma = updateQuickDhamma;

        vm.isAdmin = $rootScope.isAdmin;
        $rootScope.$on('isAdmin',function(){
            vm.isAdmin = $rootScope.isAdmin;
            $state.reload();
        });

        vm.quickDhamma = quickDhamma.$value;

        function updateQuickDhamma() {
            quickDhamma.$value = vm.quickDhamma;
            quickDhamma.$save().then(function(ref){
                var modal = $uibModal.open({
                    templateUrl: '/app/components/shared/modal/notificationModal.html',
                    controller: 'notificationModalCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        message: function() { return "Edit Success"}
                    }
                });
            }, function(error){
                console.log(error);
            });
        }


    }]);
