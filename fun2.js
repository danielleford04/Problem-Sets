// 1

var getName = function (obj) {
	return obj["name"];
};

console.log(getName({ name: 'Luisa', age: 25 }));

// 2 

var totalLetters = function(arr) {
	return arr.join('').length 
}

console.log(totalLetters(['javascript', 'is', 'awesome']))
console.log(totalLetters(['what', 'happened', 'to', 'my', 'function']))

// 3

var keyValue = function(prop, exp) {
	var Object = {};
	Object[prop] = exp;
	return Object
}

console.log(keyValue('city', 'Denver'))

// 4

var negativeIndex = function(arr, num) {
	return arr[arr.length+num]
}

console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2))
console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1))

// 5

var removeM = function(string) {
	return string.replace("m", "")

}

console.log(removeM('family'))
console.log(removeM('memory'))

// 6

var printObject = function(object) {
for (var key in object) { 
    console.log(key + " is " + object[key]);
}

}

printObject({ firstName: 'pork', lastName: 'chops' })

// 7

var vowels = function(string) {
	var newArray=[];
	for (i=0; i<string.length; i++) {
	if (string[i] === "a" || string[i]==="e" || string[i]==="i" || string[i]==="o" || string[i]==="u") {
		newArray.push(string[i]);
	}
}
	return newArray
}

console.log(vowels('alabama'))
console.log(vowels('What evil odd ducks!'))

// 8

var twins=function(arr) {


	for (i=0; i<arr.length; i+=2) {
		if (arr[i] !== arr[i+1]) {
			 return false
		}
	}
	if (arr.length%2 !== 0) {
		return false
	}
	return true

}

console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']))
console.log(twins(['a', 'a', 'b', 'c', 'd', 'd']))
console.log(twins(['a', 'a', 'b', 'z']))
console.log(twins(['a', 'a', undefined]))

// 9

var or=function(arr) {
	if (arr.indexOf(true) !== -1) {
		return true
	}
	else {
		return false
	}
}

console.log(or([false, false, true, false]))
console.log(or([false, false, false]))
console.log(or([]))

// 10

var unique = function(arr) {

var newArray = []

	for (i=0; i<arr.length; i++) {
		if (newArray.indexOf(arr[i]) === -1) {
			newArray.push(arr[i])

		}

	}
	return newArray
}

console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']))
console.log(unique(['todd', 'avery', 'maria', 'avery']))

