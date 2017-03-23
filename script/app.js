var app=angular.module('fibApp',[]);
app.controller('fibCtrl',function($scope){
	 
	$scope.fibonacci=function(num){
	 var a=0, b=1 ,output=0; 
	 $scope.result = [];
   	 $scope.result.push(a)
	 $scope.result.push(b)
	   for ( var i=2; i<=$scope.num; i++){
		 console.log("output",output)
		 output=a+b;
			a=b;
			b=output;
			
         $scope.result.push(output)

		}
       console.log("Result", $scope.result)

	}


});