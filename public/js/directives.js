app.directive('keyListener', function(listenerService) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var keyboard = element.find('keyboard');
            element.on('keydown', function(e) {
                var keyNum = listenerService.getKeyNum(e);
                var key = keyboard.find('keyboard-key')[keyNum];
                angular.element(key).triggerHandler('mousedown');
            });
            element.on('keyup', function(e) {
                var keyNum = listenerService.getKeyNum(e);
                var key = keyboard.find('keyboard-key')[keyNum];
                angular.element(key).triggerHandler('mouseup');
            });
        }
    };
}).$inject = ['listenerService'];

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
