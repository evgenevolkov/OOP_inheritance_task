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

var rabbit = new Animal("rabbit");

console.log("rabbit.name: " + rabbit.name);
console.log("rabbit is: " + rabbit);
console.log("rabbits legs amount is: " + rabbit.legs);
rabbit.move();

var rabbit1 = {};

rabbit1.__proto__ = rabbit;


console.log("rabbit1.name: " + rabbit1.name);
console.log("rabbit1 is: " + rabbit1);
console.log("rabbits1 legs amount is: " + rabbit1.legs);
rabbit1.move();

//var animal = { eats: true }
//var rabbit = { jumps: true }

rabbit1.name = "rabbit1";
console.log("now rabbit1.name: " + rabbit1.name);


//rabbit.__proto__ = animal  // inherit

//alert(rabbit.eats) // true
