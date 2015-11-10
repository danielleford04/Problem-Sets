// 1.

// var palindrome=function(string) {
// 	var strArr = string.split("")
// 	var strReverseArr = []
// 	var length = strArr.length
	
// 	for (i=0; i<length; i++) {
// 		strReverseArr.push(strArr.pop())

// 	}

// 	var strReverse = strReverseArr.join("")

// 	if (strReverse === string) {
// 		return true
// 	}
// 	else {
// 		return false
// 	}
// }

// console.log(palindrome("racecar"))

// 2.

// var dashInsert = function(num) {
// 	var numArr = (num+'').split('')
// 	var length = numArr.length

// 	for (i=0; i<length; i++) {
// 		if ((numArr[i]%2 === 1) && (numArr[i+1]%2 ===1)) {
// 			numArr.splice(i+1, 0, "-")
// 		}
// 	}
// return numArr.join('')
// }
// console.log(dashInsert(454793))

// 3.

var caesarCipher = function(string, num){
	var cipherArr = string.split('');
console.log(cipherArr[1])

var low = "abcdefghijklmnopqrstuvwxyz".split('')
var upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')

var ciphered = []

console.log(low[low.indexOf(cipherArr[1])])

 for (var i=0; i<cipherArr.length; i++) {

 	if (low.indexOf(cipherArr[i]) != -1) {
 		ciphered.push(low[(low.indexOf((cipherArr[i]))+num)%26])
 	}
 	else if (upp.indexOf(cipherArr[i]) != -1) {

 		ciphered.push(upp[(upp.indexOf((cipherArr[i]))+num)%26])
 	}
 	else {
 		ciphered.push(cipherArr[i])
 	}
 }
return ciphered.join('')
}


console.log(caesarCipher("Caesar Cipher!", 2))
console.log(caesarCipher("Zzzzxyzzz", 5))

