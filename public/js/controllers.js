app.controller('mainCtrl', mainCtrl);

function mainCtrl($rootScope) {
    $rootScope.audioContext = new window.AudioContext();
    var gain = $rootScope.audioContext.createGain();
}
mainCtrl.$inject = ['$rootScope'];

app.controller('keyCtrl', keyCtrl);

function keyCtrl($scope, $rootScope, pitchService) {
    var ctx = $rootScope.audioContext;
    $scope.play = function(pitch) {
        // console.log('played' + pitch);
        // console.log(osc);
        var osc = pitchService.createPitch($scope.pitch);
        osc.start();
        osc.stop(ctx.currentTime + .5);
    }
}
keyCtrl.$inject = ['$scope', '$rootScope', 'pitchService'];
