/* Fizz Buzz - Write a program that prints the numbers from 1 to 100. 
But for multiples of three print “Fizz” instead of the number  
For the multiples of five print “Buzz”. 
For numbers which are multiples of both three and five print “FizzBuzz”.*/
// try to make it show the value of i 


for (var i = 1; i <= 100; i++) {
	var numValue = i.value;
	if (i % 3 === 0 && i % 5 === 0) {
		document.write('FizzBuzz because '+i+' '+'<br>');
	}
	else if (i % 3 === 0) {
		document.write('Fizz because '+i+' '+'<br>');
	}
	else if (i % 5 === 0 ) {
	document.write('Buzz because '+i+' '+'<br>');
	}
	else{
		document.write(i + ' '+'<br>');
	}
};


