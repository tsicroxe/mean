
// If I wanted to build this myself without assignment parametesr I might add a
// this.noise at the time of creation as an argument and that wait we wouldn't
//necessarily have to rewrite the function
// for every time we wanted to call car.makeNoise()

function vehicleConstructor(name, wheels, passengers, speed){
  if (!(this instanceof vehicleConstructor)){
    return new vehicleConstructor(name, wheels, passengers, speed);
  }
  var vin = createVin();

   function createVin(){
    var characters = '0123456789ABCDEFGHJIJKLMNOPQRSTUVWXYZ';
    var vin = '';
    for(var i = 1; i < 18; i++){
      vin += characters[Math.floor((Math.random() * 35))];
    }
    return vin;
  }

  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;
  this.distance_traveled = 0;

  vehicleConstructor.prototype.makeNoise = function(){
    console.log("Squeaky squeaky");
    return this;
  }
  vehicleConstructor.prototype.move = function(){
    this.updateDistanceTravelled();
    this.makeNoise();
    return this;
  }
  vehicleConstructor.prototype.updateDistanceTravelled = function(){
    this.distance_traveled += this.speed;
    console.log('Distance traveled: ' + this.distance_traveled + ' by ' + this.name);
  }
  vehicleConstructor.prototype.checkMiles = function(){
    console.log("Checking miles: " + this.distance_traveled + ' on the ' + this.name);
    return this;
  }
  this.getVin = function(){
    console.log(vin);
    return this;
  }
  console.log(this);
  return this;
}


bike = new vehicleConstructor("Bike", 2, 1, 25);

bike.makeNoise();
bike.makeNoise = function(){
  console.log("ring ring!")
};
bike.makeNoise();


sedan = new vehicleConstructor("Sedan", 4, 4, 120);

sedan.makeNoise = function(){
  console.log("Honk Honk!");
};
sedan.makeNoise()


bus = new vehicleConstructor("Bus", 4, 1, 50);

bus.addPassengers = function(num){
  this.passengers += num;
  console.log("Added " + num + " passengers to " + this.name)
}
console.log(bus.passengers)
bus.addPassengers(10);
console.log(bus.passengers);
console.log(bike.passengers);

bus.move();
// console(bus.distance_traveled); Just a test and yes, it won't work
bus.checkMiles();
bike.checkMiles();
bike.move();
bike.checkMiles();
console.log('gonna try to hack bus.vin... ' + bus.vin);
bus.vin = 'klajdlfkja'; //Gonna try to hack it!
console.log(bus.vin) //I did it!


bike.getVin();
sedan.getVin();
bus.getVin();
