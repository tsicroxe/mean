function runningLogger(){
  console.log('I am running');
}

function multiplyByTen(num){
  result = num * 10;
  console.log(result)
  return result
}

function stringReturnOne(){
  var stringOne = "I am returning One"
  return stringOne
}

function stringReturnTwo(){
  var stringTwo = "I am returning Two"
  return stringTwo
}



function caller(callback){
  if (typeof(callback) == 'function') {
    console.log('Running callback')
    return callback()
  }
  else{
    return console.log('Type of callback is ' + typeof(callback) + ' so nothing returned');
  }
}

runningLogger();
// Logs 'I am running'

multiplyByTen(5);
// Logs 50

console.log(stringReturnOne())
// Logs 'I am returning one'

console.log(stringReturnTwo())
//Logs 'Iam returning two'

caller(runningLogger)
// Runs Callback function

caller(multiplyByTen(5));
// Does NOT run callback function, see it as number since param is number

var five = 5;
var test = multiplyByTen(five);
caller(test);
// Does NOT run callback function, see it as number since param is number

console.log(typeof(multiplyByTen()));
// logs NaN (not a number) and number
