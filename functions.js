function runningLogger(){
  console.log('I am running');
}

function multiplyByTen(numb){
  return numb * 10;
}

function stringReturnOne(){
  return "I am returning One"
}

function stringReturnTwo(){
  return "I am returning Two"
}



function caller(callback){
  if (typeof(callback) == 'function') {
    callback()
  }
  else{
    return console.log('Type of callback is ' + typeof(callback) + ' so nothing returned');
  }
}

runningLogger();
// Logs 'I am running'

console.log(multiplyByTen(5));
// Logs 50

console.log(stringReturnOne())
// Logs 'I am returning one'

console.log(stringReturnTwo())
//Logs 'Iam returning two'

caller(runningLogger)
// Runs Callback function



function myDoubleConsoleLog(paramOne, paramTwo){
  if (typeof(paramOne && paramTwo) === 'function'){
    console.log(paramOne(), paramTwo());
  }
  else {
    console.log(typeof(paramOne));
    console.log('Both params not functions')
  }
}

myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

function caller2(param){
  console.log("Starting");
  setTimeout(function(){
    if (typeof(param) == 'function'){
      param(stringReturnOne, stringReturnTwo);
    }
    console.log("ending?");
  }, 2000);

  return "Interesting"
}
// caller2(myDoubleConsoleLog);

console.log(caller2(myDoubleConsoleLog));
// Doing console to check  to see if interesting is return and it is
