/**
 * Created by Jenya on 21.04.15.
 */

define(['BeingClass'], function (BeingClass) {

    var AnimalClass = function (clas, name, legsAmount, movementType) {
        BeingClass.call(this, clas, name, legsAmount);
        this.setMovementType(movementType)
    };

    AnimalClass.prototype = Object.create(BeingClass.prototype);

    return (AnimalClass);
});


