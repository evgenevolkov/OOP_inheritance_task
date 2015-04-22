/**
 * Created by Jenya on 18.04.15.
 */

/// At first I'm creating general BeingClass. It will be the top of all being classes.
require(['BeingClass', 'AnimalClass', 'HumanBeingClass'],
    function (BeingClass, AnimalClass, HumanBeingClass) {

        var Movement = function (func) {
            this.move = func;
        };

        var move = {};

        move.jump = new Movement(function (name) {
            console.log(name + " is jumping!")
        });

        move.run = new Movement(function (name) {
            console.log(name + " is running!");
        });
        move.fly = new Movement(function (name) {
            console.log(name + " is flying!")
        });

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

        // now creating Human being class. It will be used as specimen for all new human being creation
        console.log("---Now creating human");

        //Now creating first human being.
        var humanJack = new HumanBeingClass("Jack", "Johnson", move.run);

        //Checking out Jack's properties and functionality
        console.log("Jack.name: " + humanJack.name);
        console.log("Jack constructor is: " + humanJack.constructor);
        console.log("Jack legs amount is: " + humanJack.legs);

        humanJack.logName().makeMove();

        // Change Jack's movement type to check if STRATEGY PATTERN works in a proper way
        console.log("Jack has just learned to jump");
        humanJack.setMovementType(move.jump).makeMove().makeMove();

        console.log("THE END");

    });




