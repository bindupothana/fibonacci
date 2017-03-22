var app=angular.module('fibApp',[]);
app.controller('fibCtrl',function($scope){
	$scope.fibonacciInput=0;
	 
	var a=0; var b=1; var c;
	$scope.fibonacci=function(){
		for ( var i=1; i<=n; i++){
			c=a+b;
			a=b;
			b=c;
		}

	}

console.log("$scope.fibonacci"$scope.fibonacci);

});