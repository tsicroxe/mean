/* Turn the following problems from JS Fundamentals Part I into functions that take variable inputs

Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
Write a loop that will go through an array, find the minimum value, and then return it
Write a loop that will go through an array, find the average of all of the values, and then return it */

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

// Rewrite these 3 as anonymous functions assigned to variables.

var sumBetweenAnon = function(x, y){
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


var minimumAnon = function (arr){
  var min = arr[0];
  for(var idx = 0; idx < arr.length; idx++){
    if(arr[idx] < min){
      min = arr[idx];
    }
  }
  console.log(min);
  return min;
}


var averageAnon = function(arr){
  var avg = 0;
  var sum = 0;
  for (idx = 0; idx < arr.length; idx++){
    sum += arr[idx];
  }
  avg = sum / arr.length;
  console.log(avg);
  return avg;
}

// Rewrite these as methods of an object

var mathObject = {

  sumBetweenObject:function sumBetweenObject(x, y){

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
  },


  minimum:function minimum(arr){
    var min = arr[0];
    for(var idx = 0; idx < arr.length; idx++){
      if(arr[idx] < min){
        min = arr[idx];
      }
    }
    console.log(min);
    return min;
  },


  avgObject:function avgObject(arr){
    var avg = 0;
    var sum = 0;
    for (idx = 0; idx < arr.length; idx++){
      sum += arr[idx];
    }
    avg = sum / arr.length;
    console.log(avg);
    return avg;
  }
}

var array = [5, 2, 1, 6, 3, 2, -4, 2, 6, 0, 12];

sumBetween(3, 6)
minimum(array);
average(array);

sumBetweenAnon();
minimumAnon(array);
averageAnon(array);

mathObject.minimum(array);
mathObject.sumBetweenObject(2, 6);
mathObject.avgObject(array);


/* Create a JavaScript object called person with the following properties/methods

Properties
name - set this as your own name
distance_traveled - set this initially as zero
Methods
say_name - should alert the object’s name property
say_something - have it accept a parameter. This function should then say for example “{{your name}} says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.
walk - have it alert for example “{{your name}} is walking” and increase distance_traveled by 3
run - have it alert for example “{{your name}} is running” and increase distance_traveled by 10
crawl - have it alert for example “{{your name}} is crawling” and increase distance_traveled by 1 */

var person = {
  name:"Andrew",
  distance_traveled:0,
  say_name : function (){
    console.log(person.name);
    return person;
  },
  say_something : function (something){
    console.log(person.name + " says " + something)
    return person;
  },
  walk : function (){
    person.distance_traveled += 3;
    console.log(person.name + ' is walking. Distance traveled: ' + person.distance_traveled)
    return person;
  },
  run : function (){
    person.distance_traveled += 10;
    console.log(person.name + ' is running. Distance traveled: ' + person.distance_traveled)
    return person;
  },
  crawl : function (){
    person.distance_traveled += 1;
    console.log(person.name + ' is crawling. Distance traveled: ' + person.distance_traveled)
    return person;
  },
}

person.say_name().say_something("I am cool").walk().walk().run().run().crawl().crawl();
