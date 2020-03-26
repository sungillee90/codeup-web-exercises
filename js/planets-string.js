(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = []; // Initialize EMPTY value.
    console.log('planetsString: ',planetsString);
    console.log('planetsArray: ',planetsArray);

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split('|');
    console.log('planetsArray.split(): ', planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var planetsWithBR = planetsArray.join("<br>");
    document.write(planetsWithBR);
    // console.log(planetsWithBR);

    // var planetString2 = "Mercury<br>Venus<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune";
    // var newPlanets = planetString2.split("'<br>'");
    // console.log('planetsString2.split(\'<br>\'): ', newPlanets);

    // BONUS
    var planetsUL = "<ul><li>";
    planetsUL += planetsArray.join('</li><li>');
    planetsUL += "</li></ul>";
    document.write(planetsUL);
    console.log(planetsUL);

})();
