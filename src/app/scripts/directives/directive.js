(function () {
    'use strict';

    angular.module('fs-angular-terms',[])
    .directive('fsTerms', function($sce) {
        return {
            templateUrl: 'views/directives/terms.html',
            restrict: 'E',
            transclude: true,
            scope: {
               	content: "=fsContent",
               	label: "@fsLabel",
               	agree: "=?fsAgree",
               	agreeLabel: "@fsAgreeLabel"
            },
            controller: function($scope) {
            	$scope.$watch('content',function(content) {
            		$scope.termsContent = $sce.trustAsHtml(content);
            	});
            }
        };
    });
})();