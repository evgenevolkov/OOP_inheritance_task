/**
 * Created by Jenya on 18.04.15.
 */

/// At first I'm creating general BeingClass. It will be the top of all being classes.
function BeingClass(clas) {
    this.clas = clas;
    this.movementType = run;
}

// Than I'm adding move function to all beings.
BeingClass.prototype.makeMove = function () {
    return this.movementType.move(this.name);
};

//Making a method to print object's properties
BeingClass.prototype.logName = function () {
    console.log("This.class: " + this.clas + "; this.name: " + this.name + "; this.legs= " + this.legs)
};

//Now I'm setting movement methods, strategy and type switch - BEGIN
BeingClass.prototype.setMovementType = function (newMovementType) {
    this.movementType = newMovementType;
};

var Movement = function (func) {
    this.move = func;
};

var jump = new Movement(function (name) {
    console.log(name + " is jumping!")
});

var run = new Movement(function (name) {
    console.log(name + " is running!");
});
var fly = new Movement(function (name) {
    console.log(name + " is flying!")
});

//setting movement methods, strategy and type switch - END


// ---- please skip these comments
/// setting speak methods and strategy
//BeingClass.prototype.speak = function() {
//    this.speak()
//};
// ----- Skip END


// Now I'm creating animal class. It will be used for all animals.
//
var AnimalClass = function (clas, name, legs, movementType) {
    BeingClass.call(this, clas);
    this.legs = legs;
    this.name = name;
    this.setMovementType(movementType)
};

AnimalClass.prototype = Object.create(BeingClass.prototype);

// please skip
//// adding speak method that will say it does't speak.
//animalClass.speak = function () {
//    cosole.log(this.name + "is an animal. It can't speak")
//};
// skip END

// Now creating first animal - rabbit
var rabbit = new AnimalClass("Rabbit class", "Rabbit Tim", 4, jump);

// Checking out rabbit functions and properties
console.log("-  Logging out rabbit: ");
rabbit.logName();
rabbit.makeMove();

// Please skip
// creating another rabbit - babyRabbit. It will inherit from 'rabbit'
//var rabbitBaby = {};
// skip END

// Now creating bird
var bird = new AnimalClass("Bird class", "Birdie", 0, fly);
bird.logName();
bird.makeMove();

// In order to check the work of inheritance I'm changing rabbit.property
console.log("---Rabbits  suddenly mutated. All rabbits legs amount decreased to 3...");
rabbit.legs = 3;
console.log("rabbit's legs amount now is: " + rabbit.legs);

// now creating Human being class. It will be used as specimen for all new human being creation
console.log("---Now creating human");

var HumanBeingClass = function (name, familyName, movementType) {
    BeingClass.call(this, "HumanBeing class");
    this.legs = 2;
    this.name = name;
    this.setMovementType(movementType)
};
HumanBeingClass.prototype = Object.create(BeingClass.prototype);

//Now creating first human being.
var humanJack = new HumanBeingClass("Jack", "Johnson", run);

//Checking out Jack's properties and functionality
console.log("Jack.name: " + humanJack.name);
console.log("Jack constructor is: " + humanJack.constructor);
console.log("Jack legs amount is: " + humanJack.legs);

humanJack.logName();
humanJack.makeMove();

// Change Jack's movement type to check if STRATEGY PATTERN works in a proper way
console.log("Jack has just learned to jump");
humanJack.setMovementType(jump);
humanJack.makeMove();

console.log("THE END");