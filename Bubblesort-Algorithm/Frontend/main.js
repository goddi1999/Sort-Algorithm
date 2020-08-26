"use strict"

import * as THREE from "./build/three.module.js";

// import for modules
import { OrbitControls } from "./lib/jsm/controls/OrbitControls.js";

// create Scene 
var scene = new THREE.Scene();


// gloabal Functions




//generate Box
function generateBox(w, h, d) {
    var geometry = new THREE.BoxGeometry(h, w, d);
    var material = new THREE.MeshPhongMaterial({ color: "rgb(202, 169, 144);" });
    var mesh = new THREE.Mesh(geometry, material);

    mesh.translateY(2);
    // shadow
    mesh.castShadow = true;
    return mesh;


}




// create Box
var box0 = generateBox(2, 2, 1);
var box1 = generateBox(2, 2, 1);
var box2 = generateBox(2, 2, 1);
var box3 = generateBox(2, 2, 1);
var box4 = generateBox(2, 2, 1);


// array of boxes
var boxArray = [box0, box1, box2, box3, box4];
// name box
box0.name = "box0"
box1.name = "box1"
box2.name = "box2"
box3.name = "box3"
box4.name = "box4"



// generate text
function generateText(number, cubeName) {
    var loader = new THREE.FontLoader();
    loader.load('fonts/helvetiker_regular.typeface.js', function(font) {

        var textGeometry = new THREE.TextGeometry(number, {

            font: font,
            size: 1,
            height: 0.1,
            curveSegments: 10,
            bevelThickness: 0,
            bevelSize: 8,
            bevelSegments: 3


        });


        var textMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });

        var mesh = new THREE.Mesh(textGeometry, textMaterial);
        mesh.position.set(-0.5, -0.5, 0.5);


        cubeName.add(mesh);

    });

};





function main() {

    $(document).ready(function() {
        var userInputList = [];

        $("input").keyup(function() {
            var currentID = $(this).attr('id');
            // user value
            var currentValInput = $("#" + currentID).val();

            // get next element
            var nextElement = $(this).next().attr("id");
            $("#" + nextElement).focus();

            parseInt(currentValInput);
            userInputList.push(currentValInput);
            // create text on Box
            generateText(currentValInput, boxArray[currentID]);



        })



        $("#startButton").on("click", function() {
            // create JSONOject from user Input
            var userInputListJson = JSON.stringify(userInputList);

            console.log("typeof: ", typeof(userInputListJson));
            console.log("userinputjson: ", userInputListJson);

            // solved Array from Bubblesort as JSON OBJECT
            var sortedArrayJson = solveArraywithBubblesort(userInputListJson);
            console.log("sortedArray", sortedArrayJson);


            // convert to JSONObject
            var sortedArray = JSON.parse(sortedArrayJson);
            console.log("backend-recive sortedArray.arrayJSON\t", sortedArray.arrayJSON);
            for (var x in userInputList) {
                userInputList.push(parseInt(userInputList));

            }
            console.log("USERINPUT\t", userInputList[1]);
            sortedArray = sortedArray.arrayJSON;
            console.log("sortedarr", sortedArray)


            // create 2d array
            var twoDimensionalArray = [];

            function setArraySize(arr) {
                return arr.length / 5
            }

            var LEN = setArraySize(sortedArray)
            var p = 0;
            for (let i = 0; i < LEN; i++) {
                twoDimensionalArray[i] = [];
                for (let j = 0; j < 5; j++) {
                    twoDimensionalArray[i][j] = sortedArray[p];
                    p++;


                }

            }

            var index = 0;
            console.log("LEN", LEN);
            console.log("\n\ntwoDimensionalArray", twoDimensionalArray)
            while (index != LEN) {
                for (let j = 0; j < 5; j++) {

                    var userInput = userInputList[j];
                    var backendSolution = twoDimensionalArray[index][j];
                    if (userInput != backendSolution) {
                        console.log("userInputlist", userInputList[j])
                        console.log("backendSolution", backendSolution)
                        console.log("j= ", j, "\tj+1 = ", j + 1)
                        switchBox(j, j + 1);
                        index++;


                    }

                }



            }
            console.log("done")












        });










    });


    // create Scene 
    var scene = new THREE.Scene();


    // create Camera
    var camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );

    // create renderer
    var renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;

    // control camera
    var controlCamera = new OrbitControls(camera, renderer.domElement);

    // set background color
    renderer.setClearColor("#ffffff");
    renderer.setSize(window.innerWidth, window.innerHeight);

    // add it to html site
    document.body.appendChild(renderer.domElement);



    function generateFloor(w, d) {
        var floor = new THREE.PlaneGeometry(50, 50, 1, 1);
        var mat = new THREE.ShadowMaterial();
        mat.opacity = 0.2;

        var mesh = new THREE.Mesh(floor, mat);
        mesh.material.side = THREE.DoubleSide;

        // rotate 
        mesh.rotation.x = Math.PI / 2;

        // shadow
        mesh.receiveShadow = true;


        return mesh;

    }



    // generate Point-Light
    function generatePointLight() {
        var light = new THREE.PointLight(0xffffff, 1.4, 2000);
        light.position.set(0, 20, 20);

        light.castShadow = true;

        return light;

    }

    // create Direction Light
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.35);
    directionalLight.position.x = 10;
    directionalLight.position.z = 5;


    // create light 
    var pointLight = generatePointLight();



    // create floor
    var floor = generateFloor(20, 15);




    // create Numbers
    // generateText("8", box0);
    // generateText("7", box1);
    // generateText("2", box2);
    // generateText("9", box3);
    // generateText("4", box4);


    // translate Box
    box0.translateX(-6);
    box1.translateX(-3);
    box2.translateX(0);
    box3.translateX(3);
    box4.translateX(6);




    // add it to Scene
    scene.add(box0);
    scene.add(box1);
    scene.add(box2);
    scene.add(box3);
    scene.add(box4);
    scene.add(floor);
    scene.add(pointLight);
    scene.add(directionalLight);





    //set comera position
    camera.position.x = 0;
    camera.position.y = 1; // 12
    camera.position.z = 10; // 0

    // camere view 
    camera.lookAt(new THREE.Vector3(0, 1, 0));



    // render Loop
    function updateScene(renderer, scene, camera, controlCamera) {



        renderer.render(scene, camera);
        requestAnimationFrame(function() {
            updateScene(renderer, scene, camera, controlCamera);
        });
    }

    updateScene(renderer, scene, camera, controlCamera);


    // global timeline


    // function switch Boxes
    function switchBox(indexA, indexB) {
        // var tl = new TimelineMax({}).delay(.3);

        // // console.log("box" + indexA, " box" + indexB)
        // // get current Box to switch
        // var getCurrentBoxA = box0; //scene.getObjectByName("box0");
        // var getCurrentBoxB = box1; //scene.getObjectByName("box1");

        // // current Position from Boxes
        // var boxACurrentPostion = getCurrentBoxA.position.x;
        // var boxBCurrentPostion = getCurrentBoxB.position.x;

        // //Animation in X | Y | Z
        // tl.to(boxACurrentPostion.position, 1, { z: 2, ease: Expo.easeOut }).to(boxBCurrentPostion.position, 0.5, { x: boxACurrentPostion, ease: Expo.easeOut });
        // tl.to(boxACurrentPostion.position, 1, { x: boxBCurrentPostion, ease: Expo.easeOut }).to(boxACurrentPostion.position, 1, { z: 0, ease: Expo.easeOut });

        var tl = new TimelineMax({ paused: false, delay: .3 });
        // current Position from Boxes
        var box0 = scene.getObjectByName("box" + indexA);
        var box1 = scene.getObjectByName("box" + indexB);
        console.log("swtich indexA: ", indexA, "swtich indexB: ", indexB);
        var boxACurrentPostion = box0.position.x;
        var boxBCurrentPostion = box1.position.x;
        //nimation in X | Y | Z
        tl.to(box0.position, 1, { z: 2, ease: Expo.easeOut }).to(box0.position, 0.5, { x: boxBCurrentPostion, ease: Expo.easeOut });
        tl.to(box1.position, 1, { x: boxACurrentPostion, ease: Expo.easeOut }).to(box0.position, 1, { z: 0, ease: Expo.easeOut });


        return 0;
    }


}

/*
    
JQUERY SYNTAX
$(target).event(function(){
}
});
    
*/



main();