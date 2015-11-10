var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

// 1.
for(var i=0; i<animals.length-1; i++) {
 console.log(animals[i]);
}

// 2.

for(var i=0; i<animals.length; i+=2) {
 console.log(animals[i]);
}

// 3.

for(var i=animals.length-1; i>=0; i--) {
 console.log(animals[i]);
}

// 4. 

animals.splice(2,0, "cat");
animals.splice(3,0, "butterfly");
animals.splice(5,0, "marmot")

console.log(animals)