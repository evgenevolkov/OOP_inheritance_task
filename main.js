/**
 * Created by Jenya on 18.04.15.
 */

/// At first I'm creating general BeingClass. It will be the top of all being classes.
function BeingClass(clas, name, legsAmount) {
    this.clas = clas;
    this.name = name;
    this.legs = legsAmount;
    this.movementType = "";
}

// Than I'm adding move function to all beings.
BeingClass.prototype.makeMove = function () {
    this.movementType.move(this.name);
    return this;
};

BeingClass.prototype.setLegsAmount = function (legsAmount) {
    this.legs = legsAmount;
    return this;
};

//Making a method to print object's properties
BeingClass.prototype.logName = function () {
    console.log("This.class: " + this.clas + "; this.name: " + this.name + "; this.legs= " + this.legs);
    return this;
};

//Now I'm setting movement methods, strategy and type switch - BEGIN
BeingClass.prototype.setMovementType = function (newMovementType) {
    this.movementType = newMovementType;
    return this;
};

var move = {};

var Movement = function (func) {
    this.move = func;
    return this;
};

move.jump = new Movement(function (name) {
    console.log(name + " is jumping!")
});

move.run = new Movement(function (name) {
    console.log(name + " is running!");
});
move.fly = new Movement(function (name) {
    console.log(name + " is flying!")
});

// Now I'm creating animal class. It will be used for all animals.
//
var AnimalClass = function (clas, name, legsAmount, movementType) {
    BeingClass.call(this, clas, name, legsAmount);
    this.setMovementType(movementType)
};

AnimalClass.prototype = Object.create(BeingClass.prototype);

// Now creating first animal - rabbit
var rabbit = new AnimalClass("Rabbit class", "Rabbit Tim", 4, move.jump);

// Checking out rabbit functions and properties
console.log("-  Logging out rabbit: ");
rabbit.logName().makeMove();

// Now creating bird
var bird = new AnimalClass("Bird class", "Birdie", 0, move.fly);
bird.logName().makeMove();

// In order to check the work of inheritance I'm changing rabbit.property
console.log("---Rabbits  suddenly mutated. All rabbits legs amount decreased to 3...");
rabbit.setLegsAmount(3).logName().makeMove();
console.log("rabbit's legs amount now is: " + rabbit.legs);

// now creating Human being class. It will be used as specimen for all new human being creation
console.log("---Now creating human");

var HumanBeingClass = function (name, familyName, movementType) {
    BeingClass.call(this, "HumanBeing class", name);
    this.legs = 2;
    this.setMovementType(movementType);
    this.familyName = familyName;
    this.logName = function () {
        console.log("This.class: " + this.clas + "; this.name: " + this.name + " " + this.familyName + " this.legs= " + this.legs);
        return this;
    };
};
HumanBeingClass.prototype = Object.create(BeingClass.prototype);

//Now creating first human being.
var humanJack = new HumanBeingClass("Jack", "Johnson", move.run);

//Checking out Jack's properties and functionality
console.log("Jack.name: " + humanJack.name, ", Jack.familyName: " + humanJack.familyName);
console.log("Jack constructor is: " + humanJack.constructor);
console.log("Jack legs amount is: " + humanJack.legs);

humanJack.logName().makeMove();

// Change Jack's movement type to check if STRATEGY PATTERN works in a proper way
console.log("Jack has just learned to jump");
humanJack.setMovementType(move.jump).makeMove().makeMove();

console.log("THE END");




