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
        if ($scope.osc) $scope.osc.stop();
        var osc = pitchService.createPitch($scope.pitch);
        $scope.osc = osc;
        osc.start();
    };

    $scope.stop = function() {
        $scope.osc.stop();
        delete $scope.osc;
    };

    $scope.test = function (x) {
      console.log(x);
    };
}
keyCtrl.$inject = ['$scope', '$rootScope', 'pitchService'];
