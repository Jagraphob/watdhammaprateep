angular.module('watApp')
    .controller('newsCtrl', ['$rootScope', '$scope', '$state', 'fbRef', 'news', '$state', function($rootScope, $scope, $state ,fbRef, news, $state){

        var vm = this;
        vm.news = news;

        vm.isAdmin = $rootScope.isAdmin;

        $rootScope.$on('isAdmin',function(){
            vm.isAdmin = $rootScope.isAdmin;
            $state.reload();
        });

        vm.createNews = createNews;

        function createNews(){

            var selectedFile = document.getElementById('newNewsPic').files[0];
            fbRef.getStorageRef().child("news/" + vm.newNewsName).put(selectedFile)
                .then(function(snapshot){
                    news.$add({
                        name: vm.newNewsName,
                        content: vm.newNewsContent,
                        picUrl: snapshot.a.downloadURLs[0],
                        timestamp: new Date().getTime()
                    })
                    $state.reload
            })
        }

    }]);
