'use strict';
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//                              Constructural functions
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//Coding challenge #1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log(this.speed + 10);
  this.speed = this.speed + 10;
};

Car.prototype.brake = function () {
  console.log(this.speed - 5);
  this.speed = this.speed - 5;
};

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);
// console.log(bmw);
// console.log(mercedes);
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();

//coding challenge #3

const Ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

Ev.prototype = Object.create(Car.prototype);

Ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h with a charge of ${this.charge}`
  );
};

// const test = new EvCl('Tesla', 120, 23);
// console.log(test);
// test.chargeBattery(90);
// console.log(test.charge);
// test.accelerate();
// test.accelerate();
// test.accelerate();
// test.brake();
// Car.prototype.accelerate.call(test);

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//                              ES6 Classes
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//coding challenge #2

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log(this.speed + 10);
    this.speed = this.speed + 10;
  }

  brake() {
    console.log(this.speed - 5);
    this.speed = this.speed - 5;
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

//const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.brake();
// ford.accelerate();
// ford.speedUS = 50;
// console.log(ford);
// console.log(ford.speedUS);
// console.log(ford.speed);

//ability to chain accel and chargebat
//ability to chain brake from CarCl

//Coding challenge #4
class EvCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

// const test = new EvCl('Rivian', 120, 23);

// test.accelerate();
// test.chargeBattery(90);
// test.accelerate();
// test.brake();
// test.accelerate().brake().chargeBattery(95).accelerate();
