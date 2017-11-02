var arr = [10, 2, 5, 1, 9];;
console.log(arr);
arr.sort(function(a,b){
	return a>b;
	
});
console.log(arr);

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];
students.sort(function(a,b){
	if(a.id== b.id){
			return a.value>b.value;
	}else{
		return a.name>b.name;
	}
});
console.log(students);