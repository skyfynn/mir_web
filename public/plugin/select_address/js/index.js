// Generated by CoffeeScript 1.7.1
(function() {
  var app;

  app = angular.module('app', ['selectAddress']);

  app.controller('appCtrl', function($scope) {
    $scope.p = '广东';
    $scope.c = '梅州';
    $scope.a = '平远县';
    return $scope.d = '大柘镇';
  });

  angular.bootstrap(document, ['app']);

}).call(this);
$("form").submit(function(){
    $("input.ng-pristine.ng-valid.ng-isolate-scope").each(function(){
          var address_val = $(this).val();
          var address_place = $(this).attr("placeholder");
          if ( address_val== '' && address_place != '' && address_place != '请选择所在地' )  
          {
            $(this).val(address_place);
          }
    })
})
