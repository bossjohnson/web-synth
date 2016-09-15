app.service('pitchService', pitchService);

function pitchService($rootScope) {

    this.createPitch = function(pitch) {
        var osc = $rootScope.audioContext.createOscillator();
        var a = Math.pow(2, 1 / 12); // Constant used in calculating note frequency
        osc.frequency.value = 440 * Math.pow(a, pitch);
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

    this.play = function(gain) {
        gain.gain.value = 1;
    }

    this.stop = function(gain) {
        gain.gain.value = 0;
    }
}
pitchService.$inject = ['$rootScope']



app.service('listenerService', listenerService);

function listenerService() {
    this.getKeyNum = function(e) {
        switch (e.keyCode) {
            //white keys
            case 65:
                return 0;
                break;
            case 83:
                return 1;
                break;
            case 68:
                return 2;
                break;
            case 70:
                return 3;
                break;
            case 71:
                return 4;
                break;
            case 72:
                return 5;
                break;
            case 74:
                return 6;
                break;
            case 75:
                return 7;
                break;
            // black keys
            case 87:
                return 8;
                break;
            case 69:
                return 9;
                break;
            case 84:
                return 10;
                break;
            case 89:
                return 11;
                break;
            case 85:
                return 12;
                break;
        }
    }
}
