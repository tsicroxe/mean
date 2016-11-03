/* Create a function that takes in one parameter called “name”
and returns an object that looks
 similar to the person object from JS Fundamentals Part II. */

function personConstructor(name){
   var person;
   person = {
      name:name,
      distance_traveled:0,
   }
   person.say_name = function(){
      console.log(person.name);
      return person;
   }
   person.say_something = function(something){
      console.log(person.name + " says " + something)
      return person;
   }
   person.walk = function(){
      person.distance_traveled += 3;
      console.log(person.name + ' is walking. Distance traveled: ' + person.distance_traveled)
      return person;
   }
   person.run = function(){
      person.distance_traveled += 10;
      console.log(person.name + ' is running. Distance traveled: ' + person.distance_traveled)
      return person;
   }
   person.crawl = function(){
   person.distance_traveled += 1;
   console.log(person.name + ' is crawling. Distance traveled: ' + person.distance_traveled)
   return person;
   }
   return person;
}
// var bob = personConstructor('Bob')
// console.log(bob);
// bob.say_name().say_something("I'm a boss").walk().walk().run().run().crawl().crawl()
// bob.say_name().say_something("I'm a boss").walk().walk().run().run().crawl().crawl()
//
// var alice = personConstructor('Alice')
// console.log(alice);
// alice.say_name().say_something("I'm a boss").walk().walk().run().run().crawl().crawl()


/* Now create a ninjaConstructor that can be used to create Ninjas
 that each has a name, cohort, and belt-level.
  Give all of the Ninjas a “levelUp” method that increases their belt-level
  (Have all ninjas start at a yellow-belt).
*/
function ninjaConstructor(name, cohort){
   var ninja;
   ninja = {
      name:name,
      cohort:cohort,
      belt_level:'yellow-belt'
   }
   ninja.level_up = function(){
      console.log(ninja.belt_level);
      if ( ninja.belt_level === 'yellow-belt' ){
         ninja.belt_level = 'red-belt';
         return ninja;
      }
      else if ( ninja.belt_level === 'red-belt' ){
         ninja.belt_level = 'black-belt';
         return ninja;
      }
   }
   return ninja;
}

brian = ninjaConstructor('Brian', "Mean 1");

// console.log(brian.name, brian.cohort, brian.belt_level);
// brian.level_up();
// console.log(brian.name, brian.cohort, brian.belt_level);
// brian.level_up();
// console.log(brian.name, brian.cohort, brian.belt_level);
