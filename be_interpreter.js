

// Question 1
// console.log(first_variable);
// var first_variable = "Yipee I was first!";
// function firstFunc() {
//   first_variable = "Not anymore!!!";
//   console.log(first_variable);
// }
// console.log(first_variable);


//Declarations get hoisted"
var first_variable;
function firstFunct() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}

// assignments and invocation maintain order
console.log(first_variable);
first_variable = "Yipee I was first!";
console.log(first_variable);

// This wall print the unassigned first_variable
// undefined
// then assign and print
// Yipee I was first!



// Question 2:

// var food = "Chicken";
// function eat() {
//   food = "half-chicken";
//   console.log(food);
//   var food = "gone";       // CAREFUL!
//   console.log(food);
// }
// eat();
// console.log(food);


// Hoisting variables
var food;
function eat() {

  //Hoisting variables inside function
  var food;

  //assignemnts and invocation inside function maintain order
  food = "half-chicken";
  console.log(food);
  food = "gone";
  console.log(food);
}

// assignemnts and invocations maintain order
food = "Chicken";
eat()
console.log(food)

//This will first call eat function which will print half-chicken and then "gone"
//After function ends, "Chicken" is assigned to global food and prints "Chicken"

// Question 3

// var new_word = "NEW!";
// function lastFunc() {
//   new_word = "old";
// }
// console.log(new_word);


// Hoisting variables and functions
var new_word;
function lastFunc() {
  new_word = "old";
}

// assignments and calls maintain order
new_word = "NEW!";
console.log(new_word);

//New word is declared and function is hoisted but never run. "NEW" is assigned to new_word and then printed
