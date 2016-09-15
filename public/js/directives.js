app.directive('keyboard', function() {
    return {
        templateUrl: 'partials/keyboard.html',
        restrict: '',
        scope: {},
        controller: mainCtrl
    };
});

app.directive('keyboardKey', function() {
    return {
        restrict: 'E',
        scope: {
            play: '=',
            pitch: '='
        },
        controller: keyCtrl,
        link: function(scope, element, attrs) {
            element.on('mousedown', scope.play);
            element.on('mouseup', scope.stop);
        }
    };
});
