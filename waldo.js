// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
	arr.forEach(function(item,index){
		//console.log(item+ );
		if(item ==="Waldo"){
			actionWhenFound(index);
		}
		
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