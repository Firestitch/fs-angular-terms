
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

angular.module('fs-angular-terms').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/directives/terms.html',
    "<div class=\"label\" ng-if=\"label\">{{label}}</div><div class=\"terms\" ng-bind-html=\"termsContent\"></div><md-checkbox-container required ng-show=\"agreeLabel\" name=\"agree-checkbox-container\" ng-model=\"agreeContainer\" required-message=\"You must agree to continue\"><md-checkbox ng-model=\"agree\" aria-label=\"Agree\" ng-true-value=\"true\" ng-false-value=\"false\" name=\"agree-checkbox\">{{agreeLabel}}</md-checkbox></md-checkbox-container>"
  );

}]);
