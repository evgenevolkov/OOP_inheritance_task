/**
 * Created by Jenya on 18.04.15.
 */

/// At first I'm creating general BeingClass. It will be the top of all being classes.
function BeingClass(name) {
    this.legs = 4;
    this.name = name;
    return this.name;
}

// Than I'm adding move function to all beings.
BeingClass.prototype.move = function () {
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

// Now I'm creating animal class. It will be used for all animals.
var animalClass = new BeingClass("animalClass");

// adding speak method that will say it does't speak.
animalClass.speak = function () {
    cosole.log(this.name + "is an animal. It can't speak")
};

// Now creating first animal - rabbit
//var rabbit = {};
var rabbit = Object.create(animalClass);
rabbit.name = "rabbit";


// Checking out animal class functions and properties
console.log("---Now checking " + animalClass.name);
console.log("AnimalClass.name: " + animalClass.name);
console.log("AnimalClass is: " + animalClass);
console.log("AnimalClass constructor is: " + animalClass.constructor);
console.log("AnimalClass legs amount is: " + animalClass.legs);
animalClass.move();

// Checking out rabbit functions and properties
console.log("---Now checking " + rabbit.name);
console.log("rabbit.name: " + rabbit.name);
console.log("rabbit is: " + rabbit);
console.log("rabbit constructor is: " + rabbit.constructor);
console.log("rabbits legs amount is: " + rabbit.legs);
rabbit.move();

// creating another rabbit - babyRabbit. It will inherit from 'rabbit'
//var rabbitBaby = {};

// Now creating another one rabit
var rabbitBaby = Object.create(rabbit);

console.log("rabitBaby is currently a baby, so it's name like it's parent. ");
console.log("rabbitBaby.name: " + rabbitBaby.name);
console.log("rabbitBaby is: " + rabbitBaby);
console.log("rabbitBaby's legs amount is: " + rabbitBaby.legs);
rabbitBaby.move();

// Now changing rabitBaby's name.
rabbitBaby.name = "rabbitBaby";
console.log("rabbitBaby grew up. It has it's own name now");
console.log("now rabbitBaby.name: " + rabbitBaby.name);

// In order to check inheritance I'm changing rabbit.property
console.log("---Rabbits population suddenly mutated. All rabbits legs amount decreased to 3...");
rabbit.legs = 3;
console.log("rabbit's legs amount now is: " + rabbit.legs);
console.log("rabbitBaby's legs amount now is: " + rabbitBaby.legs);

// now creating Human being class. It will be used as specimen for all new human being creation
console.log("---Now creating human");

var HumanBeingClass = new BeingClass();

// Changing number of legs
HumanBeingClass.legs = 2;

//Now creating first human being.
//var humanJack = {};
var humanJack = Object.create(HumanBeingClass);
humanJack.name = "Jack";

//Checking out Jack's properties and functionality
console.log("Jack.name: " + humanJack.name);
console.log("Jack is: " + humanJack.name);
console.log("Jack constructor is: " + humanJack.constructor);
console.log("Jack legs amount is: " + humanJack.legs);
humanJack.move();

console.log("THE END");