app.controller('mainCtrl', mainCtrl);

function mainCtrl($rootScope, pitchService) {
    $rootScope.audioContext = new window.AudioContext();
    $rootScope.notes = pitchService.allNotes();
    $rootScope.gain = $rootScope.audioContext.createGain();
    $rootScope.gain.connect($rootScope.audioContext.destination);
}
mainCtrl.$inject = ['$rootScope', 'pitchService'];

app.controller('keyCtrl', keyCtrl);

function keyCtrl($scope, $rootScope, pitchService) {

    var ctx = $rootScope.audioContext;
    var osc = pitchService.createPitch($scope.pitch);
    var gain = $rootScope.audioContext.createGain();
    gain.gain.value = 0;
    gain.connect($rootScope.audioContext.destination);
    osc.connect(gain);
    osc.start();

    $scope.play = function() {
        gain.gain.value = 1;
    };

    $scope.stop = function() {
        gain.gain.value = 0;
    };
}
keyCtrl.$inject = ['$scope', '$rootScope', 'pitchService'];
