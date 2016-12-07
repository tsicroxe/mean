var my_module = require('./mathlib')();

console.log(my_module.add(2, 3));
console.log(my_module.multiply(5, 3));
console.log(my_module.square(5));

var num = my_module.randomNum();

console.log(num);
