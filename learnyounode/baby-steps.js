// first element is the path to node,
// second element is the path to the program.
// the rest are the command line arguments.

var numbers = process.argv.slice(2);
var sum = numbers.reduce(function (carry, val){
  return carry += Number(val);
},0);

console.log(sum);
