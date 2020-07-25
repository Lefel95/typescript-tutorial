//Here we understand inference the TS understand the type of the variable in assignment
var character = 'mario';
var age = 20;
var isBlackBelt = false;
//character = 20 it becomes a error;
character = 'luigi';
// age = 'yoshi'; is wrong again!
age = 40;
// isBlackBelt = 'yes' wrong
isBlackBelt = true;
var circ = function (diameter) {
    return diameter * Math.PI; // all js libraries are used on TS
};
console.log(circ(7.5));
