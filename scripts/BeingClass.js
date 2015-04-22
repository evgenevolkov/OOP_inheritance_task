define(function () {

    function BeingClass(clas, name, legsAmount) {

        this.clas = clas;
        this.name = name;
        this.legs = legsAmount;
        this.movementType = {};
    }

    BeingClass.prototype = {
        makeMove: function () {
            this.movementType.move(this.name);
            return this;
        },

        setLegsAmount: function (legsAmount) {
            this.legs = legsAmount;
            return this;
        },

        //Making a method to print object's properties
        logName: function () {
            console.log("This.class: " + this.clas + "; this.name: " + this.name + "; this.legs= " + this.legs);
            return this;
        },

        //Now I'm setting movement methods, strategy and type switch - BEGIN
        setMovementType: function (newMovementType) {
            this.movementType = newMovementType;
            return this;
        }
    };

    return BeingClass;

});


