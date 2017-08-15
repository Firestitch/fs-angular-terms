'use strict';


angular.module('app')
  .controller('DemoCtrl', function ($scope) {

    $scope.content = 'Integer maximus non lacus ac aliquam. Etiam semper vulputate pretium. Morbi rhoncus tellus commodo velit aliquam semper. Sed vulputate urna sit amet convallis ullamcorper. Mauris ullamcorper ante ac nisi pellentesque, quis placerat leo porttitor. Donec commodo laoreet urna vel dapibus. Proin imperdiet orci ac ante interdum consectetur. Fusce semper felis vel lacus consectetur fermentum. Quisque ut ante eget odio pellentesque pharetra quis eget ligula. Nullam ut arcu in elit ullamcorper rutrum. Fusce venenatis quis nisi id ultricies. 	<br>Proin purus ex, venenatis feugiat finibus id, egestas at mi. Aenean efficitur at nunc egestas tincidunt. Quisque vel sapien ligula. Duis aliquam et quam sit amet malesuada. Integer in condimentum mauris. Phasellus auctor nulla non turpis dignissim, vel tincidunt neque pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. <br>Suspendisse aliquam pulvinar odio, ut iaculis purus aliquet at. Integer tincidunt, arcu dictum elementum pellentesque, nunc est rhoncus orci, sit amet luctus purus lectus non augue. Vivamus sodales semper elit quis tempus. Aenean tincidunt at ante sed egestas. Cras hendrerit neque nibh, id tincidunt leo pharetra ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla in tortor enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi varius ultricies sollicitudin. Morbi nec odio eu nisl facilisis tincidunt. Vestibulum id congue neque. Fusce sodales, tortor quis bibendum consectetur, magna justo consectetur libero, eget pretium mauris justo elementum tellus. Nunc ut leo nunc. Phasellus tincidunt dui eu sodales interdum. Quisque sollicitudin tincidunt sem sit amet scelerisque.';
    $scope.agree = false;
    $scope.submit = function() {
        alert('submit');
    }
});
