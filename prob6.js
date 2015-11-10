// 1

// var secondGreatLow = function(array) {
// 	maxArr = []
// 	if (array.length == 2 && array[0] > array[1]) {
// 		console.log( array[0] + " " + array[1])
// 	}
// 	else if (array.length == 2 && array[1] > array[0]) {
// 		console.log( array[1] + " " + array[0])
// 	}
// 	else {
// 		var min = Math.min.apply(null,array);
// 		var max = Math.max.apply(null,array);
// 		array.splice(array.indexOf(max), 1);
// 		array.splice(array.indexOf(min), 1);
// 		if (array.indexOf(min) !== -1) {
// 			array.splice(array.indexOf(min), 1)
// 		}
// 		else if (array.indexOf(max) !== -1) {
// 			array.splice(array.indexOf(max), 1)
// 		}
// 		console.log (Math.min.apply(null, array) + " " + Math.max.apply(null, array))
// 	}

// }

// // secondGreatLow([2,8])
// secondGreatLow([7, 7, 12, 98, 106])

// 2

// var timeConvert = function(num) {
//  var min = 0
//  var hr = 0

//  if (num < 60) {
//  	console.log( "0:" + num)
//  }
//  else {
//  	min = num%60;
//  	hr = (num - num%60) / 60;
 
//  	console.log(hr + ":" + min)
//  }

// }

// timeConvert(63)

// 3

// var bracketMatcher = function(string) {
//  var arr = string.split("")
//  for (var i=0; i<arr.length; i++) {
//  	if (arr.indexOf("(")<arr.indexOf(")"))
//  		arr.splice(arr.indexOf("("), 1);
//  		arr.splice(arr.indexOf(")"), 1);
//  }

//  if (arr.indexOf("(") !== -1 && arr.indexOf(")") !== -1 && arr.indexOf("(")<arr.indexOf(")")) {
//   for (var i=0; i<arr.length; i++) {
//  		arr.splice(arr.indexOf("("), 1);
//  		arr.splice(arr.indexOf(")"), 1);
//  }}

//  	if (arr.indexOf("(") === -1 && arr.indexOf(")") === -1) {
//  		console.log(true) 
//  	}

//  	else{
//  		console.log(false)
//  	}

// }

// bracketMatcher("(hello (world))") //true
// bracketMatcher("((hello (world))") //false
// bracketMatcher("(()())") //true