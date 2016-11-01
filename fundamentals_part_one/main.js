// Question 1
var x = [3, 5, 'Dojo', 'rocks', 'Michael', 'Sensei'];

for(var i = 0; i < x.length; i++){
  console.log(x[i]);
}

// Question 2
x.push(100);
console.log(x[6]);

// Question 3
var y = ['hello', 'world', 'Javascript is Fun'];

for(var j = 0; j < y.length; j++){
  x.push(y[j]);
}
console.log(x);

// Question 4
var sum = 0;
for(k = 1; k < 501; k++){
  sum += k;
}
console.log(sum);

// Question 5
var arr = [1, 5, 90, 25, -3, 0];
var min = arr[0]
for(i = 0; i < arr.length; i++){
  if (arr[i] < min){
    min = arr[i];
  }
}
console.log('The minimum value is ' + min);

// Question 6
var avg = 0;
sum = 0;
for (i = 0; i < arr.length; i++){
  sum += arr[i];
}
avg = sum / arr.length;
console.log(avg);

var new_ninja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}
for(var key in new_ninja){
  console.log(key + ': ' + new_ninja[key])
}
