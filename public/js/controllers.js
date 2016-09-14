app.controller('mainCtrl', mainCtrl);

function mainCtrl($rootScope) {
    $rootScope.audioContext = new window.AudioContext();
}
mainCtrl.$inject = ['$rootScope'];

app.controller('keyCtrl', keyCtrl);

function keyCtrl($scope, $rootScope, pitchService) {
    var ctx = $rootScope.audioContext;
    var osc = pitchService.createPitch($scope.pitch);
    $scope.play = function(pitch) {
        // console.log('played' + pitch);
        // console.log(osc);
        osc.start();
        osc.stop(ctx.currentTime + 1);
    }
}
keyCtrl.$inject = ['$scope', '$rootScope', 'pitchService'];
