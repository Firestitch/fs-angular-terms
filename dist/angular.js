
(function () {
    'use strict';

    angular.module('fs-angular',[])
    .directive('fsAngular', function($location) {
        return {
            templateUrl: 'views/directives/namespace.html',
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

