
// If I wanted to build this myself without assignment parametesr I might add a
// this.noise at the time of creation as an argument and that wait we wouldn't
//necessarily have to rewrite the function
// for every time we wanted to call car.makeNoise()

function vehicleConstructor(name, wheels, passengers){

  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;

  this.makeNoise = function(){
    console.log("Squeaky squeaky");
  }
  console.log(this);
}


bike = new vehicleConstructor("Bike", 2, 1);

bike.makeNoise();
bike.makeNoise = function(){
  console.log("ring ring!")
};
bike.makeNoise();


sedan = new vehicleConstructor("Sedan", 4, 4);

sedan.makeNoise = function(){
  console.log("Honk Honk!");
};
sedan.makeNoise()


bus = new vehicleConstructor("Bus", 4, 1);

bus.addPassengers = function(num){
  this.passengers += num;
  console.log("Added " + num + " passengers")
}
console.log(bus.passengers)
bus.addPassengers(10);
console.log(bus.passengers);
