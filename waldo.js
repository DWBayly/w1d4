// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
	var x = 0;
	arr.forEach(function(item){
		//console.log(item+ item === 'waldo');
		if(item ==="Waldo"){
			actionWhenFound(x);
		}
		x++;
	});
	
  /*for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }*/
}

function actionWhenFound(i) {
  console.log("Found waldo at index "+i+"!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);