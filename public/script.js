/* Fizz Buzz - Write a program that prints the numbers from 1 to 100. 
But for multiples of three print “Fizz” instead of the number  
For the multiples of five print “Buzz”. 
For numbers which are multiples of both three and five print “FizzBuzz”.*/

// THIS ONE IS WRONG BECAUSE OF THE ORDER 
// for (var i = 1; i <= 100; i++) {
// 		if (i % 3 === 0) {
// 			document.write('Fizz'+'<br>'+i);
// 		}	
// 		else if (i % 5 === 0) {
// 			document.write('buzz'+'<br>'+i);
// 		}
// 		else if (i % 5 === 0 && i % 3 === 0) {
// 			document.write('FizzBuzz'+'<br>'+i);
// 		}
// };

for (var i = 1; i <= 100; i++) {
	var numValue = i.value;
	if (i % 3 === 0 && i % 5 === 0) {
		document.write('FizzBuzz'+' ');
	}
	else if (i % 3 === 0) {
		document.write('Fizz'+' ');
	}
	else if (i % 5 === 0 ) {
	document.write('Buzz'+' ');
	}
	else{
		document.write(i + ' ');
	}
};

