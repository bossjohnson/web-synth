app.service('pitchService', pitchService);

function pitchService($rootScope) {

    this.createPitch = function(pitch) {
        var osc = $rootScope.audioContext.createOscillator();
        var a = Math.pow(2, 1 / 12); // Constant used in calculating note frequency
        osc.frequency.value = 440 * Math.pow(a, Math.floor(pitch));
        osc.connect($rootScope.audioContext.destination);
        return osc;
    };

    // C0 to B8
    this.allNotes = function() {
        var notes = [];
        const pitches = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < pitches.length; j++) {
                notes.push(pitches[j] + i);
            }
        }
        return notes;
    }
}
pitchService.$inject = ['$rootScope']
