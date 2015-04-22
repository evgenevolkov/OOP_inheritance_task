/**
 * Created by Jenya on 22.04.15.
 */

define(['Movement'],
    function (Movement) {

        jump = new Movement(function (name) {
            console.log(name + " is jumping!")
        });

        return (jump);

    });