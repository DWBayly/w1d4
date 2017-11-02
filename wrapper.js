var wrapLog = function (callback, name) {
  /* your code here */
  return function(){
	  var result= name+"(";
	  var params= [];
	  for(var arg in arguments){
		  if(arg!= arguments.length-1){
			  result += arguments[arg]+","
			  params.push(arguments[arg]);
		  }else{
			  params.push(arguments[arg]);
			 // console.log(callback.apply(this,params));
			  result +=arguments[arg]+ ") => "+ callback.apply(this,params);
		  }
	  }
	  console.log(result);
	  
  }
  
};

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24