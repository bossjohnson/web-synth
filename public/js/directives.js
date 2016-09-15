app.directive('keyListener', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var keyboard = element.find('keyboard');
            element.on('keydown', function(e) {
                switch (e.keyCode) {
                    //white keys
                    case 65:
                        var key = keyboard.find('keyboard-key')[0];
                        angular.element(key).triggerHandler('mousedown');
                        break;
                    case 83:
                        var key = keyboard.find('keyboard-key')[1];
                        angular.element(key).triggerHandler('mousedown');
                        break;
                    case 68:
                        var key = keyboard.find('keyboard-key')[2];
                        angular.element(key).triggerHandler('mousedown');
                        break;
                    case 70:
                        var key = keyboard.find('keyboard-key')[3];
                        angular.element(key).triggerHandler('mousedown');
                        break;
                    case 71:
                        var key = keyboard.find('keyboard-key')[4];
                        angular.element(key).triggerHandler('mousedown');
                        break;
                    case 72:
                        var key = keyboard.find('keyboard-key')[5];
                        angular.element(key).triggerHandler('mousedown');
                        break;
                    case 74:
                        var key = keyboard.find('keyboard-key')[6];
                        angular.element(key).triggerHandler('mousedown');
                        break;
                        // black keys
                    case 87:
                        var key = keyboard.find('keyboard-key')[7];
                        angular.element(key).triggerHandler('mousedown');
                        break;
                    case 69:
                        var key = keyboard.find('keyboard-key')[8];
                        angular.element(key).triggerHandler('mousedown');
                        break;
                    case 84:
                        var key = keyboard.find('keyboard-key')[9];
                        angular.element(key).triggerHandler('mousedown');
                        break;
                    case 89:
                        var key = keyboard.find('keyboard-key')[10];
                        angular.element(key).triggerHandler('mousedown');
                        break;
                    case 85:
                        var key = keyboard.find('keyboard-key')[11];
                        angular.element(key).triggerHandler('mousedown');
                        break;
                    default:
                }
            });
            element.on('keyup', function(e) {
                switch (e.keyCode) {
                    //white keys
                    case 65:
                        var key = keyboard.find('keyboard-key')[0];
                        angular.element(key).triggerHandler('mouseup');
                        break;
                    case 83:
                        var key = keyboard.find('keyboard-key')[1];
                        angular.element(key).triggerHandler('mouseup');
                        break;
                    case 68:
                        var key = keyboard.find('keyboard-key')[2];
                        angular.element(key).triggerHandler('mouseup');
                        break;
                    case 70:
                        var key = keyboard.find('keyboard-key')[3];
                        angular.element(key).triggerHandler('mouseup');
                        break;
                    case 71:
                        var key = keyboard.find('keyboard-key')[4];
                        angular.element(key).triggerHandler('mouseup');
                        break;
                    case 72:
                        var key = keyboard.find('keyboard-key')[5];
                        angular.element(key).triggerHandler('mouseup');
                        break;
                    case 74:
                        var key = keyboard.find('keyboard-key')[6];
                        angular.element(key).triggerHandler('mouseup');
                        break;
                        // black keys
                    case 87:
                        var key = keyboard.find('keyboard-key')[7];
                        angular.element(key).triggerHandler('mouseup');
                        break;
                    case 69:
                        var key = keyboard.find('keyboard-key')[8];
                        angular.element(key).triggerHandler('mouseup');
                        break;
                    case 84:
                        var key = keyboard.find('keyboard-key')[9];
                        angular.element(key).triggerHandler('mouseup');
                        break;
                    case 89:
                        var key = keyboard.find('keyboard-key')[10];
                        angular.element(key).triggerHandler('mouseup');
                        break;
                    case 85:
                        var key = keyboard.find('keyboard-key')[11];
                        angular.element(key).triggerHandler('mouseup');
                        break;
                    default:
                }
            });
        }
    };
});

app.directive('keyboard', function() {
    return {
        templateUrl: 'partials/keyboard.html',
        restrict: 'E'
    };
});

app.directive('keyboardKey', function(pitchService) {
    return {
        restrict: 'E',
        scope: {
            pitch: '='
        },
        controller: keyCtrl,
        link: function(scope, element, attrs) {
            element.on('mousedown', () => {
                element.addClass('playing');
                pitchService.play(scope.gain);
            });
            element.on('mouseup', () => {
                element.removeClass('playing');
                pitchService.stop(scope.gain);
            });
        }
    };
}).$inject = ['pitchService']
