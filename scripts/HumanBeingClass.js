/**
 * Created by Jenya on 21.04.15.
 */

define(['BeingClass'], function (BeingClass) {

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

    return (HumanBeingClass);
});