"use strict"
// port so solve 
// "http://localhost:8085/solvearray


function queryAPI() {


    var request = new XMLHttpRequest();

    // https://learnwebcode.github.io/json-example/animals-1.json
    request.open("GET", "http://localhost:8085/solvearray");

    // Wenn anforderungen erfolgreich abgeschlossen wurde
    request.onload = function() {


        var data = JSON.parse(request.responseText);
        // console.log(request.responseText)
        bubbleSortAlgorithmAnimate(data)


    };

    request.send();

}

function bubbleSortAlgorithmAnimate(array) {
    console.log("JSON OBJECT:\t", array);

    return array;


}


//  Vsriante 2
// -------------------------------------------------------------------------------------

// post our json object to the portel were we recive an response
// https: //learnwebcode.github.io/json-example/animals-1.json
function bubbleSortAPI(url, array = "") {
    var result;
    // code
    $.ajax({
        type: "POST",
        url: url,
        async: false,
        data: {
            jsonString: array
        }

    }).done(function(data) {


        result = data;

    })



    return result;
}




// return a JSONObject or String Array 
function solveArraywithBubblesort(jsonObject) {


    var data = bubbleSortAPI("http://localhost:8085/solvearray", jsonObject);
    return data;

}