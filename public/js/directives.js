app.directive('keyboard', function() {
    return {
        templateUrl: 'partials/keyboard.html',
        restrict: '',
        scope: {},
        controller: function() {
            console.log('ok');
        }
    };
});

app.directive('keyboardKey', function() {
    return {
        restrict: 'E',
        scope: {}
    };
});
