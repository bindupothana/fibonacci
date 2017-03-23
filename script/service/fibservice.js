var app=angular.module('fibApp');
app.service('fibService',function(){
	this.fibonacciSeries=function(num){
	 	var a=0,
	 	 b=1 , c=0;

	

		for ( var i=1; i<=num; i++){
			c=a+b;
			a=b;
			b=c;
		}
		return c;
	};

});