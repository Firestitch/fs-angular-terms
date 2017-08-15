(function () {
    'use strict';

    angular.module('fs-angular-terms',[])
    .directive('fsTerms', function($location) {
        return {
            templateUrl: 'views/directives/terms.html',
            restrict: 'E',
            transclude: true,
            scope: {
               selected: "@fsSelected"
            },
            link: function($scope, element, attrs) {

            }
        };
    });
})();