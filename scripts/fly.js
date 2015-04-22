/**
 * Created by Jenya on 22.04.15.
 */

define(['Movement'],
    function (Movement) {

        var fly = new Movement(function (name) {
            console.log(name + " is flying!")
        });

        return (fly);

    });