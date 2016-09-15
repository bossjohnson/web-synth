app.controller('mainCtrl', mainCtrl);

function mainCtrl($rootScope, pitchService) {
    $rootScope.audioContext = new window.AudioContext();
    $rootScope.notes = pitchService.allNotes();

    // var gain = $rootScope.audioContext.createGain();
}
mainCtrl.$inject = ['$rootScope', 'pitchService'];

app.controller('keyCtrl', keyCtrl);

function keyCtrl($scope, $rootScope, pitchService) {
    var ctx = $rootScope.audioContext;
    $scope.play = function() {
        var osc = pitchService.createPitch($scope.pitch);
        $scope.osc = osc;
        osc.start();
    }
    $scope.stop = function() {
        $scope.osc.stop();
    };
}
keyCtrl.$inject = ['$scope', '$rootScope', 'pitchService'];
