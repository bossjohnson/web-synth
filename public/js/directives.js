app.directive('keyListener', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.on('keypress', function(e) {
                console.log(e.keyCode);
                switch (e.keyCode) {
                    case 97:

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

app.directive('keyboardKey', function() {
    return {
        restrict: 'E',
        scope: {
            play: '=',
            pitch: '=',
            test: '='
        },
        controller: keyCtrl,
        link: function(scope, element, attrs) {
            element.on('mousedown', scope.play);
            element.on('mouseup', scope.stop);
        }
    };
});
