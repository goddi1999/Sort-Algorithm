"use strict"

import * as THREE from "./build/three.module.js";

// import for modules

//Orbit controls allow the camera to orbit around a target
import { OrbitControls } from "./lib/jsm/controls/OrbitControls.js";

// create Scene 
var scene = new THREE.Scene();



// create Datastructure
// create head
var head = null;


// create Node structure Type class
class NodeElement {

    // create Node structure
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    // append Node
    append(data) {

        var appendNode = new NodeElement(data)
        if (head == null) {

            head = appendNode;


        } else {
            var newNode = head;
            while (newNode.next != null) {
                newNode = newNode.next;


            }
            newNode.next = appendNode;


        }

    }

    // switch node on Index
    switchNodePositon(index) {
        var switchNode = head;
        var currentPostion = 0;

        while (currentPostion != index) {
            switchNode = switchNode.next;
            currentPostion++;
        }

        var currentNode = switchNode.data;
        var nextCurrentNode = switchNode.next.data;
        console.log(currentNode, "  ", nextCurrentNode)

        var tmp = nextCurrentNode;
        switchNode.next.data = currentNode;
        switchNode.data = tmp;


    }

    // print all Node data
    printNode() {
        var current = head;
        var index = 0;

        while (current != null) {
            console.log("index: ", index, " node Data: ", current.data);
            current = current.next;
            index++;

        }
    }

    // find Node on Index return the data as String
    findNode(index) {
        var findNode = head;
        var currentPostion = 0;

        while (currentPostion != index) {
            findNode = findNode.next;
            currentPostion++;
        }


        return findNode.data;

    }
}

// green #0FF000 or rgb(124,252,0)
// yellow "rgb(222,184,135)
// sandstone rgb(207, 194, 188)
// greey #808e9b
//generate Box
function generateBox(w, h, d) {
    var geometry = new THREE.BoxGeometry(h, w, d);
    var material = new THREE.MeshPhongMaterial({ color: "rgb(207, 194, 188)" }); // grey  

    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = -3
        // material.opacity = 0.7
    material.transparent = true;
    mesh.translateY(0);
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



var list = new NodeElement();

// add it to datascruture
list.append(box0);
list.append(box1);
list.append(box2);
list.append(box3);
list.append(box4);


// print node type Data 
list.printNode();




// generate Text
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



// MAIN FUNCTION 

function main() {

    $(document).ready(function() {

        // number that the user typed in
        var userInputList = [];

        $("input").keyup(function() {

            // get current ID
            var currentID = $(this).attr('id');

            startBox(currentID)

            // user value
            var currentValInput = $("#" + currentID).val();

            // go to next user Input field
            var nextElement = $(this).next().attr("id");
            $("#" + nextElement).focus();

            // covert to Integer
            parseInt(currentValInput);



            // push it to our list as Integer
            userInputList.push(currentValInput);

            // create text on Box
            generateText(currentValInput, boxArray[currentID]);


            const btn0 = $('#0').val();
            const btn1 = $('#1').val();
            const btn2 = $('#2').val();
            const btn3 = $('#3').val();
            const btn4 = $('#4').val();
            parseInt(btn0);
            parseInt(btn1);
            parseInt(btn2);
            parseInt(btn3);
            parseInt(btn4);
            if (isNaN(btn0 || btn1 || btn2 || btn3 || btn4)) {
                document.getElementById(currentID).value = "";



                alert("invalid Input")
            }

            if (btn0 && btn1 && btn2 && btn3 && btn4) {
                console.log('true', btn0, btn1, btn2, btn3, btn4)
                $('#startButton').css('opacity', '1');
                $('#startButton').css('pointer-events', 'fill');

            }
        })




        // sStart Button
        $("#startButton").on("click", function() {

            // create JSONOject from user Input
            var userInputListJson = JSON.stringify(userInputList);


            // solved Array from Bubblesort as JSON OBJECT
            var sortedArrayJson = solveArraywithBubblesort(userInputListJson);


            // convert to Java Script Object
            var sortedArray = JSON.parse(sortedArrayJson);



            // convert backend Solution to Integer
            for (let index = 0; index < userInputList.length; index++) {

                userInputList[index] = parseInt(userInputList[index]);

            }


            // Backendsolution
            sortedArray = sortedArray.arrayJSON;


            // create 2d array
            var twoDimensionalArray = [];


            // Sorted Array length
            var LEN = sortedArray.length;

            for (let i = 0; i < LEN; i++) {
                twoDimensionalArray[i] = sortedArray[i];



            }


            console.log("\nbackendsolution", twoDimensionalArray)
            console.log("userintputList: ", userInputList)
            var limiter = 0;
            var iteration = 0;

            //  function that run ever 3 seconds
            var timer = setInterval(() => {
                    for (let j = iteration; j < 5; j++) {


                        // current user Input 
                        var userInput = userInputList[j];
                        var userInputNext = userInputList[j + 1];

                        if (userInput > userInputNext) {

                            console.log("\n\nuserInput", userInput, "index:", j)
                            console.log("userInputnext", userInputNext, "index: ", j)

                            // switch box BubbleAnimation function
                            switchBox(j, j + 1);

                            // switch user Inputs
                            var tmp = userInput;
                            userInputList[j] = userInputList[j + 1];
                            userInputList[j + 1] = tmp;
                            // console.log("after SWITCH ", userInputList)

                            // set start point from for Loop
                            iteration++;
                            break;

                        } else if (userInputList[j] == twoDimensionalArray[j]) {
                            limiter++;
                            console.log("limiter", limiter)
                            iteration = 0;

                            if (limiter > LEN) {

                                console.log("TERMINATE CLEAR INTERVAL")
                                clearInterval(timer);
                            }


                        }


                    }

                },
                3000);

        });


        $("#clearButton").on("click", function() {
            location.reload();
        })


    });


    // create Scene 
    var scene = new THREE.Scene();


    // create Camera
    var camera = new THREE.PerspectiveCamera(
        45,
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
    renderer.setClearColor("#eee");
    renderer.setSize(window.innerWidth, window.innerHeight);

    // add it to html site
    document.body.appendChild(renderer.domElement);



    function generateFloor(w, d) {
        var floor = new THREE.PlaneGeometry(50, 50, 1, 1);
        var mat = new THREE.ShadowMaterial();
        mat.opacity = 0.2;

        var mesh = new THREE.Mesh(floor, mat);
        mesh.material.side = THREE.DoubleSide;
        mesh.position.y = -4

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



    // translate Box in X direction
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
    camera.position.z = 15; // 0

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




    // function switch Boxes
    function switchBox(indexA, indexB) {

        // timline
        var tl = new TimelineMax({



        });

        // get current Boxes
        var box0 = list.findNode(indexA);
        var box1 = list.findNode(indexB);

        // change Box color+// yellow "rgb(222,184,135)

        // get current Postion from boxes
        var boxACurrentPostion = box0.position.x;
        var boxBCurrentPostion = box1.position.x;

        //Animation in Boxes in DIRECTION | X | Y | Z
        tl.to(box0.position, 1, { z: 2, ease: Expo.easeOut }).to(box0.position, 0.5, { x: boxBCurrentPostion, ease: Expo.easeOut });
        tl.to(box1.position, 1, { x: boxACurrentPostion, ease: Expo.easeOut }).to(box0.position, 1, { z: 0, ease: Expo.easeOut })


        // switch position in Datastructure
        list.switchNodePositon(indexA)

        // kritisch auf 
        return tl;
    }


    function startBox(currentBox) {

        // animation Box scale in y 
        // timline
        var tl = new TimelineMax({



        });

        var startBox = list.findNode(currentBox);


        // console.log(startBox.material.color);
        // Color Animation
        // yellow "rgb(222,184,135)

        // startBox.material.color.r = "0.222"
        // startBox.material.color.g = "18"
        // startBox.material.color.b = "0.135"


        tl.to(startBox.position, 1, { y: -1, ease: Bounce.easeOut })




    }


}




main();