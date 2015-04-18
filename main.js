/**
 * Created by Jenya on 18.04.15.
 */

function Animal(name) {
    this.legs = 4;
    this.name = name;
    return this.name;
}

Animal.prototype.move = function () {
    console.log(this.name + " is running")
};

//Animal.prototype.setMovementType = function (movementType) {
//    this.move = movementType;
//};
//Animal.prototype.move = function (movementType) {
//     run();
//};
//var run = function () {
//    console.log (this.name + " is running")
//};
//
//animal1.setMovementType(run);

var rabit = new Animal("rabit");

console.log("rabit.name: " + rabit.name);
console.log("rabit is: " + rabit);
console.log("rabits legs amount is: " + rabit.legs);
rabit.move();

var rabit1 = {};

rabit1.__proto__ = rabit;

console.log("rabit1.name: " + rabit1.name);
console.log("rabit1 is: " + rabit1);
console.log("rabits1 legs amount is: " + rabit1.legs);
rabit1.move();

//var animal = { eats: true }
//var rabbit = { jumps: true }

rabit1.name = "rabit1";
console.log("now rabit1.name: " + rabit1.name);


//rabbit.__proto__ = animal  // inherit

//alert(rabbit.eats) // true
