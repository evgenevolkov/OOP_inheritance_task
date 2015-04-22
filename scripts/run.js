/**
 * Created by Jenya on 22.04.15.
 */

define(['Movement'],
    function (Movement) {

        var run = new Movement(function (name) {
            console.log(name + " is running!");
        });

        return (run);

    });