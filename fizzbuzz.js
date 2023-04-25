//Create a code that prints the numbers 1 to 100 on a new line
//Numbers with a certain multiple will print a word instead of the number
//Numbers with a mulitple of three will print "Fizz"
//Numbers with a mulitple of five will print "Buzz"
//Numbers that are mutiples of three and five will print "FizzBuzz"


const n = 100;

for(let i = 0; i <= n; i++){

if(i % 15 === 0)
{
console.log("FizzBuzz");
}
else if(i % 3 === 0)
{
console.log("Fizz");
}
else if(i % 5 === 0)
{
console.log("Buzz");
}
else{console.log(i)}
}
