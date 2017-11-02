function map(arr,fun){
	arr.forEach(function(item,index){
		//console.log(fun(item));
		arr[index] = fun(item);
		
	});
}
//arr = [6, 7, 2, 5, 3];
//arr =[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ];
arr =[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ];
var fun = function(x){
	//return x + 1;
	//console.log(x);
	return x.toUpperCase();
	//return x.split('').reverse().join('');
}
console.log(arr);
map(arr,fun);
console.log(arr);git


//

//