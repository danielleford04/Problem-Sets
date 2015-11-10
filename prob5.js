// 1

var alphabetSoup = function(string) {
	string.toLowerCase()
 var arr = string.split('');
 var alph = "abcdefghijklmnopqrstuvwxyz ".split('')
 var newArr = []
 console.log(arr)
 for (var i=0; i<alph.length; i++) {
 	if (arr.indexOf(alph[i]) !== -1) {
 		newArr.push(arr[arr.indexOf(alph[i])])
 		arr.splice(arr.indexOf(alph[i]), 1)
 		while (arr.indexOf(alph[i]) !== -1) {
 			 		newArr.push(arr[arr.indexOf(alph[i])])
 		arr.splice(arr.indexOf(alph[i]), 1)
 		}

 	}

 }
 console.log(arr)
console.log(newArr.join(''))
}

alphabetSoup('hello')
alphabetSoup('somethingalittlelonger')

// 2
// var vowelCount = function(string) {
// 	var arr = string.split("");
// 	var vowel = 0;
// 	var vowelArr = "aAeEiIoOuU".split("");

// 	for (var i=0; i<arr.length; i++) {
// 		if (vowelArr.indexOf(arr[i]) !== -1) {
// 			vowel ++
// 		}
// 	}

// return vowel
// }
// console.log(vowelCount("All cows eat grass"))

