
//Here we understand inference the TS understand the type of the variable in assignment
let character = 'mario';
let age = 20;
let isBlackBelt = false;

//character = 20 it becomes a error;
character = 'luigi';

// age = 'yoshi'; is wrong again!
age = 40;

// isBlackBelt = 'yes' wrong
isBlackBelt = true;

const circ = (diameter: number) => { // the parameter : type notation is used here, we can ommit the type of the parameter if we want
    return diameter * Math.PI; // all js libraries are used on TS
};

console.log(circ(7.5));