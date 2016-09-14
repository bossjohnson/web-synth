app.service('pitchService', pitchService);

function pitchService($rootScope) {
    this.createPitch = function(pitch) {
        var osc = $rootScope.audioContext.createOscillator();
        var a = Math.pow(2, 1 / 12); // Constant used in calculating note frequency
        osc.frequency.value = 440 * Math.pow(a, Math.floor(pitch));
        osc.connect($rootScope.audioContext.destination);
        return osc;
    };
}
pitchService.$inject = ['$rootScope']
