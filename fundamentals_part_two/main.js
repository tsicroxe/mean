

function sumBetween(x, y){
  var min;
  var max;
  var sum = 0;
  if(x > y){
    min = y;
    max = x;
  }
  else if(x < y){
    min = x;
    max = y;
  }
  else{
    return "You must enter two different whole integers";
  }

  for(var i = min; i <= max; i++){
    sum += i;
  }
  console.log(sum);
  return sum;
}


function minimum(arr){
  var min = arr[0];
  for(var idx = 0; idx < arr.length; idx++){
    if(arr[idx] < min){
      min = arr[idx];
    }
  }
  console.log(min);
  return min;
}


function average(arr){
  var avg = 0;
  var sum = 0;
  for (idx = 0; idx < arr.length; idx++){
    sum += arr[idx];
  }
  avg = sum / arr.length;
  console.log(avg);
  return avg;
}

var x = function (arr){
          var avg = 0;
          var sum = 0;
          for (idx = 0; idx < arr.length; idx++){
            sum += arr[idx];
          }
          avg = sum / arr.length;
          console.log(avg);
          return avg;
        }

var ninja = 'potato';
console.log(ninja)

var array = [5, 2, 1, 6, 3, 2, -4, 2, 6, 0, 12];
sumBetween(0, 6)
minimum(array);

average(array);
